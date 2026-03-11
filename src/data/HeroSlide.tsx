import slide1 from '@assets/images/slide1.webp';
import slide2 from '@assets/images/slide2.webp';
import slide3 from '@assets/images/slide3.avif';

export interface HeroSlide {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    url: string;
    image: string;
}

export const heroSlides: HeroSlide[] = [
    {
        title: 'Sistemas personalizados para empresas',
        subtitle: 'Automatize processos e escale sua operação',
        description:
            'Criamos softwares e plataformas digitais sob medida que integram processos, aumentam produtividade e impulsionam resultados.',
        cta: 'Desenvolver sistema',
        image: slide1,
        url: '#servicos',
    },
    {
        title: 'Websites modernos e de alta performance',
        subtitle: 'Experiências digitais que convertem visitantes',
        description:
            'Criamos sites rápidos, otimizados para SEO e projetados para oferecer uma experiência excepcional ao usuário.',
        cta: 'Criar website',
        image: slide2,
        url: '#servicos',
    },
    {
        title: 'Aplicativos e infraestrutura escalável',
        subtitle: 'Tecnologia preparada para crescer com seu negócio',
        description:
            'Desenvolvemos aplicativos mobile e arquiteturas em cloud com alta performance, segurança e escalabilidade.',
        cta: 'Desenvolver aplicativo',
        image: slide3,
        url: '#servicos',
    },
];
