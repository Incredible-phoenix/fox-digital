import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  main: {
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 0, 0, 0)
    },
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    maxWidth: theme.custom.layout.maxAppWidth,
    minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight}px)`,
    minHeight: '100vh',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  mainPanel: {
    backgroundColor: theme.palette.background.main,
    width: '100%',
    minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight + theme.custom.layout.footerHeight}px)`,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.main}>
        <div className={classes.mainPanel}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;