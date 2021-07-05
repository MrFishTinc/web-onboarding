import React, { useContext } from 'react';

import Context from '../../../Context';

import './AgePage.scss';

function AgePage() {

    const { changeStore } = useContext(Context)

    const onAddAge = (e) => {
        let text = e.target.textContent
        changeStore(text)
    }

    return (
        <>
            <div className="listLinks">
                <div className="item">
                    <input type="radio" name="target" id="age1"></input>
                    <label htmlFor="age1" onClick={onAddAge}>18-29</label>
                </div>
                <div className="item">
                    <input type="radio" name="target" id="age2"></input>
                    <label htmlFor="age2" onClick={onAddAge}>30-39</label>
                </div>
                <div className="item">
                    <input type="radio" name="target" id="age3"></input>
                    <label htmlFor="age3" onClick={onAddAge}>40-49</label>
                </div>
                <div className="item">
                    <input type="radio" name="target" id="age4"></input>
                    <label htmlFor="age4" onClick={onAddAge}>50-59+</label>
                </div>
            </div>
        </>
    );
}

export default AgePage;
