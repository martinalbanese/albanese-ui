import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "../app/app.module.css";

// Immagini per ogni componente
import buttonImg from '/button.webp';
import cardImg from '/card.webp';
import gridImg from '/grid.webp';
import footerImg from '/footer.webp';
import headerImg from '/header.webp';
import heroImg from '/hero.webp';
import navbarImg from '/navbar.webp';

function ComponentsPage() {
    const navigate = useNavigate();

    const components = [
        { img: buttonImg, title: 'Button', description: 'Un pulsante versatile e personalizzabile per le tue interfacce.', route: '/docs/components/button' },
        { img: cardImg, title: 'Card', description: 'Una card personalizzabile per visualizzare i tuoi contenuti', route: '/docs/components/card' },
        { img: footerImg, title: 'Footer', description: 'Un footer minimalista per le tue applicazioni web.', route: '/docs/components/footer' },
        { img: gridImg, title: 'Grid', description: 'Un layout a griglia altamente personalizzabile per organizzare i contenuti.', route: '/docs/components/grid' },
        { img: headerImg, title: 'Header', description: 'Un header completo di titolo e contenuti aggiuntivi.', route: '/docs/components/header' },
        { img: heroImg, title: 'Hero', description: 'Un componente Hero per evidenziare contenuti principali.', route: '/docs/components/hero' },
        { img: navbarImg, title: 'Navbar', description: 'Una barra di navigazione flessibile e responsive.', route: '/docs/components/navbar' },
    ];

    return (
        <>
            {/* Back Button */}
            <div className={styles.backButtonContainer}>
                <button onClick={() => navigate(-1)} className={styles.backButton}>
                    Back
                </button>
            </div>

            <div className={styles.componentsPage}>
                <h1 className={styles.pageTitle}>Componenti disponibili</h1>
                <div className={styles.componentsGrid}>
                    {components.map((component, index) => (
                        <figure key={index} className={styles.componentCard}>
                            <Link to={component.route} className={styles.componentLink}>
                                <div className={styles.imageWrapper}>
                                    <img loading="lazy" src={component.img} alt={component.title} className={styles.componentImg} />
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.componentTitle}>{component.title}</h3>
                                    <p className={styles.componentDescription}>{component.description}</p>
                                    {/* <div className={styles.viewCodeWrapper}>
                                    <Link to={component.route} className={styles.viewCode}>Vedi codice &lt;/&gt;</Link>
                                </div> */}
                                </div>

                            </Link>
                        </figure>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ComponentsPage;
