import { Link, Outlet } from 'react-router-dom';
import styles from "../app/app.module.css";

export function SideMenuPage() {
    return (
        <>
            <div className={styles.container}>
                {/* Sidebar Menu */}
                <div className={styles.sideMenu}>
                    <div className={styles.menuCategory}>
                        <h3>Panoramica</h3>
                        <ul>
                            <li className={styles.link}><Link to='/docs'>Installazione</Link></li>
                        </ul>
                    </div>
                    <div className={styles.menuCategory}>
                        <h3>Componenti</h3>
                        <ul>
                            {/* Qui i percorsi sono relativi per restare nella stessa sezione */}
                            <li className={styles.link}><Link to='/docs/components'>Tutti i componenti</Link></li>
                            <li className={styles.link}><Link to='/docs/components/button'>Button</Link></li>
                            <li className={styles.link}><Link to='/docs/components/card'>Card</Link></li>
                            <li className={styles.link}><Link to='/docs/components/grid'>Grid</Link></li>
                            <li className={styles.link}><Link to='/docs/components/footer'>Footer</Link></li>
                            <li className={styles.link}><Link to='/docs/components/header'>Header</Link></li>
                            <li className={styles.link}><Link to='/docs/components/hero'>Hero</Link></li>
                            <li className={styles.link}><Link to='/docs/components/navbar'>Navbar</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default SideMenuPage;
