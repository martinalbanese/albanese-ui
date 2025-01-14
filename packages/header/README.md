# Componente Header - @albanese-ui/header

Header è un componente riutilizzabile per creare un'intestazione flessibile e personalizzabile, progettato per visualizzare il titolo di un'applicazione con un'area dedicata ad elementi aggiuntivi come pulsanti o icone. Supporta due varianti di tema: light e dark.

## Installazione

Per utilizzare il componente nella tua applicazione, installa la libreria:

```bash
npm install @albanese-ui/header
```

## Importazione

Puoi importare il componente direttamente dal pacchetto:

```tsx
import { Header } from '@albanese-ui/header';
```

## Come utilizzare il componente

Esempio base:

```tsx
import { Header } from '@albanese-ui/header';
import { Button } from '@albanese-ui/button';

function App() {
  return (
    <Header title="Nome Applicazione" theme="light">
      <Button label="Login" variant="outline" />
      <Button label="Sign Up" />
    </Header>
  );
}

export default App;
```

## Proprietà del componente

| **Prop**   | **Tipo**            | **Default** | **Descrizione**                                                                                  |
|------------|---------------------|-------------|--------------------------------------------------------------------------------------------------|
| `title`    | `string`            | `-`         | Il titolo dell'applicazione visualizzato nell'intestazione.                                      |
| `theme`    | `'light' \| 'dark'` | `'light'`   | La variante del tema per l'header:                                                              |
|            |                     |             | - **`light`**: tema chiaro con sfondo chiaro e testo scuro (default).                           |
|            |                     |             | - **`dark`**: tema scuro con sfondo scuro e testo chiaro.                                       |
| `children` | `React.ReactNode`   | `null`      | Elementi opzionali da aggiungere accanto al titolo, come pulsanti, icone o menu di navigazione.  |



## Personalizzazione

Il componente utilizza un file CSS Module (`header.module.css`) per garantire uno stile isolato e personalizzabile.
