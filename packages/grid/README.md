# Componente Grid - @albanese-ui/grid

Il componente Grid è un layout flessibile che consente di organizzare gli elementi in una griglia responsiva. Può essere configurato per avere un numero definito di colonne e un gap tra gli elementi, rendendolo ideale per costruire layout complessi e ben strutturati.

## Installazione

Per utilizzare il componente nella tua applicazione, assicurati di aver installato la libreria:

```bash
npm install @albanese-ui/grid
```

## Importazione

Puoi importare il componente direttamente dal pacchetto:

```tsx
import { Navbar } from '@albanese-ui/grid';
```

## Come utilizzare il componente

Esempio base:

```tsx
import { Grid } from '@albanese-ui/grid';

function App() {
  return (
    <div>
      <Grid columns={3} gap={20}>
        <div>Elemento 1</div>
        <div>Elemento 2</div>
        <div>Elemento 3</div>
        <div>Elemento 4</div>
        <div>Elemento 5</div>
      </Grid>
    </div>
  );
}

export default App;
```

## Proprietà del componente

| **Prop**   | **Tipo**            | **Default** | **Descrizione**                                                                                  |
|------------|---------------------|-------------|--------------------------------------------------------------------------------------------------|
| `columns`    | `number`            | `3`         | Il numero di colonne da visualizzare nella griglia.                                |
| `gap`    | `number` | `20`   | La distanza (in pixel) tra gli elementi della griglia.             
| `children` | `React.ReactNode`   | `null`      | Gli elementi da inserire all'interno della griglia. Ogni elemento deve essere un elemento JSX o un componente.  |

## Personalizzazione

Gli stili possono essere personalizzati modificando il file CSS Module associato al componente (`grid.module.css`). Puoi anche modificare direttamente le proprietà come columns e gap per adattare la griglia alle tue necessità.
