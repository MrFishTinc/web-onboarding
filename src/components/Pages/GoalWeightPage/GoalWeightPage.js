import React, { useContext } from 'react';

import TextField from '@material-ui/core/TextField';

import Context from '../../../Context';

import './GoalWeightPage';

let text = ""
let unitValue = "Kg"

function GoalWeightPage() {

    const { changeStore, setBtnClick } = useContext(Context)

    const onAddUnit = (e) => {
        unitValue = e.target.getAttribute("for")
        onAdd(text)
    }
    const onAddWeight = (e) => {
        text = e.target.value
        onAdd(text)
    }

    const onAdd = (text) => {
        if (text !== "") {
            text = text + " " + unitValue
            changeStore(text)
        } else {
            setBtnClick(true)
        }
    }

    return (
        <div className="formaBlock">
            <form className="root" noValidate >
                <div className="listInpLabel">
                    <div className="inpLabel">
                        <input id="LBS" type="radio" name="rd" ></input>
                        <label htmlFor="LBS" onClick={onAddUnit}>LBS</label>
                    </div>
                    <div className="inpLabel">
                        <input id="Kg" type="radio" name="rd" defaultChecked></input>
                        <label htmlFor="Kg" onClick={onAddUnit}>Kg</label>
                    </div>
                </div>
                <TextField className="input" id="standard-basic" label="Goal weight" onChange={onAddWeight} />
            </form>
            <span className="desr">Your target weight should be less than your current weight. Please double check. You might have used metric system instead of imperial. You can change preferred unit system at the top of this page.</span>
        </div>
    );
}

export default GoalWeightPage;
