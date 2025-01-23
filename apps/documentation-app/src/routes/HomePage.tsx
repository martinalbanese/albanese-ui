import { Button } from "@albanese-ui/button";
import { Card } from "@albanese-ui/card";
import { Grid } from "@albanese-ui/grid";
import { Hero } from "@albanese-ui/hero";
import buttonImg from '../../public/button.webp'
import footerImg from '../../public/footer.webp'
import headerImg from '../../public/header.webp'
import heroImg from '../../public/hero.webp'
import navbarImg from '../../public/navbar.webp'
import gridImg from '../../public/grid.webp'

function HomePage() {
    // Lista dei componenti con i relativi dettagli
    const components = [
        { img: buttonImg, title: 'Button', description: 'Un pulsante versatile e personalizzabile per le tue interfacce.' },
        { img: footerImg, title: 'Footer', description: 'Un footer minimalista per le tue applicazioni web.' },
        { img: headerImg, title: 'Header', description: 'Un header completo di titolo e contenuti aggiuntivi.' },
        { img: heroImg, title: 'Hero', description: 'Un componente Hero per evidenziare contenuti principali.' },
        { img: navbarImg, title: 'Navbar', description: 'Una barra di navigazione flessibile e responsive.' },
        { img: gridImg, title: 'Grid', description: 'Un layout a griglia altamente personalizzabile per organizzare i contenuti.' },
    ];

    return (
        <>
            <div>
                <Hero
                    title="Benvenuti in Albanese UI!"
                    subtitle="Una libreria di componenti UI facili da usare"
                >
                    <Button label="Scopri di più" variant="solid" />
                </Hero>
            </div>

            {/* Griglia dei componenti */}
            <div style={{ padding: '50px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '30px' }}>Componenti disponibili</h2>
                <Grid columns={3} gap={20}>
                    {components.map((component, index) => (
                        <Card
                            key={index}
                            img={component.img}
                            title={component.title}
                            description={component.description}
                            theme="light" // Cambia in "dark" se vuoi uno stile scuro
                        />
                    ))}
                </Grid>
            </div>
        </>
    )
}

export default HomePage; 