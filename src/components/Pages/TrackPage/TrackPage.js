import React, { useContext } from 'react';

import Context from '../../../Context';

import './TrackPage.scss';

function TrackPage() {

    const { changeStore } = useContext(Context)

    const onAddTrack = (e) => {
        let text = e.target.textContent
        changeStore(text)
    }

    return (
        <>
            <div className="listLinks">
                <div className="item">
                    <input type="radio" name="track" id="track1"></input>
                    <label htmlFor="track1" onClick={onAddTrack}>Healthy lifestyle tips</label>
                </div>
                <div className="item">
                    <input type="radio" name="track" id="track2"></input>
                    <label htmlFor="track2" onClick={onAddTrack}>Seeing my body change</label>
                </div>
                <div className="item">
                    <input type="radio" name="track" id="track3"></input>
                    <label htmlFor="track3" onClick={onAddTrack}>Training progress</label>
                </div>
                <div className="item">
                    <input type="radio" name="track" id="track4"></input>
                    <label htmlFor="track4" onClick={onAddTrack}>Supportive community</label>
                </div>
                <div className="item">
                    <input type="radio" name="track" id="track5"></input>
                    <label htmlFor="track5" onClick={onAddTrack}>Coach's guidelines</label>
                </div>
                <div className="item">
                    <input type="radio" name="track" id="track6"></input>
                    <label htmlFor="track6" onClick={onAddTrack}>Coach's guidelines6</label>
                </div>
                <div className="item">
                    <input type="radio" name="track" id="track7"></input>
                    <label htmlFor="track7" onClick={onAddTrack}>Coach's guidelines7</label>
                </div>
                <div className="item">
                    <input type="radio" name="track" id="track8"></input>
                    <label htmlFor="track8" onClick={onAddTrack}>Coach's guidelines8</label>
                </div>
                <div className="item">
                    <input type="radio" name="track" id="track9"></input>
                    <label htmlFor="track9" onClick={onAddTrack}>Coach's guidelines9</label>
                </div>
            </div>
        </>
    );
}

export default TrackPage;
