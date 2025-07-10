import '@fontsource/roboto';
import './App.css';
import theme from './assets/theme';
import { ThemeProvider } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Hero from './components/features/Hero';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
