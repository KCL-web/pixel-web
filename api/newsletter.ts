import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const start = Date.now();
    try {
        if (
            !process.env.SMTP_HOST ||
            !process.env.SMTP_PORT ||
            !process.env.SMTP_USER ||
            !process.env.SMTP_PASS ||
            !process.env.NEWSLETTER_EMAIL
        ) {
            throw new Error('SMTP environment variables missing');
        }

        const { email } = req.body ?? {};

        if (!email || typeof email !== 'string') {
            return res.status(400).json({
                error: 'Email is required',
            });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        try {
            await transporter.sendMail({
                from: `Newsletter <${process.env.SMTP_USER}>`,
                to: process.env.NEWSLETTER_EMAIL,
                subject: 'Novo inscrito na newsletter',
                html: `
                    <h2>Novo inscrito</h2>
                    <p><strong>Email:</strong> ${email}</p>
                `,
            });
        } catch (mailError) {
            console.error('Erro ao enviar email da newsletter:', mailError);
            return res.status(500).json({
                error: 'Erro ao enviar email da newsletter',
                details:
                    mailError instanceof Error ? mailError.message : mailError,
            });
        }

        const elapsed = Date.now() - start;
        return res.status(200).json({
            success: true,
            elapsedMs: elapsed,
        });
    } catch (error) {
        const elapsed = Date.now() - start;
        console.error('Newsletter API error:', error);
        return res.status(500).json({
            error: 'Erro ao registrar newsletter',
            details: error instanceof Error ? error.message : error,
            elapsedMs: elapsed,
        });
    }
}
