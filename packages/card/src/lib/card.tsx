// import { Link } from 'react-router';
import styles from './card.module.css';

type CardProps = {
  title: string;
  description: string;
  // route: string;
  theme?: 'light' | 'dark';
};

export function Card({ title, description, theme }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[`card--${theme}`]}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description.length > 100 ? description.substring(0, 100) + '...' : description}</p>
      {/* <Link to={route}>Scopri di più</Link> */}
    </div>
  );
}
