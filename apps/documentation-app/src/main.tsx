import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './app/app';
import ButtonPage from './routes/ButtonPage';
import HomePage from './routes/HomePage';
import FooterPage from './routes/FooterPage';
import GridPage from './routes/GridPage';
import HeaderPage from './routes/HeaderPage';
import HeroPage from './routes/HeroPage';
import NavbarPage from './routes/NavbarPage';
import GetStartedPage from './routes/GetStartedPage';
import SideMenuPage from './routes/SideMenuPage';
import ComponentsPage from './routes/ComponentsPage';
import CardPage from './routes/CardPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='/docs' element={<SideMenuPage />}>
            <Route index element={<GetStartedPage />} />
            <Route path='components' element={<ComponentsPage />} />
            <Route path='components/button' element={<ButtonPage />} />
            <Route path='components/card' element={<CardPage />} />
            <Route path='components/grid' element={<GridPage />} />
            <Route path='components/footer' element={<FooterPage />} />
            <Route path='components/header' element={<HeaderPage />} />
            <Route path='components/hero' element={<HeroPage />} />
            <Route path='components/navbar' element={<NavbarPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>
);
