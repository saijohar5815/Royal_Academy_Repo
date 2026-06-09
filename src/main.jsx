import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/variables.css";
import './index.css'
import App from './App.jsx'
import "@fontsource/inter";
import "@fontsource/playfair-display";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
