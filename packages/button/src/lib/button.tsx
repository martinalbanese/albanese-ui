import styles from './button.module.css';

/**
 * @component Button
 * @description Un componente riutilizzabile per i pulsanti con tre varianti di stile: 'solid', 'outline' e 'ghost'.
 * Include una label personalizzabile e supporta un'azione tramite la prop 'onClick'.
 * 
 * @prop {string} label - La label del pulsante.
 * @prop {('solid' | 'outline' | 'ghos')} variant - La variante del pulsante: 
 * - 'solid' per pulsante pieno (predefinito se non specificato), 
 * - 'outline' per pulsante con contorno 
 * - 'ghost' per pulsante trasparente.
 * @prop {() => void} onClick - L'azione da eseguire al click sul pulsante.
 */

type ButtonProps = {
  label: string;
  variant?: 'solid' | 'outline' | 'ghost';
  onClick?: () => void;
};

export function Button({ label, variant = 'solid', onClick }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;

