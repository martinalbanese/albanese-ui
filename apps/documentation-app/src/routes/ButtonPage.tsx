import { useNavigate } from "react-router-dom";
import styles from "../app/app.module.css";

function ButtonPage() {
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
                    <h2 className={styles.sectionTitle}>Componente Button</h2>
                    <p>
                        Button è un componente riutilizzabile per pulsanti, progettato per essere flessibile e altamente personalizzabile.
                        <br />
                        Supporta tre varianti principali di stile (solid, outline, ghost) e consente di definire facilmente azioni tramite l'attributo onClick.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Installazione</h2>
                    <p>
                        Per utilizzare il componente nella tua applicazione, installa la libreria con il seguente comando:
                    </p>
                    <pre className={styles.codeBlock}>
                        <code>npm install @albanese-ui/button</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Importazione</h2>
                    <p>Puoi importare il componente direttamente nel tuo progetto:</p>
                    <pre className={styles.codeBlock}>
                        <code>import {"{ Button }"} from '@albanese-ui/button';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Come utilizzare il componente</h2>
                    <p>
                        Ecco un esempio base di utilizzo del componente <code>Button</code>:
                    </p>
                    <pre className={styles.codeBlock}>
                        <code>
                            {`import { Button } from '@albanese-ui/button';

function App() {
    const handleClick = () => {
        console.log('Pulsante cliccato!');
    };

    return (
        <div>
            <Button label="Clicca qui" variant="solid" onClick={handleClick} />
        </div>
    );
}

export default App;`}
                        </code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Proprietà del componente</h2>
                    <p>
                        Il componente <code>Button</code> supporta le seguenti props:
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
                                <td><code>label</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>Testo visualizzato all'interno del pulsante.</td>
                            </tr>
                            <tr>
                                <td><code>variant</code></td>
                                <td><code>'solid' | 'outline' | 'ghost'</code></td>
                                <td>'solid'</td>
                                <td>
                                    La variante di stile del pulsante:
                                    <ul>
                                        <li><b>solid</b>: pulsante pieno con sfondo colorato (default).</li>
                                        <li><b>outline</b>: pulsante con bordo colorato e sfondo trasparente.</li>
                                        <li><b>ghost</b>: pulsante completamente trasparente con solo il testo colorato.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><code>onClick</code></td>
                                <td><code>() =&gt; void</code></td>
                                <td>null</td>
                                <td>Funzione eseguita quando il pulsante viene cliccato.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Personalizzazione</h2>
                    <p>
                        Gli stili del pulsante possono essere modificati personalizzando il file CSS Module associato al componente: <code>button.module.css</code>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default ButtonPage;
