import z from 'zod';

const contactSchema = z.object({
    name: z.string().trim().min(2, 'Nome é obrigatório').max(100),
    email: z.string().trim().email('E-mail inválido').max(255),
    phone: z.string().trim().min(8, 'Telefone inválido').max(20),
    message: z.string().max(1000).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export default contactSchema;
