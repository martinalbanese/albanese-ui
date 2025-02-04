import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../app/app.module.css";

function HomePage() {
  return (
    <>

      {/* Hero Section */}
      <main className={styles.hero}>
        <h1 className={styles.heroTitle}>Simplify your design with albanese-ui</h1>
        <h2 className={styles.heroSubtitle}>A simple, modern, and versatile CSS component library</h2>
        <div className={styles.heroButtons}>
          <Link to="/docs" className={styles.ctaPrimary}>Docs</Link>
          <Link to="/docs/components" className={styles.ctaSecondary}>Components</Link>
        </div>
      </main>
    </>
  );
}

export default HomePage;
