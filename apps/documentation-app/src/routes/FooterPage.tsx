import styles from "./routes.module.css";

function FooterPage() {
    return (
        <>
            <div className={styles.container}>
                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Componente Footer</h2>
                    <p>
                    Il componente Footer è un elemento riutilizzabile che crea un footer fisso in fondo alla pagina. <br/> Supporta temi chiaro e scuro e può includere contenuti aggiuntivi come link, bottoni o altre icone. È progettato per essere flessibile e completamente personalizzabile.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Installazione</h2>
                    <p>
                        Per utilizzare il componente nella tua applicazione, installa la libreria con il seguente comando:
                    </p>
                    <pre className={styles["code-block"]}>
                        <code>npm install @albanese-ui/footer</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Importazione</h2>
                    <p>Puoi importare il componente direttamente nel tuo progetto:</p>
                    <pre className={styles["code-block"]}>
                        <code>import {"{ Footer }"} from '@albanese-ui/footer';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Come utilizzare il componente</h2>
                    <p>
                        Ecco un esempio base di utilizzo del componente <code>Footer</code>:
                    </p>
                    <pre className={styles["code-block"]}>
                        <code>
                            {`import { Footer } from '@albanese-ui/footer';

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

export default App;`}
                        </code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Proprietà del componente</h2>
                    <p>
                        Il componente <code>Footer</code> supporta le seguenti props:
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
                                <td><code>text</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>Testo principale da visualizzare nel footer.</td>
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
                                <td>Elementi opzionali da aggiungere accanto o sotto il testo del footer, come pulsanti o link.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Personalizzazione</h2>
                    <p>
                        Gli stili del footer possono essere modificati personalizzando il file CSS Module associato al componente: <code>footer.module.css</code>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default FooterPage;
