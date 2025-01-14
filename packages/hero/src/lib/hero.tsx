import React from 'react';
import styles from './hero.module.css';

/**
 * @component Hero
 * @description Un componente riutilizzabile per creare un'intestazione visivamente accattivante (Hero Section) in cima alla pagina.
 * Può includere un titolo, un sottotitolo, e un'azione come un pulsante. Il layout si adatta automaticamente su schermi più piccoli.
 *
 * @prop {string} title - Il titolo principale da visualizzare nella sezione Hero.
 * @prop {string} subtitle - Il sottotitolo da visualizzare sotto il titolo.
 * @prop {React.ReactNode} [children] - Elementi opzionali da includere, come un pulsante o altre azioni.
 * @prop {('light' | 'dark')} [theme='light'] - Tema del componente, che determina il colore del testo e dello sfondo.
*/

type HeroProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  theme?: 'light' | 'dark';
}

export function Hero({ title, subtitle, children, theme='light'}: HeroProps) {
  return (
    <section className={`${styles.hero} ${styles[`hero--${theme}`]}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.actions}>{children}</div>
      </div>
    </section>
  );
}

export default Hero;
