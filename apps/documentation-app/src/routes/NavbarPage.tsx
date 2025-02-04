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
                    <h2 className={styles.sectionTitle}>Navbar Component</h2>
                    <p>
                        The Navbar component is a reusable element to create a customizable navigation bar.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Installation</h2>
                    <pre className={styles.codeBlock}>
                        <code>npm install @albanese-ui/navbar</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Import</h2>
                    <pre className={styles.codeBlock}>
                        <code>import {"{ Navbar }"} from '@albanese-ui/navbar';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>How to Use the Component</h2>
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
                                <td><code>links</code></td>
                                <td><code>string[]</code></td>
                                <td>-</td>
                                <td>An array of strings representing the navigation links.</td>
                            </tr>
                            <tr>
                                <td><code>theme</code></td>
                                <td><code>'light' | 'dark'</code></td>
                                <td>'light'</td>
                                <td>The style variant of the navbar.</td>
                            </tr>
                            <tr>
                                <td><code>children</code></td>
                                <td><code>React.ReactNode</code></td>
                                <td>null</td>
                                <td>Optional elements to add to the navbar, such as buttons or icons.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Customization</h2>
                    <p>
                        Styles can be customized by modifying the associated CSS Module file <code>navbar.module.css</code>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default NavbarPage;
