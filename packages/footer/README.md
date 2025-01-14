# Componente Footer - @albanese-ui/footer

Il componente Footer è un elemento riutilizzabile che crea un footer fisso in fondo alla pagina. Supporta temi chiaro e scuro e può includere contenuti aggiuntivi come link, bottoni o altre icone. È progettato per essere flessibile e completamente personalizzabile.

## Installazione

Per utilizzare il componente nella tua applicazione, assicurati di aver installato la libreria:

```bash
npm install @albanese-ui/footer
```

## Importazione

Puoi importare il componente direttamente dal pacchetto:

```tsx
import { Footer } from '@albanese-ui/footer';
```

## Come utilizzare il componente

Esempio base:

```tsx
import { Footer } from '@albanese-ui/footer';
import { Button } from '@albanese-ui/button';

function App() {
  return (
    <div className="app-container">
      <div>
        {/* Contenuto principale dell'app */}
        <h1>Benvenuti in Albanese UI!</h1>
        <p>Questo è il contenuto della pagina.</p>
      </div>
      <Footer text="© 2025 Albanese UI">
        <Button label="Privacy Policy" variant="ghost" />
        <Button label="Contattaci" variant="ghost" />
      </Footer>
    </div>
  );
}

export default App;
```

## Proprietà del componente

| **Prop**   | **Tipo**            | **Default** | **Descrizione**                                                                                  |
|------------|---------------------|-------------|--------------------------------------------------------------------------------------------------|
| `text`    | `string`            | `-`         | Testo principale da visualizzare nel footer.                                      |
| `theme`    | `'light' \| 'dark'` | `'light'`   | La variante del tema per il footer:                                                              |
|            |                     |             | - **`light`**: tema chiaro con sfondo chiaro e testo scuro (default).                           |
|            |                     |             | - **`dark`**: tema scuro con sfondo scuro e testo chiaro.                                       |
| `children` | `React.ReactNode`   | `null`      | Elementi opzionali da aggiungere accanto o sotto il testo del footer, come pulsanti o link.  |

## Personalizzazione

Gli stili del footer possono essere personalizzati modificando il file CSS Module associato al componente (`footer.module.css`).
