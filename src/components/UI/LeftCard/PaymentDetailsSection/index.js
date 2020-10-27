
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import OutlinedTextField from 'components/UI/OutlinedTextField';
import MasterLogo from 'assets/images/masterLogo.png';
import VisaLogo from 'assets/images/visaLogo.png';
import { paymentDetails } from 'utils/helper/dummy';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    '& .MuiList-padding': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      width: '100%'

    }
  },
  list: {
    display: 'flex',
    width: '100%',
    padding: 0
  },
  textField: {
    width: '15%'
  },
}));

const PaymentDetailsSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {
          paymentDetails.map((paymentDetail, index) => {
            return (
              <ListItem key={index} className={classes.list}>
                <img src={paymentDetail.cardType === 'master' ? MasterLogo : VisaLogo} alt="MasterLogo" />
                <ListItemText
                  primary={paymentDetail.cardCategories}
                  secondary={paymentDetail.number}
                  className={classes.titleColor} />
                <div className={classes.textField}>
                  <OutlinedTextField placeholder='CVC' />
                </div>
              </ListItem>
            )
          })
        }
      </List>
    </div>
  );
};

export default PaymentDetailsSection;