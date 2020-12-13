import 'typeface-roboto';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import Layout from 'hoc/Layout';
import UpgradingPlanBoard from './containers/UpgradingPlanBoard';
import theme from 'styles/theme';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <UpgradingPlanBoard />
      </Layout>
    </ThemeProvider>
  )
};

export default App;
