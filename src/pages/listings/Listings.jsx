import { useState } from "react"
import Footer from "../../components/footer/Footer"
import Signing from "../../components/footer/Signing"
import NavBarLower from "../../components/navBar/NavBarLower"
import NavBarMiddle from "../../components/navBar/NavBarMiddle"
import NavBarTop from "../../components/navBar/NavBarTop"
import './Listings.scss';
import StarRatings from "react-star-ratings"
import DummyItems from "../../utils/DummyItems"
import Recomended from "../../components/home/recommended/Recomended"
import { Link, useNavigate } from "react-router-dom"


const Listings = ( { type } ) => {

    const navigation = useNavigate();
    
    const [priceMoreHover, setPriceMoreHoover] = useState("");
    const [rating, setRating] = useState(2.8);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(30); // Set the number of items to display per page
    
    const items = DummyItems;
    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = items.length / itemsPerPage;
    
    function trimSent(inputString, maxCharacters) {
        
        if (inputString.length > maxCharacters) {
          return inputString.slice(0, maxCharacters) + '...';
        }
      
        return inputString;
    }

    function formatNumber( num ) {
        var formattedNumber = num.toLocaleString();
        return formattedNumber;
    }
    return(
        <div className="listings-frame">
            <div>
                <title>Listings</title>
                <NavBarTop/>
                <NavBarMiddle/>
                <NavBarLower/>
            </div>
            <div id="body-frame">
                {/* Filter section */}
                <div id="side-bar">
                    This is the side bar
                </div>
                {/* Listing section */}
                <div id="main-body"> 
                    
                    { currentItems.map((item, index) => (
                        <div id="grid-item" key={index} onClick={() => navigation('/details/'+item.id)} >
                        {/* Images area */}
                        <div className="g-image">
                            <img src={item.img} alt={item.name +" Image"} width={"100%"} />
                        </div>
                        {/* discount and Deals */}
                        <div style={{}}>
                            <div style={{display: 'flex', flexDirection: 'row', gap: 6, alignItems: 'center'}}>
                                <div style={{color: 'white', fontSize: 12, fontWeight: '500', backgroundColor: '#C83F49', padding: 4, borderRadius: 4}}>Up to {item.discount}% off</div>
                                <div style={{color: '#C83F49', fontSizse: 8, fontWeight: '600', }}>Deal</div>
                            </div>
                            <div style={{fontWeight: '400', color: priceMoreHover === item.name? 'orange' : 'rgb(5, 121, 86)', cursor: 'pointer'}} onMouseOver={() => setPriceMoreHoover(item.name)} onMouseOut={() => setPriceMoreHoover("")} onClick={() => alert('Clicked ' + item.name)}> 
                                {trimSent(item.name, 60)}
                            </div>
                            {/* <div style={{display: 'flex', flexDirection: 'column', }}>
                                <div style={{color: 'black', fontSize: 15, fontWeight: '600'}}>UGX {formatNumber(6752450)}</div>
                            </div> */}
                            <div style={{display: "flex", flexDirection: 'row', alignItems: 'center'}}>
                                <StarRatings
                                        rating={rating} // Initial rating
                                        starRatedColor="orange" // Color of selected stars
                                        // changeRating={(newRating) => setRating(newRating)} // Update the rating directly
                                        numberOfStars={6} // Total number of stars
                                        name='rating' // Name of the rating input (required for accessibility)
                                        starDimension="15px" // Size of the stars
                                        starSpacing="1px" // Spacing between stars
                                    />
                                <p style={{color: 'grey', fontSize: 12, paddingLeft: 8}}>(214)</p>
                            </div>
                                    
                        </div>
                    </div>))}


                </div>
            </div>
            {/* Pagination controls */}
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: 20, gap: 16}}>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} style={{cursor: "pointer"}}> Previous </button>
                <span style={{color: 'black'}}>{currentPage} / {totalPages}</span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentItems.length < itemsPerPage} style={{cursor: "pointer"}}> Next </button>
            </div>

            <div style={{width: '100%', height: '300px', overflow: 'hidden',}}>
                <img src={"src/assets/images/top-view-devices-supplies-composition.jpg"} alt="Cwift Ad" style={{width: '100%', objectFit: 'cover',}} />
            </div>

            <div>
                <Recomended/>
            </div>
            <div>
                <Footer/>
                <Signing/>
            </div>
        </div>
    )
}

export default Listings;