import React, { useContext } from 'react';

import Context from '../../../Context';

import './LevelPage.scss';

function LevelPage() {

    const { changeStore } = useContext(Context)

    const onAddLevel = (e) => {
        let text = e.target.textContent
        changeStore(text)
    }

    return (
        <>
            <div className="listLinks">
                <div className="item">
                    <input type="radio" name="target" id="target1"></input>
                    <label htmlFor="target1" onClick={onAddLevel}>Beginner</label>
                </div>
                <div className="item">
                    <input type="radio" name="target" id="target2"></input>
                    <label htmlFor="target2" onClick={onAddLevel}>Intermediate</label>
                </div>
                <div className="item">
                    <input type="radio" name="target" id="target3"></input>
                    <label htmlFor="target3" onClick={onAddLevel}>Advanced</label>
                </div>
            </div>
        </>
    );
}

export default LevelPage;
