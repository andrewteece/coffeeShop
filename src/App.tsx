import '@fontsource/roboto';
import './App.css';
import theme from './assets/theme';
import { ThemeProvider } from '@mui/material';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
