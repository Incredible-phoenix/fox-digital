
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from "@material-ui/core/Slider";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.spacing(4),
    width: 320 + theme.spacing(3) * 2,
    marginLeft: theme.spacing(1)
  },
  minMaxContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  minMaxValue: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

const thumbComponent = (props) => {

  return (
    <span {...props}>
      <FiberManualRecordIcon fontSize='small' />
    </span>
  );
}

const PrettoSlider = withStyles({
  root: {
    color: '#2a61ff',
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 6
  },
  rail: {
    height: 6,
    borderRadius: 4
  }
})(Slider);

const RangeBar = ({ setRange }) => {
  const classes = useStyles();
  const handleSliderChange = (event, newValue) => {
    setRange(newValue);
  };

  return (
    <>
      <div className={classes.root} >
        <PrettoSlider
          ThumbComponent={thumbComponent}
          min={20}
          max={300}
          aria-label="custom thumb label"
          defaultValue={20}
          onChange={handleSliderChange}
        />
      </div >
      <div className={classes.minMaxContainer}>
        <div className={classes.minMaxValue}>
          <AttachMoneyIcon color="disabled" fontSize='small' />
          <Typography color='textSecondary' variant='subtitle2'>20 </Typography>
        </div>
        <div className={classes.minMaxValue}>
          <AttachMoneyIcon color="disabled" fontSize='small' />
          <Typography color='textSecondary' variant='subtitle2'>300 </Typography>
        </div>
      </div>
    </>
  );
};

export default RangeBar;