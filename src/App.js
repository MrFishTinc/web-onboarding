import React from 'react';
import Context from './Context';

import './App.scss';

import Button from '@material-ui/core/Button';

import Header from "./components/Header/Header"
import ProgressSteps from "./components/ProgressSteps/ProgressSteps"

import SelectGenderPage from "./components/Pages/SelectGenderPage/SelectGenderPage"
import TargetPage from "./components/Pages/TargetPage/TargetPage"
import ActivitiesPage from "./components/Pages/ActivitiesPage/ActivitiesPage"
import AgePage from "./components/Pages/AgePage/AgePage"
import HeightPage from "./components/Pages/HeightPage/HeightPage"
import WeightPage from "./components/Pages/WeightPage/WeightPage"
import GoalWeightPage from "./components/Pages/GoalWeightPage/GoalWeightPage"
import DietTypePage from "./components/Pages/DietTypePage/DietTypePage"
import ZonePage from "./components/Pages/ZonePage/ZonePage"
import LevelPage from "./components/Pages/LevelPage/LevelPage"
import TrackPage from "./components/Pages/TrackPage/TrackPage"
import WorkPage from "./components/Pages/WorkPage/WorkPage"
import TimePage from "./components/Pages/TimePage/TimePage"
import FinishPage from "./components/Pages/FinishPage/FinishPage"

const steps = [
  "Select your gender",
  "What's your goal?",
  "Which activities do you prefer?",
  "How old are you?",
  "Your height?",
  "Your current weight?",
  "Your goal weight?",
  "Choose your diet type",
  "Which zones need more attention?",
  "What's your current fitness level?",
  "What helps you stay on track?",
  "How hard are you prepared to work out?",
  "How much time do you want to spend on workouts?",
];

let tempTxt = ""

function App(props) {

  let store = props.store

  const [activeStep, setActiveStep] = React.useState(0);
  const [btnDisabled, setBtnClick] = React.useState(true);

  const handleNext = () => {
    if (btnDisabled === false) {
      setBtnClick(true)
    }
    props.changeStoreActive(tempTxt, activeStep)
    setActiveStep(activeStep + 1);
    console.log(store)
  };

  const handleBack = () => {
    if (btnDisabled === false) {
      setBtnClick(true)
    }
    props.changeStoreActive("", activeStep)
    setActiveStep(activeStep - 1);
  };

  const getButton = (btnDisabled) => {
    return (
      <div className="btnWrap">
        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={handleNext}
          disabled={btnDisabled}>
          {activeStep === steps.length - 1 ? ("Finish") : ("Continue")}
        </Button>
      </div>
    )
  }

  const changeStore = (text) => {
    if (btnDisabled === true) {
      setBtnClick(false)
    }
    tempTxt = text
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Context.Provider value={{ changeStore, store }}>
            <SelectGenderPage />
          </Context.Provider>
        )
      case 1:
        return (
          <Context.Provider value={{ changeStore, store }}>
            <TargetPage />
          </Context.Provider>
        )
      case 2:
        return (
          <Context.Provider value={{ changeStore }}>
            <ActivitiesPage />
          </Context.Provider>
        )
      case 3:
        return (
          <Context.Provider value={{ changeStore }}>
            <AgePage />
          </Context.Provider>
        )
      case 4:
        return (
          <Context.Provider value={{ changeStore, setBtnClick }}>
            <HeightPage />
          </Context.Provider>
        )
      case 5:
        return (
          <Context.Provider value={{ changeStore, setBtnClick }}>
            <WeightPage />
          </Context.Provider>
        )
      case 6:
        return (
          <Context.Provider value={{ changeStore, setBtnClick }}>
            <GoalWeightPage />
          </Context.Provider>
        )
      case 7:
        return (
          <Context.Provider value={{ changeStore }}>
            <DietTypePage />
          </Context.Provider>
        )
      case 8:
        return (
          <Context.Provider value={{ changeStore, store }}>
            <ZonePage />
          </Context.Provider>
        )
      case 9:
        return (
          <Context.Provider value={{ changeStore }}>
            <LevelPage />
          </Context.Provider>
        )
      case 10:
        return (
          <Context.Provider value={{ changeStore }}>
            <TrackPage />
          </Context.Provider>
        )
      case 11:
        return (
          <Context.Provider value={{ changeStore }}>
            <WorkPage />
          </Context.Provider>
        )
      case 12:
        return (
          <Context.Provider value={{ changeStore }}>
            <TimePage />
          </Context.Provider>
        )
      default: <div>Error</div>

    }
  }

  return (
    <section className="wrapper">

      <Context.Provider value={{ handleBack, activeStep, setActiveStep }}>
        <Header />
      </Context.Provider>

      {activeStep !== steps.length
        && (
          <Context.Provider value={{ activeStep, steps }}>
            <ProgressSteps />
          </Context.Provider>
        )}


      <div className="content">
        {activeStep === steps.length
          ? (
            <Context.Provider value={{ store }}>
              <FinishPage />
            </Context.Provider>
          )
          : (
            <div className="stepBlock">
              <h1 className="cap">{steps[activeStep]}</h1>
              {getStepContent(activeStep)}
            </div>
          )}
      </div>

      {activeStep !== steps.length && getButton(btnDisabled)}

    </section >
  );
}

export default App;
