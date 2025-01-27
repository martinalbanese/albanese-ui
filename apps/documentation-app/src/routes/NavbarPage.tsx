import { useNavigate } from "react-router-dom";
import styles from "../app/app.module.css";

function NavbarPage() {
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
                    <h2 className={styles.sectionTitle}>Componente Navbar</h2>
                    <p>
                        Il componente Navbar è un elemento riutilizzabile per creare una barra di navigazione personalizzabile.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Installazione</h2>
                    <pre className={styles.codeBlock}>
                        <code>npm install @albanese-ui/navbar</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Importazione</h2>
                    <pre className={styles.codeBlock}>
                        <code>import {"{ Navbar }"} from '@albanese-ui/navbar';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Come utilizzare il componente</h2>
                    <pre className={styles.codeBlock}>
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
                                <td><code>links</code></td>
                                <td><code>string[]</code></td>
                                <td>-</td>
                                <td>Un array di stringhe che rappresentano i collegamenti di navigazione.</td>
                            </tr>
                            <tr>
                                <td><code>theme</code></td>
                                <td><code>'light' | 'dark'</code></td>
                                <td>'light'</td>
                                <td>La variante di stile della navbar.</td>
                            </tr>
                            <tr>
                                <td><code>children</code></td>
                                <td><code>React.ReactNode</code></td>
                                <td>null</td>
                                <td>Elementi opzionali da aggiungere alla navbar, come pulsanti o icone.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Personalizzazione</h2>
                    <p>
                        Gli stili possono essere personalizzati modificando il file CSS Module associato al componente <code>navbar.module.css</code>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default NavbarPage;
