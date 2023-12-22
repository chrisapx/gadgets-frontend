import React, { useState } from "react";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";

import { IoMenu } from "react-icons/io5";

import './NavBarMiddle.scss';

const NavBarMiddle = () => {
    const [searchInput, setSearchInput] = useState('');

    return (
        <div className="nav-body">
            {/* Company logo */}
            <div id="logo" onClick={() => alert("Clicked the logo")}>
                <img src="src/assets/logo.png" alt="Cwift logo" /> 
            </div>

            <div id="menu-icon" onClick={() => alert("Clicked menu icon")}>
                {/* icon here */}
                <IoMenu size={30} color="white" style={{backgroundColor: '#242424', borderRadius: 30, padding: 6, marginLeft: 24, marginRight: 8}}/>
            </div>

            {/* Search bar */}
            <div id="search">
                <div id="filter">
                    <p id="deals">Deals</p>
                    <IoMdArrowDropdown />
                </div>
                <input
                    id="search-input"
                    placeholder="Search Cwift Marketplace"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <div id="search-icon">
                    <IoIosSearch size={30} color="black" style={{}}/>
                </div>
            </div>

            <div >
                <div id="nav-item">
                    {/* Download app */}
                    <FaCloudDownloadAlt size={30}/>
                </div>
                <div id="nav-item">
                    {/* Delivery location */}
                    <FaFlagCheckered size={30}/>
                </div>

                <div id="nav-item">
                    {/* Account */}
                    <LuUser2 size={30}/>
                </div>

                <div id="nav-item"> 
                    {/* Cart */}
                    <LuShoppingCart size={30}/>
                </div>
            </div>
        </div>
    );
}

export default NavBarMiddle;
