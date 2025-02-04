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
                    <h2 className={styles.sectionTitle}>Button Component</h2>
                    <p>
                        Button is a reusable button component, designed to be flexible and highly customizable.
                        <br />
                        It supports three main style variants (solid, outline, ghost) and allows easy action definition via the onClick attribute.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Installation</h2>
                    <p>
                        To use the component in your application, install the library with the following command:
                    </p>
                    <pre className={styles.codeBlock}>
                        <code>npm install @albanese-ui/button</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Import</h2>
                    <p>You can import the component directly into your project:</p>
                    <pre className={styles.codeBlock}>
                        <code>import {"{ Button }"} from '@albanese-ui/button';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>How to Use the Component</h2>
                    <p>
                        Here is a basic example of how to use the <code>Button</code> component:
                    </p>
                    <pre className={styles.codeBlock}>
                        <code>
                            {`import { Button } from '@albanese-ui/button';

function App() {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <Button label="Click here" variant="solid" onClick={handleClick} />
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
                        The <code>Button</code> component supports the following props:
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
                                <td><code>label</code></td>
                                <td><code>string</code></td>
                                <td>-</td>
                                <td>Text displayed inside the button.</td>
                            </tr>
                            <tr>
                                <td><code>variant</code></td>
                                <td><code>'solid' | 'outline' | 'ghost'</code></td>
                                <td>'solid'</td>
                                <td>
                                    The style variant of the button:
                                    <ul>
                                        <li><b>solid</b>: filled button with a colored background (default).</li>
                                        <li><b>outline</b>: button with a colored border and transparent background.</li>
                                        <li><b>ghost</b>: fully transparent button with only colored text.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><code>onClick</code></td>
                                <td><code>() =&gt; void</code></td>
                                <td>null</td>
                                <td>Function executed when the button is clicked.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Customization</h2>
                    <p>
                        The button styles can be modified by customizing the CSS Module file associated with the component: <code>button.module.css</code>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default ButtonPage;
