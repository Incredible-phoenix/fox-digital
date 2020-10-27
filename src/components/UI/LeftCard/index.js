
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import PaymentDetailsSection from './PaymentDetailsSection';
import OutlinedTextField from 'components/UI/OutlinedTextField';
import ContainedButton from 'components/Buttons/ContainedButton';
import logo from 'assets/images/smallBusinessLogo.png';
import ArrowIcon from 'components/Icons/ArrowIcon';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: 10,
    width: '55%',
    minHeight: '100%',
    padding: theme.spacing(2)
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '38%',
    paddingTop: 0,
    paddingBottom: theme.spacing(1)
  },
  description: {
    paddingTop: 0,
    paddingBottom: 0
  },
  changePlanList: {
    minHeight: '115%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '0.5px solid blue',
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(.5)
  },
  leftSection: {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  changePlanListCenter: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'row'
  },
  yearCaption: {
    display: 'flex',
    paddingLeft: theme.spacing(.5),
    alignItems: 'flex-end'
  },
  middleSection: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '33%'
  },
  footerSection: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '33%',
    flexDirection: 'column',
    padding: theme.spacing(2)
  },
  textField: {
    height: '32%'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '48%',
    backgroundColor: theme.custom.palette.button
  },
  arrowIcon: {
    marginLeft: theme.spacing(1)
  },
  link: {
    cursor: 'pointer'
  }
}));

const LeftCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.topSection}>
        <CardHeader title='Upgrade your plan' />
        <CardContent className={classes.description}>
          <Typography variant='subtitle2' color='textSecondary'>
            Please make the payment to start enjoying all the fetures of our premium plan as soon as possible
        </Typography>
        </CardContent>
        <CardContent>
          <div className={classes.changePlanList}>
            <div className={classes.leftSection}>
              <img src={logo} alt="smallBusinessLogo" />
              <div className={classes.changePlanListCenter}>
                <Typography variant='h6'>
                  Small Business
                </Typography>
                <Typography color='primary' variant='button' className={classes.link}>
                  CHANGE PLAN
            </Typography>
              </div>
            </div>
            <div className={classes.rightSection}>
              <AttachMoneyIcon color="disabled" fontSize='small' />
              <Typography variant='h3'>8350 </Typography>
              <Typography variant='body1' color='textSecondary' className={classes.yearCaption}> / year </Typography>
            </div>
          </div>
        </CardContent>
      </div>
      <CardContent className={classes.middleSection}>
        <Typography variant='body1'>Payment details </Typography>
        <PaymentDetailsSection />
        <Typography variant='button' color='primary'>ADD PAYMENT METHOD:  </Typography>
      </CardContent>
      <CardActions className={classes.footerSection}>
        <OutlinedTextField className={classes.textField} width={20} placeholder='Email address' />
        <ContainedButton className={classes.button} >
          <Typography variant='h6' size='medium'>Procceed to payment </Typography>
          <ArrowIcon className={classes.arrowIcon} />
        </ContainedButton>
      </CardActions>
    </Card>
  );
};

export default LeftCard;