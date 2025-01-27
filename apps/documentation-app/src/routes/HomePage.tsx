import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../app/app.module.css";

function HomePage() {
  return (
    <>

      {/* Hero Section */}
      <main className={styles.hero}>
        <h1 className={styles.heroTitle}>Semplifica il tuo design con albanese-ui</h1>
        <h2 className={styles.heroSubtitle}>Una libreria di componenti CSS semplice, moderna e versatile</h2>
        <div className={styles.heroButtons}>
          <Link to="/docs" className={styles.ctaPrimary}>Installazione</Link>
          <Link to="/docs/components" className={styles.ctaSecondary}>Componenti</Link>
        </div>
      </main>
    </>
  );
}

export default HomePage;