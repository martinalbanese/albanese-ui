# Componente Hero - @albanese-ui/hero

Il componente Hero è un elemento riutilizzabile per creare una sezione visivamente accattivante in cima alla pagina. È ideale per evidenziare il titolo principale di una pagina con un sottotitolo e azioni opzionali, come pulsanti.

## Installazione

Per utilizzare il componente nella tua applicazione, assicurati di aver installato la libreria:

```bash
npm install @albanese-ui/hero
```

## Importazione

Puoi importare il componente direttamente dal pacchetto:

```tsx
import { Hero } from '@albanese-ui/hero';
```

## Come utilizzare il componente

Esempio base:

```tsx
import { Hero } from '@albanese-ui/hero';
import { Button } from '@albanese-ui/button';

function App() {
  return (
    <div>
      <Hero 
        title="Benvenuti in Albanese UI!" 
        subtitle="Una libreria di componenti UI facili da usare"
        theme="dark"
      >
        <Button label="Scopri di più" variant="solid" />
        <Button label="Contattaci" variant="outline" />
      </Hero>
    </div>
  );
}

export default App;
```

## Proprietà del componente

| **Prop**   | **Tipo**            | **Default** | **Descrizione**                                                                                  |
|------------|---------------------|-------------|--------------------------------------------------------------------------------------------------|
| `title`    | `string`            | `-`         | Il titolo principale da visualizzare nella sezione Hero.
| `subtitle`    | `string`            | `-`         | Il sottotitolo da visualizzare sotto il titolo.                                      |
| `theme`    | `'light' \| 'dark'` | `'light'`   | La variante del tema per la hero:                                                              |
|            |                     |             | - **`light`**: tema chiaro con sfondo chiaro e testo scuro (default).                           |
|            |                     |             | - **`dark`**: tema scuro con sfondo scuro e testo chiaro.                                       |
| `children` | `React.ReactNode`   | `null`      | Elementi opzionali da aggiungere sotto il titolo e sottotitolo, come pulsanti o altre azioni.  |

## Personalizzazione

Gli stili possono essere personalizzati modificando il file CSS Module associato al componente (`hero.module.css`).
