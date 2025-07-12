import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#845218' },
        secondary: { main: '#164a25' },
        // you can also add background, text, etc.
      },
    },
    dark: {
      palette: {
        primary: { main: '#845218' },
        secondary: { main: '#164a25' },
        mode: 'dark', // ensures theme uses dark mode colors
        background: {
          default: '#121212',
          paper: '#1d1d1d',
        },
      },
    },
  },
  components: {
    MuiSvgIcon: {
      defaultProps: {
        htmlColor: 'currentColor', // ensures icons inherit text color :contentReference[oaicite:2]{index=2}
      },
    },
  },
});

export default theme;
