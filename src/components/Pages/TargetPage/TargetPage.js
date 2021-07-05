import React, { useContext } from 'react';

import Context from '../../../Context';

import './TargetPage.scss';

function TargetPage() {

    const { changeStore, store } = useContext(Context)
    const onAddTarget = (e) => {
        let text = e.target.textContent
        changeStore(text)
    }

    return (
        <>
            <div className="listLinks">
                <div className="item">
                    <input type="radio" name="target" id="target1"></input>
                    <label htmlFor="target1" onClick={onAddTarget}>Lose weight</label>
                </div>
                {
                    store.gender === "male" && (
                        <div className="item">
                            <input type="radio" name="target" id="target2"></input>
                            <label htmlFor="target2" onClick={onAddTarget}>Build Muscle</label>
                        </div>
                    )
                }
                <div className="item">
                    <input type="radio" name="target" id="target3"></input>
                    <label htmlFor="target3" onClick={onAddTarget}>Body tone up</label>
                </div>
                {
                    store.gender === "female" && (
                        <>
                            <div className="item">
                                <input type="radio" name="target" id="target4"></input>
                                <label htmlFor="target4" onClick={onAddTarget}>Love myself</label>
                            </div>
                            <div className="item">
                                <input type="radio" name="target" id="target5"></input>
                                <label htmlFor="target5" onClick={onAddTarget}>Gain muscles</label>
                            </div>
                        </>
                    )
                }

            </div>
        </>
    );
}

export default TargetPage;
