
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import RangeBar from './RangeBar';
import ContainedButton from 'components/Buttons/ContainedButton';
import { JOB_TYPES } from 'constants/job-types';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2)
    },
    width: '100%',
    flexDirection: 'column',
    height: '47%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 10
  },
  cardContent: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    display: 'flex',
    height: '40%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 0,
  },
  jobTypeContainer: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2)
    },
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  selectedButton: {
    width: '45%',
    margin: 0,
    color: theme.palette.primary.light,
    backgroundColor: theme.custom.palette.boxSolid,
    border: `0.5px solid ${theme.custom.palette.button}`,
    '&:hover': {
      backgroundColor: theme.palette.background.default
    }
  },
  button: {
    width: '45%',
    margin: 0,
    border: `0.5px solid #bdbdbd`,
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.background.default,
    '&:hover': {
      backgroundColor: theme.custom.palette.boxSolid
    }
  },
  hourCaption: {
    display: 'flex',
    paddingLeft: theme.spacing(.5),
    alignItems: 'flex-end'
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'row'
  },
  cardAction: {
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingBottom: 0
  }
}));

const PricingCard = () => {
  const classes = useStyles();
  const [jobType, setJobType] = useState(0)
  const [range, setRange] = useState(20);
  const selectHandler = (index) => {
    setJobType(index);
  }

  return (
    <Card className={classes.root}>
      <CardHeader title={<Typography variant='h6'>Set up your pricing</Typography>} />
      <CardContent className={classes.cardContent}>
        <Typography color='textSecondary' variant='subtitle2' >
          Please set up your hourly or fixed rate so that the clients is aware of your pricing.
        </Typography>
        <div className={classes.jobTypeContainer}>
          {JOB_TYPES.map((job, index) => {

            return (
              <ContainedButton
                key={index}
                size='large'
                variant="contained"
                className={job.value === jobType ? classes.selectedButton : classes.button}
                startIcon={job.Icon}
                onClick={() => selectHandler(index)}>
                <Typography color='textSecondary' variant='subtitle2' >{job.id}</Typography>
              </ContainedButton>
            )
          })}
        </div>
      </CardContent>
      <CardContent className={classes.cardAction}>
        <div className={classes.rightSection}>
          <AttachMoneyIcon color="disabled" fontSize='small' />
          <Typography variant='h4'>{range} </Typography>
          <Typography variant='subtitle1' color='textSecondary' className={classes.hourCaption}> / hour </Typography>
        </div>
        <RangeBar setRange={setRange} />
      </CardContent>
    </Card>
  );
};

export default PricingCard;