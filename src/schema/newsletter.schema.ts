import z from 'zod';

const emailSchema = z.object({
    email: z
        .string()
        .min(1, 'Email é obrigatório')
        .email('E-mail inválido')
        .max(255),
});
export type NewsletterFormData = z.infer<typeof emailSchema>;

export default emailSchema;
