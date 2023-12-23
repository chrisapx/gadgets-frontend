

import { useState } from 'react';
import './Signing.scss'

const Signing = () => {

    const [orderContact, setOrderContact] = useState('758085749');
    return(
        <div className="signing-frame">
            <div id='row-1'>
                <div id='signing-item'>Conditions of Use</div>
                <div id='signing-item'>Privacy note</div>
                <div id='signing-item'>Terms and conditions</div>
            </div>
            <div id='signing-item'>© 2023, Cwift.com, inc. or Its affliates</div>
        </div>
    )
}

export default Signing;