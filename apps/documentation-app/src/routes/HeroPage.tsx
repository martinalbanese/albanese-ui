import styles from "./routes.module.css";

function HeroPage() {
    return (
        <>
            <div className={styles.container}>
                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Componente Hero</h2>
                    <p>
                        Il componente Hero è un elemento riutilizzabile per creare una sezione visivamente accattivante in cima alla pagina. È ideale per evidenziare il titolo principale di una pagina con un sottotitolo e azioni opzionali, come pulsanti.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Installazione</h2>
                    <p>
                        Per utilizzare il componente nella tua applicazione, installa la libreria con il seguente comando:
                    </p>
                    <pre className={styles["code-block"]}>
                        <code>npm install @albanese-ui/hero</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Importazione</h2>
                    <p>Puoi importare il componente direttamente nel tuo progetto:</p>
                    <pre className={styles["code-block"]}>
                        <code>import {"{ Hero }"} from '@albanese-ui/hero';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Come utilizzare il componente</h2>
                    <p>
                        Ecco un esempio base di utilizzo del componente <code>Hero</code>:
                    </p>
                    <pre className={styles["code-block"]}>
                        <code>
                            {`import { Hero } from '@albanese-ui/hero';

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

export default App;`}
                        </code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Proprietà del componente</h2>
                    <p>
                        Il componente <code>Hero</code> supporta le seguenti props:
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
                                <td>Il titolo principale da visualizzare nella sezione Hero.</td>
                            </tr>
                            <tr>
                                <td><code>subtitle</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>Il sottotitolo da visualizzare sotto il titolo.</td>
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
                                <td>Elementi opzionali da aggiungere sotto il titolo e sottotitolo, come pulsanti o altre azioni.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Personalizzazione</h2>
                    <p>
                        Gli stili possono essere personalizzati modificando il file CSS Module associato al componente <code>hero.module.css</code>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default HeroPage;
