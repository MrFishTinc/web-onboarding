import React, { useContext } from 'react';

import Context from '../../Context';

import './Header.scss';

import Logo from "../../logo.png"

function Header() {

    const { handleBack, activeStep ,setActiveStep } = useContext(Context)

    const clickLogo = (e) =>{
        e.preventDefault();
        setActiveStep(0)    
    }

    return (

        <header className="header" >
            {activeStep !== 0 && (
                <span className="backBtn" onClick={handleBack}></span>
            )}
            <div className="logo" onClick={clickLogo}>                  
                <img src={Logo} alt="logo"/>
            </div>
        </header >

    );
}

export default Header;
