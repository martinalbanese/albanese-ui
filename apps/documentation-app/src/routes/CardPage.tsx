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
                    <h2 className={styles.sectionTitle}>Card Component</h2>
                    <p>
                        The Card component is used to create a visually distinctive container for content such as images, titles, descriptions, and actions like buttons.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Installation</h2>
                    <pre className={styles.codeBlock}>
                        <code>npm install @albanese-ui/card</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Import</h2>
                    <pre className={styles.codeBlock}>
                        <code>import {"{ Card }"} from '@albanese-ui/card';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>How to Use the Component</h2>
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
                    <h2 className={styles.sectionTitle}>Component Properties</h2>
                    <table className={styles.propsTable}>
                        <thead>
                            <tr>
                                <th>Prop</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>title</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>The title displayed in the card.</td>
                            </tr>
                            <tr>
                                <td><code>description</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>A brief description of the card content.</td>
                            </tr>
                            <tr>
                                <td><code>imageUrl</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>URL of the image displayed in the card.</td>
                            </tr>
                            <tr>
                                <td><code>buttonLabel</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>Label of the button in the card.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Customization</h2>
                    <p>
                        The styles can be customized by modifying the CSS Module file associated with the component <code>card.module.css</code>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default CardPage;
