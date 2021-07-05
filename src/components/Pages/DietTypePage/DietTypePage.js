import React, { useContext } from 'react';

import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import Context from '../../../Context';

import './DietTypePage.scss';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid #D9D9D9`,
    backgroundColor: `#D9D9D9`,
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});


let text = ""

function DietTypePage() {

  const { changeStore } = useContext(Context)

  const [state, setState] = React.useState(false);

  const handleChange = () => {
    setState(!state);
    addDiet(text, !state)
  }

  const onAddDiet = (e) => {
    text = e.target.textContent
    addDiet(text, state)
  }

  const addDiet = (text, state) => {
    if (state === true) {
      text = text + ", Intermittent fasting"
      changeStore(text)
    } else {
      changeStore(text)
    }
  }

  return (
    <>
      <div className="listLinks">
        <div className="item">
          <input type="radio" name="target" id="age1"></input>
          <label htmlFor="age1" onClick={onAddDiet}>All-food diet</label>
        </div>
        <div className="item">
          <input type="radio" name="target" id="age2"></input>
          <label htmlFor="age2" onClick={onAddDiet}>Vegetarian</label>
        </div>
        <div className="item">
          <input type="radio" name="target" id="age3"></input>
          <label htmlFor="age3" onClick={onAddDiet}>Vegan</label>
        </div>
        <div className="item">
          <input type="radio" name="target" id="age4"></input>
          <label htmlFor="age4" onClick={onAddDiet}>Keto</label>
        </div>
      </div>
      <div className="inpLabel">
        <span className="tit">Intermittent fasting</span>
        <FormControlLabel
          className="formControlLabel"
          control={
            <IOSSwitch
              color="primary"
              onChange={handleChange}
              checked={state}

            />
          }
          labelPlacement="start"
        />
      </div>

    </>
  );
}

export default DietTypePage;
