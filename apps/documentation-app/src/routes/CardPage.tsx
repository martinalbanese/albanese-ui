import { useNavigate } from "react-router-dom";
import styles from "../app/app.module.css";

function CardPage() {
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
                    <h2 className={styles.sectionTitle}>Componente Card</h2>
                    <p>
                        Il componente Card è utilizzato per creare un contenitore visivamente distintivo per contenuti come immagini, titoli, descrizioni, e azioni come pulsanti.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Installazione</h2>
                    <pre className={styles.codeBlock}>
                        <code>npm install @albanese-ui/card</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Importazione</h2>
                    <pre className={styles.codeBlock}>
                        <code>import {"{ Card }"} from '@albanese-ui/card';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Come utilizzare il componente</h2>
                    <pre className={styles.codeBlock}>
                        <code>
                            {`import { Card } from '@albanese-ui/card';

function App() {
  return (
    <div>
      <Card 
        title="Card Title"
        description="This is a description of the card content."
        imageUrl="https://example.com/image.jpg"
        buttonLabel="Learn More"
      />
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
                                <td>Il titolo da visualizzare nella card.</td>
                            </tr>
                            <tr>
                                <td><code>description</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>Una breve descrizione del contenuto della card.</td>
                            </tr>
                            <tr>
                                <td><code>imageUrl</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>URL dell'immagine da visualizzare nella card.</td>
                            </tr>
                            <tr>
                                <td><code>buttonLabel</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>Etichetta del pulsante nella card.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Personalizzazione</h2>
                    <p>
                        Gli stili possono essere personalizzati modificando il file CSS Module associato al componente <code>card.module.css</code>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default CardPage;
