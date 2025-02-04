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
                    <h2 className={styles.sectionTitle}>Grid Component</h2>
                    <p>
                        The Grid component is a flexible layout that allows you to organize elements in a responsive grid. <br />It can be configured to have a defined number of columns and a gap between elements, making it ideal for building complex and well-structured layouts.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Installation</h2>
                    <p>
                        To use the component in your application, install the library with the following command:
                    </p>
                    <pre className={styles.codeBlock}>
                        <code>npm install @albanese-ui/grid</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Import</h2>
                    <p>You can import the component directly into your project:</p>
                    <pre className={styles.codeBlock}>
                        <code>import {"{ Grid }"} from '@albanese-ui/grid';</code>
                    </pre>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>How to use the component</h2>
                    <p>
                        Here’s a basic example of using the <code>Grid</code> component:
                    </p>
                    <pre className={styles.codeBlock}>
                        <code>
                            {`import { Grid } from '@albanese-ui/grid';

function App() {
  return (
    <div>
      <Grid columns={3} gap={20}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
      </Grid>
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
                        The <code>Grid</code> component supports the following props:
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
                                <td><code>columns</code></td>
                                <td><code>number</code></td>
                                <td>3</td>
                                <td>The number of columns to display in the grid.</td>
                            </tr>
                            <tr>
                                <td><code>gap</code></td>
                                <td><code>number</code></td>
                                <td>20</td>
                                <td>The distance (in pixels) between grid items.</td>
                            </tr>
                            <tr>
                                <td><code>children</code></td>
                                <td><code>React.ReactNode</code></td>
                                <td>null</td>
                                <td>The elements to insert inside the grid. Each element should be a JSX element or a component.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Customization</h2>
                    <p>
                        Styles can be customized by modifying the associated CSS Module file for the component <code>grid.module.css</code>. You can also directly adjust properties like columns and gap to suit your needs.
                    </p>
                </section>
            </div>
        </>
    );
}

export default GridPage;
