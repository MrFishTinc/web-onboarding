import React, { useContext } from 'react';

import Context from '../../../Context';

import './TimePage.scss';

function TimePage() {

    const { changeStore } = useContext(Context)

    const onAddTime = (e) => {
        let text = e.target.textContent
        changeStore(text)
    }

    return (
        <>
            <div className="listLinks">
                <div className="item">
                    <input type="radio" name="time" id="time1"></input>
                    <label htmlFor="time1" onClick={onAddTime}>Less than 10 min</label>
                </div>
                <div className="item">
                    <input type="radio" name="time" id="time2"></input>
                    <label htmlFor="time2" onClick={onAddTime}>10-20 min</label>
                </div>
                <div className="item">
                    <input type="radio" name="time" id="time3"></input>
                    <label htmlFor="time3" onClick={onAddTime}>More than 20 min</label>
                </div>
                <div className="item">
                    <input type="radio" name="time" id="time4"></input>
                    <label htmlFor="time4" onClick={onAddTime}>Let Verv decide</label>
                </div>
            </div>
        </>
    );
}

export default TimePage;
