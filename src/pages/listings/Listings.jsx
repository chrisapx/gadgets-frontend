import { useState } from "react"
import Footer from "../../components/footer/Footer"
import Signing from "../../components/footer/Signing"
import NavBarLower from "../../components/navBar/NavBarLower"
import NavBarMiddle from "../../components/navBar/NavBarMiddle"
import NavBarTop from "../../components/navBar/NavBarTop"
import './Listings.scss';
import StarRatings from "react-star-ratings"


const Listings = ( { type } ) => {

    const [priceMoreHover, setPriceMoreHoover] = useState("");
    const [rating, setRating] = useState(2.8);


    const items = [
        { name: "Men's, Women's, and Kids' Clothing from Amazon Brands u", discount: 23, img: "src/assets/images/g-headsets.png" },
        { name: "Intel 12th and 13th Gen Processors", discount: 43, img: "src/assets/images/g-mouse.png" },
        { name: "Honey Can Do Home and Storage Solution Products", discount: 57, img: "src/assets/images/laptops.png" },
        { name: "ASUS TUF Gaming VG279QM 27” HDR Monitor, 1080P Full HD (1920 x 1080),", discount: 12, img: "src/assets/images/jbl-speaker.png"},
        { name: "iPhone 12” HDR Monitor, 1080P Full HD (1920 x 1080),", discount: 12, img: "src/assets/images/iphone-12.png"},
        { name: "Men's, Women's, and Kids' Clothing from Amazon Brands", discount: 23, img: "src/assets/images/g-headsets.png" },
        { name: "Intel 12th and 13th Gen Processors", discount: 43, img: "src/assets/images/g-mouse.png" },
        { name: "Honey Can Do Home and Storage Solution Products", discount: 57, img: "src/assets/images/laptops.png" },
        { name: "ASUS TUF Gaming VG279QM 27” HDR Monitor, 1080P Full HD (1920 x 1080),", discount: 12, img: "src/assets/images/jbl-speaker.png"},
        { name: "iPhone 12” HDR Monitor, 1080P Full HD (1920 x 1080),", discount: 12, img: "src/assets/images/iphone-12.png"},

        { name: "Intel 12th and 13th Gen Processors", discount: 43, img: "src/assets/images/g-mouse.png" },
        { name: "Men's, Women's, and Kids' Clothing from Amazon Brands", discount: 23, img: "src/assets/images/g-headsets.png" },
        { name: "iPhone 12” HDR Monitor, 1080P Full HD (1920 x 1080),", discount: 12, img: "src/assets/images/iphone-12.png"},
        { name: "ASUS TUF Gaming VG279QM 27” HDR Monitor, 1080P Full HD (1920 x 1080),", discount: 12, img: "src/assets/images/jbl-speaker.png"},
        { name: "Honey Can Do Home and Storage Solution Products", discount: 57, img: "src/assets/images/laptops.png" },
        { name: "ASUS TUF Gaming VG279QM 27” HDR Monitor, 1080P Full HD (1920 x 1080),", discount: 12, img: "src/assets/images/jbl-speaker.png"},

        { name: "Intel 12th and 13th Gen Processors g", discount: 43, img: "src/assets/images/g-mouse.png" },
        { name: "Honey Can Do Home and Storage Solution Products", discount: 57, img: "src/assets/images/laptops.png" },
        { name: "Men's, Women's, and Kids' Clothing from Amazon Brands", discount: 23, img: "src/assets/images/g-headsets.png" },
        { name: "iPhone 12” HDR Monitor, 1080P Full HD (1920 x 1080),", discount: 12, img: "src/assets/images/iphone-12.png"},
        { name: "Intel 12th and 13th Gen Processors", discount: 43, img: "src/assets/images/g-mouse.png" },

        { name: "Men's, Women's, and Kids' Clothing from Amazon Brands", discount: 23, img: "src/assets/images/g-headsets.png" },
        { name: "iPhone 12” HDR Monitor, 1080P Full HD (1920 x 1080),", discount: 12, img: "src/assets/images/iphone-12.png"},
        { name: "ASUS TUF Gaming VG279QM 27” HDR Monitor, 1080P Full HD (1920 x 1080),", discount: 12, img: "src/assets/images/jbl-speaker.png"},
        { name: "Honey Can Do Home and Storage Solution Products", discount: 57, img: "src/assets/images/laptops.png" },


    ]

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
                    
                    { items.map((item, index) => (
                    <div id="grid-item">
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
            <div>
                <Footer/>
                <Signing/>
            </div>
        </div>
    )
}

export default Listings;