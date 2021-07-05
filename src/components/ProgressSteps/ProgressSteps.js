import React, { useContext } from 'react';

import Context from '../../Context';

import './ProgressSteps.scss';

function ProgressSteps() {

    const { activeStep, steps } = useContext(Context)
    return (
        <div className="progressList">

            {steps.map((el, index) => {
                return <div className={(index <= activeStep) ? ("line active") : ("line")} key={index} ></div>
            })}

        </div>

    );

}

export default ProgressSteps;
