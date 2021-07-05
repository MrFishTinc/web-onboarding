import React, { useContext } from 'react';

import Context from '../../../Context';

import './ZonePage.scss';

import maleZone1 from "../../../assets/img/male_zone1.png"
import maleZone2 from "../../../assets/img/male_zone2.png"
import maleZone3 from "../../../assets/img/male_zone3.png"

import famaleZone1 from "../../../assets/img/female_zone1.png"
import famaleZone2 from "../../../assets/img/female_zone2.png"
import famaleZone3 from "../../../assets/img/female_zone3.png"

const maleZoneStyle1 = {
    backgroundImage: 'url(' + maleZone1 + ')',
}
const maleZoneStyle2 = {
    backgroundImage: 'url(' + maleZone2 + ')',
}
const maleZoneStyle3 = {
    backgroundImage: 'url(' + maleZone3 + ')',
}


const femaleZoneStyle1 = {
    backgroundImage: 'url(' + famaleZone1 + ')',
}
const femaleZoneStyle2 = {
    backgroundImage: 'url(' + famaleZone2 + ')',
}
const femaleZoneStyle3 = {
    backgroundImage: 'url(' + famaleZone3 + ')',
}

let text = ""

function DietTypePage() {

    const { changeStore, store } = useContext(Context)

    const onAddZone = (e) => {
        text = e.target.textContent
        changeStore(text)
    }

    return (
        <>
            {store.gender === "male"
                ? (
                    <div className="zoneList">
                        <div className="item">
                            <input type="radio" name="zone" id="zonemale1"></input>
                            <label htmlFor="zonemale1" onClick={onAddZone} style={maleZoneStyle1}>Arms &#38; Back</label>
                        </div>
                        <div className="item">
                            <input type="radio" name="zone" id="zonemale2"></input>
                            <label htmlFor="zonemale2" onClick={onAddZone} style={maleZoneStyle2}>Abs &#38; Core</label>
                        </div>
                        <div className="item">
                            <input type="radio" name="zone" id="zonemale3"></input>
                            <label htmlFor="zonemale3" onClick={onAddZone} style={maleZoneStyle3}>Legs &#38; Glutes</label>
                        </div>
                    </div>
                )
                : (
                    <div className="zoneList">
                        <div className="item">
                            <input type="radio" name="zone" id="zonefemale1"></input>
                            <label htmlFor="zonefemale1" onClick={onAddZone} style={femaleZoneStyle1}>Arms &#38; Back</label>
                        </div>
                        <div className="item">
                            <input type="radio" name="zone" id="zonefemale2"></input>
                            <label htmlFor="zonefemale2" onClick={onAddZone} style={femaleZoneStyle2}>Abs &#38; Core</label>
                        </div>
                        <div className="item">
                            <input type="radio" name="zone" id="zonefemale3"></input>
                            <label htmlFor="zonefemale3" onClick={onAddZone} style={femaleZoneStyle3}>Legs &#38; Glutes</label>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default DietTypePage;
