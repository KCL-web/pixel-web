import type { ConsentPrefs } from '@/utils/cookies';

type CookieCategoryKey = keyof Omit<ConsentPrefs, 'essential'> | 'essential';

interface CookieCategory {
    key: CookieCategoryKey;
    title: string;
    description: string;
    alwaysActive?: boolean;
}

export const COOKIE_CATEGORIES: CookieCategory[] = [
    {
        key: 'essential',
        title: 'Obrigatórios',
        description:
            'Usamos os cookies obrigatórios para realizar funções essenciais do site. Por exemplo, eles são usados para fazer seu login, salvar suas preferências de idioma, fornecer uma experiência de carrinho de compras, melhorar o desempenho, direcionar o tráfego entre servidores Web, detectar o tamanho da tela, determinar o tempo de carregamento das páginas, melhorar a experiência do usuário e medir a audiência. Esses cookies são necessários para que nossos sites funcionem.',
        alwaysActive: true,
    },
    {
        key: 'analytics',
        title: 'Análise',
        description:
            'Permitimos que terceiros usem cookies de análise para entender como você usa nossos sites e como podemos melhorá-los. Isso também permite que terceiros possam desenvolver e aprimorar seus produtos, os quais podem ser usados em sites que não pertencem ou não são operados pela PixelWeb. Por exemplo, eles são usados para coletar informações sobre as páginas que você visita e quantos cliques são necessários para realizar uma tarefa. Usamos alguns cookies de análise para publicidade.',
    },
    {
        key: 'social',
        title: 'Mídias sociais',
        description:
            'Assim como terceiros, usamos cookies de mídias sociais para mostrar anúncios e conteúdo com base nos perfis de redes sociais e na atividade em nossos sites. Eles são usados para conectar sua atividade em nossos sites aos perfis de redes sociais para que os anúncios e o conteúdo visualizados em nossos sites e nas mídias sociais possam refletir melhor seus interesses.',
    },
    {
        key: 'advertising',
        title: 'Publicidade',
        description:
            'Assim como terceiros, usamos cookies de publicidade e marketing para mostrar novos anúncios após registrar os anúncios que você já viu. Eles também são usados para rastrear os anúncios nos quais você clica ou compras que você faz após clicar em um anúncio para fins de pagamento e mostrar anúncios mais relevantes para você. Por exemplo, eles são usados para detectar quando você clica em um anúncio e para mostrar anúncios com base em seus interesses nas mídias sociais e no histórico de navegação do site.',
    },
];
