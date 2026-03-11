import type { ContactFormData } from '@/schema/contact.schema';
import { api } from './api';

export const sendContactForm = async (data: ContactFormData) => {
    const response = await api.post('/contact', data);
    return response.data;
};
