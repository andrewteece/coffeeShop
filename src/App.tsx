import '@fontsource/roboto';
import './App.css';
import theme from './assets/theme';
import { ThemeProvider, useColorScheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Navbar from './components/layout/Navbar';
import Hero from './components/features/Hero';
import Coffee from './components/features/Coffee';

function AppContent() {
  const { mode, setMode, systemMode } = useColorScheme();
  const effectiveMode = mode === 'system' ? systemMode : mode;

  return (
    <>
      <CssBaseline />
      <IconButton
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        color='inherit'
        sx={{ position: 'fixed', top: 16, right: 16 }}
      >
        {effectiveMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>

      <Navbar />
      <Hero />
      <Coffee />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme} defaultMode='light'>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
