import '@fontsource/roboto';
import './App.css';
import theme from './assets/theme';
import { ThemeProvider } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Hero from './components/features/Hero';
import Coffee from './components/features/Coffee';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Coffee />
    </ThemeProvider>
  );
}

export default App;
