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
        <h1 className={styles.installationTitle}>Installazione di albanese-ui</h1>
        <p className={styles.installationSubtitle}>
          Segui questi semplici passaggi per aggiungere la libreria al tuo progetto.
        </p>
        <ol className={styles.installationSteps}>
          <li className={styles.step}>
            <h2 className={styles.stepTitle}>1. Installa la libreria</h2>
            <p className={styles.stepDescription}>
              Esegui il seguente comando nel terminale per installare albanese-ui tramite npm:
            </p>
            <pre className={styles.codeBlock}>npm install albanese-ui</pre>
          </li>
          <li className={styles.step}>
            <h2 className={styles.stepTitle}>2. Importa lo stile</h2>
            <p className={styles.stepDescription}>
              Aggiungi il file CSS principale nel tuo progetto:
            </p>
            <pre className={styles.codeBlock}>import 'albanese-ui/dist/styles.css';</pre>
          </li>
          <li className={styles.step}>
            <h2 className={styles.stepTitle}>3. Usa i componenti</h2>
            <p className={styles.stepDescription}>
              Ora puoi iniziare a utilizzare i componenti albanese-ui. Ecco un esempio:
            </p>
            <pre className={styles.codeBlock}>{`import { Button } from 'albanese-ui';

function App() {
    return <Button label="Clicca qui" />;
}`}</pre>
          </li>
        </ol>
      </main>
    </>
  );
}

export default GetStartedPage;
