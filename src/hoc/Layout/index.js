import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: theme.custom.layout.maxAppWidth,
  },
  main: {
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 0, 0, 0)
    },
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight}px)`,
    height: '100vh',
    padding: theme.spacing(0, 5, 0, 5)
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;