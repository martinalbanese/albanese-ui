import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router'

import App from './app/app';
import ButtonPage from './routes/ButtonPage';
import HomePage from './routes/HomePage';

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
        </Route>


      </Routes>

    </BrowserRouter>

  </StrictMode>
);
