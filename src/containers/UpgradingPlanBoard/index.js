
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LeftCard from 'components/UI/LeftCard';
import RightBoard from 'components/UI/RightBoard';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    minHeight: '100%'
  }
}));

const UpgradingPlanBoard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LeftCard className={classes.leftCard} />
      <RightBoard />
    </div>
  );
};

export default UpgradingPlanBoard;