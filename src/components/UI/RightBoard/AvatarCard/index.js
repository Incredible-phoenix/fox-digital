
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';

import ContainedButton from 'components/Buttons/ContainedButton';
import avatarImage from 'assets/images/avatar.png';
import { userData } from 'utils/helper/dummy';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '47%',
    width: '100%',
    justifyContent: 'flex-start',
    borderRadius: 10
  },
  footerContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  media: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: theme.spacing(19),
    position: 'relative',
    borderRadius: 'inherit'
  },
  footerElement: {
    display: 'flex',
    alignItems: 'center',
    width: '33.3%',
    flexDirection: 'column'
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    padding: theme.spacing(.5),
    borderRadius: 5
  },
  avatarGroup: {
    position: 'absolute',
    margin: theme.spacing(1),
    bottom: 0,
    marginBottom: -20,
    paddingBottome: 20,
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  CardContent: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  },
  Content: {
    display: 'flex',
    height: '56%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2)
  },
  proLevelButton: {
    borderRadius: theme.spacing(2.5),
    backgroundColor: theme.custom.palette.button
  }
}));

const AvatarCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.cardWrapper}>
        <CardMedia
          className={classes.media}
          image={require('assets/images/cardBackground.jpg')}
          title="Contemplative Reptile" >
          <AvatarGroup className={classes.avatarGroup}>
            <Avatar alt="Remy Sharp" src={avatarImage} size='large' className={classes.avatar} />
          </AvatarGroup>
        </CardMedia>
        <CardContent className={classes.CardContent}>
          <div className={classes.Content}>
            <Typography variant='h6'> Filip Martin Jose</Typography>
            <Typography color='textSecondary' variant='subtitle2'> Los Angeles</Typography>
            <ContainedButton size='medium' variant='contained' className={classes.proLevelButton}>
              <Typography variant='body1'>Pro Level </Typography>
            </ContainedButton>
          </div>
          <div className={classes.footerContainer}>
            {userData.map((user, index) => {
              return (
                <div key={index} className={classes.footerElement}>
                  <Typography color='textSecondary' variant='subtitle2'>{user.label} </Typography>
                  <Typography variant='h5'>{user.value} </Typography>
                </div>
              )
            })
            }
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default AvatarCard;  