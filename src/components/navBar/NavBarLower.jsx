import React, { useRef } from "react";
import './NavBarLower.scss'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const NavBarLower = () => {

    const brandsRef = useRef(null);
    const navigate = useNavigate();

    const scroll = (scrollOffset) => {
        if (brandsRef.current) {
            brandsRef.current.scrollLeft += scrollOffset;
        }
    };

    const handleBrandClick = (brand) => {
        // if(brand === "all"){
            navigate("la")
            alert("clicked " + brand)
        }


    return(
        <div className="brands-frame">

            {/* Left Scroll Arrow */}
            {/* <button className="scroll-arrow" onClick={() => scroll(-100)}>
            <BsChevronLeft />
            </button> */}

            <div className="brands" ref={brandsRef}>
                <div id="brand-item" onClick={() => handleBrandClick("all")} style={{cursor: 'pointer'}}>ALL</div>
                <div id="brand-item" onClick={() => handleBrandClick("samsung")} style={{cursor: 'pointer'}}>Samsung</div>
                <div id="brand-item" onClick={() => handleBrandClick("Huawei")} style={{cursor: 'pointer'}}>Huawei</div>
                <div id="brand-item" onClick={() => handleBrandClick("Techno")} style={{cursor: 'pointer'}}>Techno</div>
                <div id="brand-item" onClick={() => handleBrandClick("Apple")} style={{cursor: 'pointer'}}>Apple</div>
                <div id="brand-item" onClick={() => handleBrandClick("PLT")} style={{cursor: 'pointer'}}>PLT</div>
                <div id="brand-item" onClick={() => handleBrandClick("JBL")} style={{cursor: 'pointer'}}>JBL</div>
                <div id="brand-item" onClick={() => handleBrandClick("Philips")} style={{cursor: 'pointer'}}>Philips</div>
                <div id="brand-item" onClick={() => handleBrandClick("Sandisk")} style={{cursor: 'pointer'}}>Sandisk</div>
                <div id="brand-item" onClick={() => handleBrandClick("Infinix")} style={{cursor: 'pointer'}}>Infinix</div>
                <div id="brand-item" onClick={() => handleBrandClick("Tesla")} style={{cursor: 'pointer'}}>Tesla</div>
                <div id="brand-item" onClick={() => handleBrandClick("Ford")} style={{cursor: 'pointer'}}>Ford</div>
            </div>

            {/* Right Scroll Arrow */}
            {/* <button className="scroll-arrow" onClick={() => scroll(100)}>
                <BsChevronRight />
            </button> */}
        </div>

    )
}

export default NavBarLower;