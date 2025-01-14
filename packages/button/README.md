# Componente Button - @albanese-ui/button

Button è un componente riutilizzabile per pulsanti, progettato per essere flessibile e altamente personalizzabile. Supporta tre varianti principali di stile (solid, outline, ghost) e consente di definire facilmente azioni tramite l'attributo onClick.

## Installazione

Per utilizzare il componente nella tua applicazione, assicurati di aver installato la libreria:

```bash
npm install @albanese-ui/button
```

## Importazione

Puoi importare il componente direttamente dal pacchetto:

```tsx
import { Button } from '@albanese-ui/button';
```

## Come utilizzare il componente

Esempio base:

```tsx
import { Button } from '@albanese-ui/button';

function App() {
  const handleClick = () => {
    console.log('Pulsante cliccato!');
  };

  return (
    <div>
      <Button label="Clicca qui" variant="solid" onClick={handleClick} />
    </div>
  );
}

export default App;

```

## Proprietà del componente

Il componente accetta le seguenti **props**:

| Prop      | Tipo                          | Default  | Descrizione                                                                                          |
|-----------|-------------------------------|----------|------------------------------------------------------------------------------------------------------|
| `label`   | `string`                      | -        | Testo visualizzato all'interno del pulsante.                                                        |
| `variant` | 'solid', 'ghost', 'outline' | 'solid' | La variante di stile del pulsante:                                                                  |
|           |                               |          | - **`solid`**: pulsante pieno con sfondo colorato (default).                                        |
|           |                               |          | - **`outline`**: pulsante con bordo colorato e sfondo trasparente.                                  |
|           |                               |          | - **`ghost`**: pulsante completamente trasparente con solo il testo colorato.                       |
| `onClick` | `() => void`                  | `null`   | Funzione eseguita quando il pulsante viene cliccato.                                                |

## Personalizzazione

Gli stili del pulsante possono essere personalizzati modificando il file CSS Module associato al componente (`button.module.css`).