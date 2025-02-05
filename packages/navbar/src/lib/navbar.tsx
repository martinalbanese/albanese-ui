import React, { useState } from 'react';
import styles from './navbar.module.css';

/**
 * @component Navbar
 * @description Un componente riutilizzabile per creare una barra di navigazione personalizzabile. 
 * Supporta un titolo, collegamenti e contenuti aggiuntivi come pulsanti o menu a discesa.
 *
 * @prop {string[]} links - Un array di stringhe che rappresentano i nomi dei collegamenti di navigazione.
 * @prop {React.ReactNode} [children] - Contenuti opzionali come pulsanti o icone da visualizzare sul lato destro.
 * @prop {('light' | 'dark')} [theme='light'] - Tema della navbar:
 * - **'light'**: tema chiaro con testo scuro.
 * - **'dark'**: tema scuro con testo chiaro.
*/

type NavbarProps = {
  links: string[];
  children?: React.ReactNode;
  theme?: 'light' | 'dark';
}

export function Navbar({ links, children, theme = 'light' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

  return (
    <nav className={`${styles.navbar} ${styles[`navbar--${theme}`]}`}>

      {/* Icona hamburger per schermi piccoli */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <ul className={`${styles.links} ${isMenuOpen ? styles.show : ''}`}>
        {links.map((link, index) => (
          <li key={index} className={styles.link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>{children}</div>
    </nav>
  );
}

export default Navbar;
