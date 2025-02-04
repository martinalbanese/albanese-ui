import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "../app/app.module.css";

// Images for each component
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
        { img: buttonImg, title: 'Button', description: 'A versatile and customizable button for your interfaces.', route: '/docs/components/button' },
        { img: cardImg, title: 'Card', description: 'A customizable card to display your content.', route: '/docs/components/card' },
        { img: footerImg, title: 'Footer', description: 'A minimalist footer for your web applications.', route: '/docs/components/footer' },
        { img: gridImg, title: 'Grid', description: 'A highly customizable grid layout to organize content.', route: '/docs/components/grid' },
        { img: headerImg, title: 'Header', description: 'A header complete with title and additional content.', route: '/docs/components/header' },
        { img: heroImg, title: 'Hero', description: 'A Hero component to highlight main content.', route: '/docs/components/hero' },
        { img: navbarImg, title: 'Navbar', description: 'A flexible and responsive navigation bar.', route: '/docs/components/navbar' },
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
                <h1 className={styles.pageTitle}>Available Components</h1>
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