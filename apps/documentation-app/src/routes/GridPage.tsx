import { useNavigate } from "react-router-dom";
import styles from "../app/app.module.css";

function GridPage() {
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
                    <h2 className={styles.sectionTitle}>Componente Grid</h2>
                    <p>
                        Il componente Grid è un layout flessibile che consente di organizzare gli elementi in una griglia responsiva. <br />Può essere configurato per avere un numero definito di colonne e un gap tra gli elementi, rendendolo ideale per costruire layout complessi e ben strutturati.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Installazione</h2>
                    <p>
                        Per utilizzare il componente nella tua applicazione, installa la libreria con il seguente comando:
                    </p>
                    <pre className={styles.codeBlock}>
                        <code>npm install @albanese-ui/grid</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Importazione</h2>
                    <p>Puoi importare il componente direttamente nel tuo progetto:</p>
                    <pre className={styles.codeBlock}>
                        <code>import {"{ Grid }"} from '@albanese-ui/grid';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Come utilizzare il componente</h2>
                    <p>
                        Ecco un esempio base di utilizzo del componente <code>Grid</code>:
                    </p>
                    <pre className={styles.codeBlock}>
                        <code>
                            {`import { Grid } from '@albanese-ui/grid';

function App() {
  return (
    <div>
      <Grid columns={3} gap={20}>
        <div>Elemento 1</div>
        <div>Elemento 2</div>
        <div>Elemento 3</div>
        <div>Elemento 4</div>
        <div>Elemento 5</div>
      </Grid>
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
                        Il componente <code>Grid</code> supporta le seguenti props:
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
                                <td><code>columns</code></td>
                                <td><code>number</code></td>
                                <td>3</td>
                                <td>Il numero di colonne da visualizzare nella griglia.</td>
                            </tr>
                            <tr>
                                <td><code>gap</code></td>
                                <td><code>number</code></td>
                                <td>20</td>
                                <td>La distanza (in pixel) tra gli elementi della griglia.</td>
                            </tr>
                            <tr>
                                <td><code>children</code></td>
                                <td><code>React.ReactNode</code></td>
                                <td>null</td>
                                <td>Gli elementi da inserire all'interno della griglia. Ogni elemento deve essere un elemento JSX o un componente.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Personalizzazione</h2>
                    <p>
                        Gli stili possono essere personalizzati modificando il file CSS Module associato al componente <code>grid.module.css</code>. Puoi anche modificare direttamente le proprietà come columns e gap per adattare la griglia alle tue necessità.
                    </p>
                </section>
            </div>
        </>
    );
}

export default GridPage;
