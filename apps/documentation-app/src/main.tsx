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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='button' element={<ButtonPage />} />
          <Route path='footer' element={<FooterPage />} />
          <Route path='grid' element={<GridPage />} />
          <Route path='header' element={<HeaderPage />} />
          <Route path='hero' element={<HeroPage />} />
          <Route path='navbar' element={<NavbarPage />} />
        </Route>


      </Routes>

    </BrowserRouter>

  </StrictMode>
);
