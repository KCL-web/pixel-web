import styles from './Home.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>Bem-vindo ao KCL Template</h1>
        <p>Um template moderno e profissional para seus projetos React</p>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <h2>Rápido</h2>
          <p>
            Desenvolvido com Vite para uma experiência de desenvolvimento super
            rápida
          </p>
        </div>
        <div className={styles.feature}>
          <h2>Escalável</h2>
          <p>Estrutura organizada e pronta para crescer com seu projeto</p>
        </div>
        <div className={styles.feature}>
          <h2>Moderno</h2>
          <p>Usa as últimas tecnologias do ecossistema React e JavaScript</p>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Pronto para começar?</h2>
        <p>Customize este template conforme suas necessidades</p>
        <a href="#" className={styles.button}>
          Explorar documentação
        </a>
      </section>
    </main>
  );
}
