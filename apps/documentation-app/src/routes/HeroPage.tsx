import { useNavigate } from "react-router-dom";
import styles from "../app/app.module.css";

function HeroPage() {
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
                    <h2 className={styles.sectionTitle}>Componente Hero</h2>
                    <p>
                        Il componente Hero è un elemento riutilizzabile per creare una sezione visivamente accattivante in cima alla pagina.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Installazione</h2>
                    <pre className={styles.codeBlock}>
                        <code>npm install @albanese-ui/hero</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Importazione</h2>
                    <pre className={styles.codeBlock}>
                        <code>import {"{ Hero }"} from '@albanese-ui/hero';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Come utilizzare il componente</h2>
                    <pre className={styles.codeBlock}>
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
                    <h2 className={styles.sectionTitle}>Proprietà del componente</h2>
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
                                <td>La variante di stile della sezione.</td>
                            </tr>
                            <tr>
                                <td><code>children</code></td>
                                <td><code>React.ReactNode</code></td>
                                <td>null</td>
                                <td>Elementi opzionali da aggiungere sotto il titolo, come pulsanti.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Personalizzazione</h2>
                    <p>
                        Gli stili possono essere personalizzati modificando il file CSS Module associato al componente <code>hero.module.css</code>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default HeroPage;
