import React, { useContext } from 'react';

import Context from '../../../Context';

import './ActivitiesPage.scss';

function ActivitiesPage() {

    const { changeStore } = useContext(Context)

    const onAddActivities = (e) => {
        let text = e.target.textContent
        changeStore(text)
    }

    return (
        <>
            <div className="listLinks">
                <div className="item">
                    <input type="radio" name="target" id="activitie1"></input>
                    <label htmlFor="activitie1" onClick={onAddActivities}>Fitness at home</label>
                </div>
                <div className="item">
                    <input type="radio" name="target" id="activitie2"></input>
                    <label htmlFor="activitie2" onClick={onAddActivities}>Walking</label>
                </div>
                <div className="item">
                    <input type="radio" name="target" id="activitie3"></input>
                    <label htmlFor="activitie3" onClick={onAddActivities}>Running</label>
                </div>
                <div className="item">
                    <input type="radio" name="target" id="activitie4"></input>
                    <label htmlFor="activitie4" onClick={onAddActivities}>Yoga at home</label>
                </div>
                <div className="item">
                    <input type="radio" name="target" id="activitie5"></input>
                    <label htmlFor="activitie5" onClick={onAddActivities}>Dance at home</label>
                </div>
            </div>
        </>
    );
}

export default ActivitiesPage;
