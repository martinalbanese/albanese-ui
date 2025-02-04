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
                    <h2 className={styles.sectionTitle}>Hero Component</h2>
                    <p>
                        The Hero component is a reusable element to create a visually appealing section at the top of the page.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Installation</h2>
                    <pre className={styles.codeBlock}>
                        <code>npm install @albanese-ui/hero</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Import</h2>
                    <pre className={styles.codeBlock}>
                        <code>import {"{ Hero }"} from '@albanese-ui/hero';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>How to use the component</h2>
                    <pre className={styles.codeBlock}>
                        <code>
                            {`import { Hero } from '@albanese-ui/hero';

function App() {
  return (
    <div>
      <Hero 
        title="Welcome to Albanese UI!" 
        subtitle="An easy-to-use UI component library"
        theme="dark"
      >
        <Button label="Learn More" variant="solid" />
        <Button label="Contact Us" variant="outline" />
      </Hero>
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
                                <td>The main title to display in the Hero section.</td>
                            </tr>
                            <tr>
                                <td><code>subtitle</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>The subtitle to display under the title.</td>
                            </tr>
                            <tr>
                                <td><code>theme</code></td>
                                <td><code>'light' | 'dark'</code></td>
                                <td>'light'</td>
                                <td>The style variant of the section.</td>
                            </tr>
                            <tr>
                                <td><code>children</code></td>
                                <td><code>React.ReactNode</code></td>
                                <td>null</td>
                                <td>Optional elements to add below the title, such as buttons.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Customization</h2>
                    <p>
                        Styles can be customized by modifying the associated CSS Module file for the component <code>hero.module.css</code>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default HeroPage;
