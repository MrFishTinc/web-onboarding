import React, { useContext } from 'react';
import Context from '../../../Context';

import './SelectGenderPage.scss';

import ladyPicture from "../../../assets/img/lady.png"
import malePicture from "../../../assets/img/male.png"

const ladyStyle = {
    backgroundImage: 'url(' + ladyPicture + ')',
}
const maleStyle = {
    backgroundImage: 'url(' + malePicture + ')',
}


function SelectGenderPage(props) {

    const { changeStore } = useContext(Context)

    const onAddGender = (e) => {
        let text = e.target.getAttribute("for")
        changeStore(text)
    }

    return (
        <>
            <div className="genderSelect">
                <div className="item">
                    <input type="radio" name="sex" id="female" ></input>
                    <label htmlFor="female" onClick={onAddGender}></label>
                    <div className="pic" style={ladyStyle}></div>
                    <span className="txt">Female</span>
                </div >
                <div className="item">
                    <input type="radio" name="sex" id="male"></input>
                    <label htmlFor="male" onClick={onAddGender} ></label>
                    <div className="pic" style={maleStyle}></div>
                    <span className="txt">Male</span>
                </div>
            </div>

        </>
    );
}

export default SelectGenderPage;
