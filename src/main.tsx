import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// define a theme with built-in colorSchemes support
const theme = createTheme({
  colorSchemes: {
    light: { palette: { mode: 'light' } },
    dark: { palette: { mode: 'dark' } },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme} defaultMode='light'>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
