# Componente Navbar - @albanese-ui/navbar

Il componente Navbar è un elemento riutilizzabile per creare una barra di navigazione personalizzabile. Supporta un elenco di link di navigazione, azioni aggiuntive come pulsanti o menu a discesa e vari temi (chiaro o scuro).

## Installazione

Per utilizzare il componente nella tua applicazione, assicurati di aver installato la libreria:

```bash
npm install @albanese-ui/navbar
```

## Importazione

Puoi importare il componente direttamente dal pacchetto:

```tsx
import { Navbar } from '@albanese-ui/navbar';
```

## Come utilizzare il componente

Esempio base:

```tsx
import { Navbar } from '@albanese-ui/navbar';
import { Button } from '@albanese-ui/button';

function App() {
  const links = ['Home', 'About', 'Services', 'Contact'];

  return (
    <div>
      <Navbar links={links} theme="light">
        <Button label="Login" variant="outline" />
        <Button label="Sign Up" />
      </Navbar>
    </div>
  );
}

export default App;
```

## Proprietà del componente

| **Prop**   | **Tipo**            | **Default** | **Descrizione**                                                                                  |
|------------|---------------------|-------------|--------------------------------------------------------------------------------------------------|
| `links`    | `string[]`            | `-`         | Un array di stringhe che rappresentano i nomi dei collegamenti di navigazione.                                |
| `theme`    | `'light' \| 'dark'` | `'light'`   | La variante del tema per la navbar:                                                              |
|            |                     |             | - **`light`**: tema chiaro con sfondo chiaro e testo scuro (default).                           |
|            |                     |             | - **`dark`**: tema scuro con sfondo scuro e testo chiaro.                                       |
| `children` | `React.ReactNode`   | `null`      | Elementi opzionali da aggiungere sulla destra della navbar, come pulsanti o icone.  |

## Personalizzazione

Gli stili possono essere personalizzati modificando il file CSS Module associato al componente (`navbar.module.css`).
