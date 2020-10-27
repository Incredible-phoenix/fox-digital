
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AvatarCard from './AvatarCard';
import PricingCard from './PricingCard';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      paddingTop : theme.spacing(2)
    },
    maxWidth: '38%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
}));

const RightCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AvatarCard />
      <PricingCard />
    </div>
  );
};

export default RightCard;