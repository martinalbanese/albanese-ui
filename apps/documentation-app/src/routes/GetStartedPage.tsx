import { useNavigate } from 'react-router-dom';
import styles from "../app/app.module.css";

function GetStartedPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Back Button */}
      <div className={styles.backButtonContainer}>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          Back
        </button>
      </div>
      
      {/* Installation Content */}
      <main className={styles.installationContainer}>
        <h1 className={styles.installationTitle}>Installation of albanese-ui</h1>
        <p className={styles.installationSubtitle}>
          Follow these simple steps to add the library to your project.
        </p>
        <ol className={styles.installationSteps}>
          <li className={styles.step}>
            <h2 className={styles.stepTitle}>1. Install the library</h2>
            <p className={styles.stepDescription}>
              Run the following command in the terminal to install albanese-ui via npm:
            </p>
            <pre className={styles.codeBlock}>npm install albanese-ui</pre>
          </li>
          <li className={styles.step}>
            <h2 className={styles.stepTitle}>2. Import the stylesheet</h2>
            <p className={styles.stepDescription}>
              Add the main CSS file to your project:
            </p>
            <pre className={styles.codeBlock}>import 'albanese-ui/dist/styles.css';</pre>
          </li>
          <li className={styles.step}>
            <h2 className={styles.stepTitle}>3. Use the components</h2>
            <p className={styles.stepDescription}>
              Now you can start using albanese-ui components. Here’s an example:
            </p>
            <pre className={styles.codeBlock}>{`import { Button } from 'albanese-ui';

function App() {
    return <Button label="Click here" />;
}`}</pre>
          </li>
        </ol>
      </main>
    </>
  );
}

export default GetStartedPage;
