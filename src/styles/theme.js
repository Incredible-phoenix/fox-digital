
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
    error: {
      light: '#EE2741',
      main: '#A20F3C',
      dark: '#860029',
      contrastText: '#fff'
    },
    text: {
      primary: '#000000',
      secondary: '#fff',
    },
  },
  // typography: {
  //   h3: {
  //     fontSize: '50px',
  //   },
  //   h5: {
  //     fontSize: '26px',
  //   },
  //   h6: {
  //     fontSize: '21px',
  //     fontWeight: 300,
  //   },
  //   subtitle1: {
  //     fontSize: '14px',
  //     fontWeight: 'Bold'
  //   },
  //   body1: {
  //     fontSize: '18px',
  //     fontStyle: 'Bold'
  //   },
  //   body2: {
  //     fontSize: '13px',
  //     fontWeight: 300,
  //   },
  //   caption: {
  //     fontSize: '12px'
  //   },
  // },
  custom: {
    palette: {
      border: '#979797'
    },
    layout: {
      topAppBarHeight: 280,
      footerHeight: 173
    },
  }
}));

export default theme;
