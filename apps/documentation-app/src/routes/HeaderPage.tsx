import styles from "./routes.module.css";

function HeaderPage() {
    return (
        <>
            <div className={styles.container}>
                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Componente Header</h2>
                    <p>
                    Header è un componente riutilizzabile per creare un'intestazione flessibile e personalizzabile, progettato per visualizzare il titolo di un'applicazione con un'area dedicata ad elementi aggiuntivi come pulsanti o icone. Supporta due varianti di tema: light e dark.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Installazione</h2>
                    <p>
                        Per utilizzare il componente nella tua applicazione, installa la libreria con il seguente comando:
                    </p>
                    <pre className={styles["code-block"]}>
                        <code>npm install @albanese-ui/header</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Importazione</h2>
                    <p>Puoi importare il componente direttamente nel tuo progetto:</p>
                    <pre className={styles["code-block"]}>
                        <code>import {"{ Header }"} from '@albanese-ui/header';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Come utilizzare il componente</h2>
                    <p>
                        Ecco un esempio base di utilizzo del componente <code>Header</code>:
                    </p>
                    <pre className={styles["code-block"]}>
                        <code>
                            {`import { Header } from '@albanese-ui/header';

function App() {
  return (
    <Header title="Nome Applicazione" theme="light">
      <Button label="Login" variant="outline" />
      <Button label="Sign Up" />
    </Header>
  );
}

export default App;`}
                        </code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Proprietà del componente</h2>
                    <p>
                        Il componente <code>header</code> supporta le seguenti props:
                    </p>
                    <table className={styles["props-table"]}>
                        <thead>
                            <tr>
                                <th>Prop</th>
                                <th>Tipo</th>
                                <th>Default</th>
                                <th>Descrizione</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>title</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>Il titolo dell'applicazione visualizzato nell'intestazione.</td>
                            </tr>
                            <tr>
                                <td><code>theme</code></td>
                                <td><code>'light' | 'dark'</code></td>
                                <td>'light'</td>
                                <td>
                                    La variante di stile del footer:
                                    <ul>
                                        <li><b>light</b>: tema chiaro con sfondo chiaro e testo scuro (default).</li>
                                        <li><b>dark</b>: tema scuro con sfondo scuro e testo chiaro.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><code>children</code></td>
                                <td><code>React.ReactNode</code></td>
                                <td>null</td>
                                <td>Elementi opzionali da aggiungere accanto al titolo, come pulsanti, icone o menu di navigazione.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Personalizzazione</h2>
                    <p>
                    Il componente utilizza un file CSS Module <code>header.module.css</code> per garantire uno stile isolato e personalizzabile.
                    </p>
                </section>
            </div>
        </>
    );
}

export default HeaderPage;
