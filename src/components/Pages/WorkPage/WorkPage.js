import React, { useContext } from 'react';

import Context from '../../../Context';

import './WorkPage.scss';

function WorkPage() {

    const { changeStore } = useContext(Context)

    const onAddWork = (e) => {
        let text = e.target.textContent
        changeStore(text)
    }

    return (
        <>
            <div className="listLinks">
                <div className="item">
                    <input type="radio" name="track" id="track1"></input>
                    <label htmlFor="track1" onClick={onAddWork}>1-2 workouts / week</label>
                </div>
                <div className="item">
                    <input type="radio" name="track" id="track2"></input>
                    <label htmlFor="track2" onClick={onAddWork}>3-4 workouts / week</label>
                </div>
                <div className="item">
                    <input type="radio" name="track" id="track3"></input>
                    <label htmlFor="track3" onClick={onAddWork}>5 and more / week</label>
                </div>
                <div className="item">
                    <input type="radio" name="track" id="track4"></input>
                    <label htmlFor="track4" onClick={onAddWork}>Let Verv decide</label>
                </div>
            </div>
        </>
    );
}

export default WorkPage;
