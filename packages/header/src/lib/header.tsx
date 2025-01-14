import styles from './header.module.css';

/**
 * @component Header
 * @description Un componente riutilizzabile per visualizzare un'intestazione con il nome dell'applicazione. 
 * Può includere una variante di stile per adattarsi a diverse esigenze visive.
 *
 * @prop {string} title - Il nome dell'applicazione da visualizzare nell'header.
 * @prop {('light' | 'dark')} [theme='light'] - La variante del tema per l'header:
 * - **'light'**: tema chiaro con testo scuro (default).
 * - **'dark'**: tema scuro con testo chiaro.
 * @prop {React.ReactNode} [children] - Elementi opzionali da aggiungere accanto al titolo, come pulsanti o icone.
*/

type HeaderProps = {
  title: string;
  theme?: 'light' | 'dark';
  children?: React.ReactNode;
};

export function Header({ title, theme = 'light', children }: HeaderProps) {
  return (
    <header className={`${styles.header} ${styles[`header--${theme}`]}`}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.actions}>{children}</div>
    </header>
  );
}

export default Header;

