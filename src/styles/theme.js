import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      light: '#4791db',
      main: '#1976d3',
      dark: '#115293',
      contrastText: '#fff'
    },
    secondary: {
      light: '#555e6c',
      main: '#fff',
      dark: '#000000',
    },
    background: {
      default: "#FFFFFF",
      main: "#e6ebf4"
    },
    error: {
      light: '#EE2741',
      main: '#A20F3C',
      dark: '#860029',
      contrastText: '#fff'
    },
    text: {
      primary: '#000000'
    },
  },
  custom: {
    palette: {
      button: '#2a61ff',
      boxSolid : '#f2f5ff'
    },
    layout: {
      topAppBarHeight: 280,
      maxAppWidth: 1150,
      footerHeight: 173
    },
  }
}));

export default theme;
