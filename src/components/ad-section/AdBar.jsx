import React, { useState } from 'react';
import './AdBar.scss'

const AdBar = ({ show }) => {

    return(
        <div className="adbar-frame" style={{visibility: show}}>
            {/* <p id='contact-word'>Need help placing an order? </p> */}
            {/* <p id='contact'>+256{orderContact}</p> */}
        </div>
    )
}

export default AdBar;