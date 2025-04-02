import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app/App';
import { AppProvider } from "./contexts/AppContext";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)
