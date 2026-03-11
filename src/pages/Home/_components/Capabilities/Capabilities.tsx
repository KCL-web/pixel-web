import React from 'react';
import {
    Code,
    CheckCircle,
    TabletSmartphone,
    LayoutDashboard,
    AppWindowMac,
    Cloud,
} from 'lucide-react';
import styles from './Capabilities.module.scss';

type IconDef = React.ComponentType<{ size?: number; color?: string }>;
type Cap = {
    title: string;
    description: string;
    Icon: IconDef;
    color: string;
};

const capabilities: Cap[] = [
    {
        title: 'Desenvolvimento de Sistemas',
        description:
            'Desenvolvimento de softwares personalizados para empresas, incluindo sistemas web, plataformas digitais e soluções sob medida para otimizar processos e operações.',
        Icon: Code,
        color: '#f97316',
    },
    {
        title: 'Desenvolvimento de Websites',
        description:
            'Criação de sites modernos, rápidos e otimizados para conversão, com foco em experiência do usuário, performance e presença digital profissional.',
        Icon: AppWindowMac,
        color: '#f97316',
    },
    {
        title: 'Desenvolvimento de Aplicativos',
        description:
            'Desenvolvimento de aplicativos mobile para iOS e Android, com interfaces intuitivas, alta performance e integração com sistemas empresariais.',
        Icon: TabletSmartphone,
        color: '#f59e0b',
    },
    {
        title: 'Design UI/UX',
        description: 'Designs precisos e focados em conversão e usabilidade.',
        Icon: LayoutDashboard,
        color: '#10b981',
    },
    // {
    //     title: 'Inteligência Artificial e Automação',
    //     description:
    //         'Aplicação de inteligência artificial e automação de processos para gerar eficiência operacional, insights estratégicos e novas oportunidades de negócio.',
    //     Icon: Cpu,
    //     color: '#3b82f6',
    // },
    {
        title: 'Infraestrutura e Cloud',
        description:
            'Arquitetura de sistemas, infraestrutura em nuvem e práticas de DevOps para garantir aplicações escaláveis, seguras e de alta disponibilidade.',
        Icon: Cloud,
        color: '#8b5cf6',
    },
    {
        title: 'Auditoria e Otimização de Websites',
        description:
            'Análise completa de performance, usabilidade e SEO para identificar oportunidades de melhoria e aumentar resultados digitais.',
        Icon: CheckCircle,
        color: '#fb7185',
    },
];

export default function Capabilities() {
    return (
        <section
            id="servicos"
            className={styles.section}
            aria-labelledby="capabilities-title"
        >
            <div className={styles.container}>
                <header className={styles.header}>
                    <h2 id="capabilities-title" className={styles.title}>
                        Conheça nossos serviços digitais para transformar seu
                        negócio
                    </h2>
                    <p className={styles.subtitle}>
                        Soluções completas para levar seu negócio ao próximo
                        nível.
                    </p>
                </header>

                <ul className={styles.grid} role="list">
                    {capabilities.map((cap, idx) => {
                        const Icon = cap.Icon;
                        return (
                            <li
                                key={idx}
                                className={styles.card}
                                role="listitem"
                            >
                                <div className={styles.icon} aria-hidden>
                                    <Icon size={28} color={cap.color} />
                                </div>
                                <h3 className={styles.cardTitle}>
                                    {cap.title}
                                </h3>
                                <p className={styles.cardText}>
                                    {cap.description}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
