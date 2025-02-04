import { useNavigate } from "react-router-dom";
import styles from "../app/app.module.css";

function FooterPage() {
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
                    <h2 className={styles.sectionTitle}>Footer Component</h2>
                    <p>
                        The Footer component is a reusable element that creates a fixed footer at the bottom of the page. <br />
                        It supports light and dark themes and can include additional content such as links, buttons, or other icons.
                        It is designed to be flexible and fully customizable.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Installation</h2>
                    <p>
                        To use the component in your application, install the library with the following command:
                    </p>
                    <pre className={styles.codeBlock}>
                        <code>npm install @albanese-ui/footer</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Import</h2>
                    <p>You can import the component directly into your project:</p>
                    <pre className={styles.codeBlock}>
                        <code>import {"{ Footer }"} from '@albanese-ui/footer';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>How to Use the Component</h2>
                    <p>
                        Here is a basic example of how to use the <code>Footer</code> component:
                    </p>
                    <pre className={styles.codeBlock}>
                        <code>
                            {`import { Footer } from '@albanese-ui/footer';

function App() {
  return (
    <div className="app-container">
      <div>
        {/* Main content of the app */}
        <h1>Welcome to Albanese UI!</h1>
        <p>This is the page content.</p>
      </div>
      <Footer text="© 2025 Albanese UI">
        <Button label="Privacy Policy" variant="ghost" />
        <Button label="Contact Us" variant="ghost" />
      </Footer>
    </div>
  );
}

export default App;`}
                        </code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Component Properties</h2>
                    <p>
                        The <code>Footer</code> component supports the following props:
                    </p>
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
                                <td><code>text</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>Main text to display in the footer.</td>
                            </tr>
                            <tr>
                                <td><code>theme</code></td>
                                <td><code>'light' | 'dark'</code></td>
                                <td>'light'</td>
                                <td>
                                    The footer style variant:
                                    <ul>
                                        <li><b>light</b>: light theme with a light background and dark text (default).</li>
                                        <li><b>dark</b>: dark theme with a dark background and light text.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><code>children</code></td>
                                <td><code>React.ReactNode</code></td>
                                <td>null</td>
                                <td>Optional elements to add next to or below the footer text, such as buttons or links.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Customization</h2>
                    <p>
                        The footer styles can be modified by customizing the CSS Module file associated with the component: <code>footer.module.css</code>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default FooterPage;