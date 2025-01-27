import { useNavigate } from "react-router-dom";
import styles from "../app/app.module.css";

function HeaderPage() {
    const navigate = useNavigate();
    return (
        <>
            {/* Back Button */}
            <div className={styles.backButtonContainer}>
                <button onClick={() => navigate(-1)} className={styles.backButton}>
                    Back
                </button>
            </div>
            <div className={styles.pageContainer}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Componente Header</h2>
                    <p>
                        Header è un componente riutilizzabile per creare un'intestazione flessibile e personalizzabile, progettato per visualizzare il titolo di un'applicazione con un'area dedicata ad elementi aggiuntivi come pulsanti o icone. Supporta due varianti di tema: light e dark.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Installazione</h2>
                    <p>
                        Per utilizzare il componente nella tua applicazione, installa la libreria con il seguente comando:
                    </p>
                    <pre className={styles.codeBlock}>
                        <code>npm install @albanese-ui/header</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Importazione</h2>
                    <p>Puoi importare il componente direttamente nel tuo progetto:</p>
                    <pre className={styles.codeBlock}>
                        <code>import {"{ Header }"} from '@albanese-ui/header';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Come utilizzare il componente</h2>
                    <p>
                        Ecco un esempio base di utilizzo del componente <code>Header</code>:
                    </p>
                    <pre className={styles.codeBlock}>
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
                    <h2 className={styles.sectionTitle}>Proprietà del componente</h2>
                    <p>
                        Il componente <code>Header</code> supporta le seguenti props:
                    </p>
                    <table className={styles.propsTable}>
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
                                <td>Il titolo da visualizzare nell'intestazione.</td>
                            </tr>
                            <tr>
                                <td><code>theme</code></td>
                                <td><code>'light' | 'dark'</code></td>
                                <td>'light'</td>
                                <td>La variante di stile dell'intestazione (light o dark).</td>
                            </tr>
                            <tr>
                                <td><code>children</code></td>
                                <td><code>React.ReactNode</code></td>
                                <td>null</td>
                                <td>Elementi opzionali da aggiungere accanto al titolo (es. bottoni o link).</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Personalizzazione</h2>
                    <p>
                        Puoi personalizzare gli stili modificando il file CSS associato, <code>header.module.css</code>, o utilizzare classi personalizzate.
                    </p>
                </section>
            </div>
        </>
    );
}

export default HeaderPage;
