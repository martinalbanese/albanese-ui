import React from 'react';
import styles from './grid.module.css';

/**
 * @component Grid
 * @description Un componente riutilizzabile per creare layout a griglia. Può essere utilizzato per distribuire i contenuti in colonne e righe.
 *
 * @prop {number} columns - Il numero di colonne della griglia.
 * @prop {number} gap - Lo spazio tra gli elementi della griglia.
 * @prop {React.ReactNode} [children] - Gli elementi da visualizzare all'interno della griglia.
*/

type GridProps = {
  columns: number;
  gap: number;
  children?: React.ReactNode;
}

export function Grid({ columns = 3, gap = 20, children }: GridProps) {
  const style = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };

  return (
    <div className={styles.grid} style={style}>
      {children}
    </div>
  );
}

export default Grid;
