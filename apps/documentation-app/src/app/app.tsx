import React from 'react';
import { Button } from '@albanese-ui/button';
import { Footer } from '@albanese-ui/footer';
import { Header } from '@albanese-ui/header';
import { Hero } from '@albanese-ui/hero';
import { Navbar } from '@albanese-ui/navbar';
import { Grid } from '@albanese-ui/grid';
import { Card } from '@albanese-ui/card';

import { Outlet } from 'react-router-dom'

export function App() {
  const links = ['Home', 'About', 'Services', 'Contact'];

  return (
    <>
      <Header title="albanese-ui">
        <Button label="Login" variant="outline" />
        <Button label="Sign Up" />
      </Header>

      <Navbar links={links} />

      <Outlet />

      <Footer text="© 2025 Albanese UI">
        <Button label="Privacy Policy" variant="ghost" />
        <Button label="Contacts" variant="ghost" />
      </Footer>
    </>
  );
}

export default App;
