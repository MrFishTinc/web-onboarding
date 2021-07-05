import React, { useContext } from 'react';

import TextField from '@material-ui/core/TextField';

import Context from '../../../Context';

import './HeightPage.scss';

let text = ""
let unitValue = "Ft"

function HeightPage() {

    const { changeStore, setBtnClick } = useContext(Context)

    const onAddUnit = (e) => {
        unitValue = e.target.getAttribute("for")
        onAdd(text)
    }
    const onAddHeight = (e) => {
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
                        <input id="Ft" type="radio" name="rd" defaultChecked></input>
                        <label htmlFor="Ft" onClick={onAddUnit}>Ft</label>
                    </div>
                    <div className="inpLabel">
                        <input id="Cm" type="radio" name="rd"></input>
                        <label htmlFor="Cm" onClick={onAddUnit}>Cm</label>
                    </div>
                </div>
                <TextField className="input" id="standard-basic" label="Your height" onChange={onAddHeight}  />
            </form>
        </div>
    );
}

export default HeightPage;
