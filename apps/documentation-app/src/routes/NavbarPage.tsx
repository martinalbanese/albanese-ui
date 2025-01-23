import styles from "./routes.module.css";

function NavbarPage() {
    return (
        <>
            <div className={styles.container}>
                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Componente Navbar</h2>
                    <p>
                        Il componente Navbar è un elemento riutilizzabile per creare una barra di navigazione personalizzabile. Supporta un elenco di link di navigazione, azioni aggiuntive come pulsanti o menu a discesa e vari temi (chiaro o scuro).
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Installazione</h2>
                    <p>
                        Per utilizzare il componente nella tua applicazione, installa la libreria con il seguente comando:
                    </p>
                    <pre className={styles["code-block"]}>
                        <code>npm install @albanese-ui/navbar</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Importazione</h2>
                    <p>Puoi importare il componente direttamente nel tuo progetto:</p>
                    <pre className={styles["code-block"]}>
                        <code>import {"{ Navbar }"} from '@albanese-ui/navbar';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Come utilizzare il componente</h2>
                    <p>
                        Ecco un esempio base di utilizzo del componente <code>Navbar</code>:
                    </p>
                    <pre className={styles["code-block"]}>
                        <code>
                            {`import { Navbar } from '@albanese-ui/navbar';

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

export default App;`}
                        </code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Proprietà del componente</h2>
                    <p>
                        Il componente <code>Navbar</code> supporta le seguenti props:
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
                                <td><code>links</code></td>
                                <td><code>string[]</code></td>
                                <td>-</td>
                                <td>Un array di stringhe che rappresentano i nomi dei collegamenti di navigazione.</td>
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
                                <td>Elementi opzionali da aggiungere sulla destra della navbar, come pulsanti o icone.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles["section-title"]}>Personalizzazione</h2>
                    <p>
                        Gli stili possono essere personalizzati modificando il file CSS Module associato al componente <code>navbar.module.css</code>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default NavbarPage;
