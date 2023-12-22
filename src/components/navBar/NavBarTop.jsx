import { useState } from 'react';
import './NavBarTop.css'

const NavBarTop = () => {

    const [orderContact, setOrderContact] = useState('758085749');
    return(
        <div className="bar-frame">
            <p id='contact-word'>Need help placing an order? </p>
            <p id='contact'>+256{orderContact}</p>
        </div>
    )
}

export default NavBarTop;