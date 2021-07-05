import React, { useContext } from 'react';

import Context from '../../../Context';

import './FinishPage.scss';

function FinishPage() {

    const { store } = useContext(Context)

    return (
        <>
            <div className="finishList">
                <div className="item">
                    <span className="tit">Step 1 - gender</span>
                    <span className="txt">{store.gender}</span>
                </div>
                <div className="item">
                    <span className="tit">Step 2 - target</span>
                    <span className="txt">{store.target}</span>
                </div>
                <div className="item">
                    <span className="tit">Step 3 - activities</span>
                    <span className="txt">{store.activities}</span>
                </div>
                <div className="item">
                    <span className="tit">Step 4 - age</span>
                    <span className="txt">{store.age}</span>
                </div>
                <div className="item">
                    <span className="tit">Step 5 - height</span>
                    <span className="txt">{store.height}</span>
                </div>
                <div className="item">
                    <span className="tit">Step 6 - weight</span>
                    <span className="txt">{store.weight}</span>
                </div>
                <div className="item">
                    <span className="tit">Step 7 - goalWeight</span>
                    <span className="txt">{store.goalWeight}</span>
                </div>
                <div className="item">
                    <span className="tit">Step 8 - diet</span>
                    <span className="txt">{store.diet}</span>
                </div>
                <div className="item">
                    <span className="tit">Step 9 - zone</span>
                    <span className="txt">{store.zone}</span>
                </div>
                <div className="item">
                    <span className="tit">Step 10 - level</span>
                    <span className="txt">{store.level}</span>
                </div>
                <div className="item">
                    <span className="tit">Step 11 - track</span>
                    <span className="txt">{store.track}</span>
                </div>
                <div className="item">
                    <span className="tit">Step 12 - work</span>
                    <span className="txt">{store.work}</span>
                </div>
                <div className="item">
                    <span className="tit">Step 13 - time</span>
                    <span className="txt">{store.time}</span>
                </div>
            </div>
        </>
    );
}

export default FinishPage;
