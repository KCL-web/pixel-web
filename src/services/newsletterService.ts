import type { NewsletterFormData } from '@/schema/newsletter.schema';
import { api } from './api';

export const subscribeNewsletter = async (data: NewsletterFormData) => {
    const response = await api.post('/newsletter', data);
    return response.data;
};
