import React from 'react';
import styles from './footer.module.css';

/**
 * @component Footer
 * @description Un componente riutilizzabile per il footer dell'applicazione, che include un messaggio o copyright
 * e supporta elementi opzionali (come link o icone) tramite la prop `children`.
 *
 * @prop {string} text - Il testo principale del footer, ad esempio il copyright o un messaggio generico.
 * @prop {React.ReactNode} [children] - Elementi opzionali da includere accanto al testo, come link, icone, o altro.
 * @prop {('light' | 'dark')} [theme='light'] - La variante del tema per il footer:
 * - **'light'**: tema chiaro con sfondo chiaro e testo scuro (default).
 * - **'dark'**: tema scuro con sfondo scuro e testo chiaro.
*/

type FooterProps = {
  text: string;
  children?: React.ReactNode;
  theme?: 'light' | 'dark';
}

export function Footer({ text, children, theme = 'light' }: FooterProps) {
  return (
    <footer className={`${styles.footer} ${styles[`footer--${theme}`]}`}>
      <span className={styles.text}>{text}</span>
      <div className={styles.actions}>{children}</div>
    </footer>
  );
}

export default Footer;
