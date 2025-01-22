import React from 'react';
import { Button } from '@albanese-ui/button';
import { Footer } from '@albanese-ui/footer';
import { Header } from '@albanese-ui/header';
import { Hero } from '@albanese-ui/hero';
import { Navbar } from '@albanese-ui/navbar';
import { Grid } from '@albanese-ui/grid';
import { Card } from '@albanese-ui/card';

export function App() {
  const links = ['Home', 'About', 'Services', 'Contact'];

  // Lista dei componenti con i relativi dettagli
  const components = [
    { title: 'Button', description: 'Un pulsante versatile e personalizzabile per le tue interfacce.' },
    { title: 'Footer', description: 'Un footer minimalista per le tue applicazioni web.' },
    { title: 'Header', description: 'Un header completo di titolo e contenuti aggiuntivi.' },
    { title: 'Hero', description: 'Un componente Hero per evidenziare contenuti principali.' },
    { title: 'Navbar', description: 'Una barra di navigazione flessibile e responsive.' },
    { title: 'Grid', description: 'Un layout a griglia altamente personalizzabile per organizzare i contenuti.' },
  ];

  return (
    <>
      <Header title="albanese-ui">
        <Button label="Login" variant="outline" />
        <Button label="Sign Up" />
      </Header>

      <Navbar links={links} />

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
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Componenti disponibili</h2>
        <Grid columns={3} gap={20}>
          {components.map((component, index) => (
            <Card
              key={index}
              title={component.title}
              description={component.description}
              theme="light" // Cambia in "dark" se vuoi uno stile scuro
            />
          ))}
        </Grid>
      </div>

      <Footer text="© 2025 Albanese UI">
        <Button label="Privacy Policy" variant="ghost" />
        <Button label="Contacts" variant="ghost" />
      </Footer>
    </>
  );
}

export default App;
