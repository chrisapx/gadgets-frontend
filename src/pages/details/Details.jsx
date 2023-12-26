import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Signing from "../../components/footer/Signing";
import Header from "../../components/header/Header";
import './Details.scss';
import NavBarTop from "../../components/navBar/NavBarTop";
import NavBarMiddle from "../../components/navBar/NavBarMiddle";
import NavBarLower from "../../components/navBar/NavBarLower";
import StarRatings from "react-star-ratings";
import { useState } from "react";

const DetailsPage = () => {

    const { id } = useParams();
    const [select, setSelect] = useState('');

    const imgList = [
        { url: 'src/assets/images/g-headsets.png' },
        { url : 'src/assets/images/g-keyboard.png' },
        { url: 'src/assets/images/g-mouse.png' },
        { url: 'src/assets/images/iphone-12.png' },
        { url: 'src/assets/images/iphone-12-3.png' },
        { url: 'src/assets/images/iphone-12-2.png' },
    ]

    return(
        <div className="details-frame">
            <title>{"Details of item id " + id}</title>
            <div>
                <NavBarTop />
                <NavBarMiddle />
                <NavBarLower />
            </div>
            <div className="details-body">
                {/* Item dir */}
                <div id="item-dir">{"Electronics > Computers & phones > Laptops"}</div>
                
                {/* Item details section 1*/}
                <div className="details-sec-1">
                    {/* Side image list */}
                    <div id="side-img-list">
                        { imgList.map((img, index) => (
                        <div id="side-img">
                            <img src={img.url} alt="item img" width={'100%'}/>
                        </div>))}
                    </div>
                    {/* Full image */}
                    <div id="image-section">
                        <div id="main-img">
                            <img src="src/assets/images/laptops.png" height={'100%'}/>
                        </div>
                    </div>
                    {/* Headers */}
                    <div id="name-section"> 
                        
                        {/* Item name */}
                        <div id="item-name">
                                Remote Control Car Stunt RC Cars, 90 Min Playtime, 2.4Ghz Double Sided 360° Rotating 
                                RC Crawler with Headlights, 4WD Off Road Drift RC Race Car Toy for Boys and Girls Aged 6-12 Blue
                        </div>
                        <div style={{fontSize: 16, color: 'rgb(5, 121, 106)'}}>Visit Store</div>
                        <div style={{display: "flex", flexDirection: 'row', alignItems: 'center'}}>
                            <p style={{color: 'black', fontSize: 12, paddingLeft: 8, fontWeight: '600', marginRight: 5}}>3.7</p>
                            <div onMouseOver={() => setSelect('rating')}>
                                <StarRatings
                                        rating={3.7} // Initial rating
                                        starRatedColor="orange" // Color of selected stars
                                        // changeRating={(newRating) => setRating(newRating)} // Update the rating directly
                                        numberOfStars={6} // Total number of stars
                                        name='rating' // Name of the rating input (required for accessibility)
                                        starDimension="15px" // Size of the stars
                                        starSpacing="1px" // Spacing between stars
                                    />
                            </div>
                            <div style={{color: select === 'rating'? 'orange' : 'rgb(5, 121, 106)' , textDecoration: select === 'rating' && 'underline', fontSize: 12, paddingLeft: 8, fontWeight: '600', cursor: 'pointer'}} onMouseOver={() => setSelect('rating')} onMouseOut={() => setSelect('')}>234 ratings</div>
                            <div style={{color: 'black', fontSize: 8, paddingLeft: 10, }}> | </div>
                            <div style={{color: select === 'questions'? 'orange' : 'rgb(5, 121, 106)', textDecoration: select === 'questions' && 'underline', fontSize: 12, paddingLeft: 8, fontWeight: '600', cursor: 'pointer'}} onMouseOver={() => setSelect('questions')} onMouseOut={() => setSelect('')}> 23 answered questions</div>
                        </div>
                    </div>
                    {/* Actions and state */}
                    <div id="action-section">
                        This is the actions section section fgfgdfghd ghhfdghdfhd hdf gdgdfgdfgfg gdfgdfgfgfg
                    </div>

                </div>
                
            </div>
            <Footer/>   
            <Signing/>         
        </div>
    )
}

export default DetailsPage;