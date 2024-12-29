import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Import de BrowserRouter
import App from './App';
import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
