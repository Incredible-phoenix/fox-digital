
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const PricingCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    </div>
  );
};

export default PricingCard;