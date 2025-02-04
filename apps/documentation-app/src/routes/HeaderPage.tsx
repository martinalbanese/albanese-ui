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
                    <h2 className={styles.sectionTitle}>Header Component</h2>
                    <p>
                        The Header is a reusable component to create a flexible and customizable header, designed to display the title of an application with an area dedicated to additional elements such as buttons or icons. It supports two theme variants: light and dark.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Installation</h2>
                    <p>
                        To use the component in your application, install the library with the following command:
                    </p>
                    <pre className={styles.codeBlock}>
                        <code>npm install @albanese-ui/header</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Import</h2>
                    <p>You can import the component directly into your project:</p>
                    <pre className={styles.codeBlock}>
                        <code>import {"{ Header }"} from '@albanese-ui/header';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>How to use the component</h2>
                    <p>
                        Here’s a basic example of using the <code>Header</code> component:
                    </p>
                    <pre className={styles.codeBlock}>
                        <code>
                            {`import { Header } from '@albanese-ui/header';

function App() {
  return (
    <Header title="App Name" theme="light">
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
                    <h2 className={styles.sectionTitle}>Component Properties</h2>
                    <p>
                        The <code>Header</code> component supports the following props:
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
                                <td><code>title</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>The title to display in the header.</td>
                            </tr>
                            <tr>
                                <td><code>theme</code></td>
                                <td><code>'light' | 'dark'</code></td>
                                <td>'light'</td>
                                <td>The style variant of the header (light or dark).</td>
                            </tr>
                            <tr>
                                <td><code>children</code></td>
                                <td><code>React.ReactNode</code></td>
                                <td>null</td>
                                <td>Optional elements to add next to the title (e.g. buttons or links).</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Customization</h2>
                    <p>
                        You can customize the styles by modifying the associated CSS file, <code>header.module.css</code>, or by using custom classes.
                    </p>
                </section>
            </div>
        </>
    );
}

export default HeaderPage;
