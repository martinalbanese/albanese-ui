import { Link, Outlet } from 'react-router-dom';
import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>albanese-ui</h1>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/docs" className={styles.link}>Docs</Link>
          <Link to="/docs/components" className={styles.link}>Components</Link>
        </div>
      </nav>

      {/* Outlet */}
      <Outlet />
    </div>
  );
}

export default App;
