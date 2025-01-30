import { Link } from 'react-router-dom';
import styles from './card.module.css';

type CardProps = {
  img: string;
  title: string;
  description: string;
  route: string;
  theme?: 'light' | 'dark';
};

export function Card({ img, title, description, route, theme = 'light' }: CardProps) {
  return (
    <Link to={route}>
      <div className={`${styles.card} ${styles[`card--${theme}`]}`}>
        <img className={styles.img} src={img} alt={title} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description.length > 100 ? description.substring(0, 100) + '...' : description}</p>
      </div>
    </Link>

  );
}

export default Card;
