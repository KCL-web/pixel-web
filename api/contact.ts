import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                error: 'Missing required fields',
            });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `Site <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: email || process.env.SMTP_USER,
            subject: 'Novo contato pelo site',
            html: `
              <h2>Novo contato recebido</h2>
            
              ${name ? `<p><strong>Nome:</strong> ${name}</p>` : ''}
              ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
              ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
            
              <p><strong>Mensagem:</strong></p>
              <p>${message}</p>
            `,
        });

        return res.status(200).json({
            success: true,
            message: 'Email enviado com sucesso',
        });
    } catch (error: unknown) {
        const message =
            error instanceof Error ? error.message : 'Erro ao enviar email';

        return res.status(500).json({
            error: message,
        });
    }
}
