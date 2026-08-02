import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/variables.css';
import './styles/global.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
