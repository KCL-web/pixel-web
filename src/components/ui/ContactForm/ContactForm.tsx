import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Input } from '@components/ui/Input/Input';
import { Button } from '@components/ui/Button/Button';

import contactSchema, { type ContactFormData } from '@/schema/contact.schema';
import styles from './ContactForm.module.scss';
import { Textarea } from '@components/ui/TextArea/TextArea';
import { sendContactForm } from '@/services/contactService';

type ErrorsType = Partial<Record<keyof ContactFormData, string>>;

const phoneMask = (value: string) => {
    const numbers = value.replace(/\D/g, '').slice(0, 11);

    if (numbers.length <= 10) {
        return numbers
            .replace(/^(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2');
    }

    return numbers
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
};

const ContactForm = () => {
    const [form, setForm] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        details: '',
    });

    const [errors, setErrors] = useState<ErrorsType>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (field: keyof ContactFormData, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));

        setErrors((prev) => ({
            ...prev,
            [field]: undefined,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = contactSchema.safeParse(form);

        if (!result.success) {
            const fieldErrors: ErrorsType = {};

            result.error.issues.forEach((issue) => {
                const field = issue.path[0] as keyof ContactFormData;
                fieldErrors[field] = issue.message;
            });

            setErrors(fieldErrors);
            return;
        }

        setErrors({});
        setLoading(true);

        try {
            await sendContactForm(form);

            setForm({
                name: '',
                email: '',
                phone: '',
                details: '',
            });

            setSuccess(true);
        } catch (error) {
            console.log(`Erro ao enviar o formulário: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.section} id="contato">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Fale com a Pixel{' '}
                        <span className={styles.highlight}>Web</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Preencha o formulário e nossa equipe entrará em contato
                        para entender suas necessidades.
                    </p>
                </div>

                {success && (
                    <p className={styles.success}>
                        Solicitação enviada com sucesso. Nossa equipe entrará em
                        contato.
                    </p>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.grid}>
                            <Input
                                label="Nome completo"
                                id="name"
                                placeholder="Seu nome"
                                value={form.name}
                                error={errors.name}
                                onChange={(e) =>
                                    handleChange('name', e.target.value)
                                }
                            />

                            <Input
                                label="E-mail "
                                id="email"
                                type="email"
                                placeholder="email@empresa.com"
                                value={form.email}
                                error={errors.email}
                                onChange={(e) =>
                                    handleChange('email', e.target.value)
                                }
                            />
                            <Input
                                label="Telefone"
                                id="phone"
                                placeholder="(11) 99999-9999"
                                value={phoneMask(form.phone)}
                                error={errors.phone}
                                onChange={(e) =>
                                    handleChange('phone', e.target.value)
                                }
                            />
                        </div>

                        <Textarea
                            label="Detalhes adicionais"
                            id="details"
                            placeholder="Descreva suas necessidades..."
                            value={form.details}
                            onChange={(e) =>
                                handleChange('details', e.target.value)
                            }
                        />

                        <Button
                            type="submit"
                            variant="gradient"
                            disabled={loading}
                            className={styles.button}
                        >
                            <Send size={16} />
                            {loading ? 'Enviando...' : 'Enviar'}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
