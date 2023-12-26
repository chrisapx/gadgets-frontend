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
import Dropdown from "../../utils/DropDown";
import { BsArrow90DegDown, BsArrowDown, BsChevronBarDown, BsFillCompassFill } from "react-icons/bs";

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

    const pdctInfo = [
        { id: 1,key: 'Weight', value: '123 g'},
        { id: 2,key: 'Dimentions', value: '12 * 12* 4 mm'},
        { id: 3,key: 'Manufucturer', value: 'Dell'},
        { id: 4,key: 'RAM', value: '8GB'},
        { id: 5,key: 'Processor', value: '2.4GHz'},
        { id: 6,key: 'ROM', value: '500GB HDD'},
        { id: 7,key: 'Screen size', value: '17.2 in'},
        { id: 8,key: 'DRAM', value: '400MB'},
        { id: 9,key: 'Color', value: 'Silver'},
        { id: 10,key: 'State', value: 'Used'},
        { id: 11,key: 'Backlight', value: 'On'},
        { id: 12,key: 'Camera', value: '5 MP'},

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
                        <div style={{display: "flex", flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'rgb(231, 227, 227)', borderBottomStyle: 'solid'}}>
                            <p style={{color: 'black', fontSize: 12, paddingLeft: 8, fontWeight: '600', marginRight: 5}}>3.7</p>
                            <div onMouseOver={() => setSelect('star')} onMouseOut={() => setSelect('')}>
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

                        {/* Description section */}
                        <div style={{borderBottomWidth: 1, borderBottomColor: 'rgb(231, 227, 227)', borderBottomStyle: 'solid'}}>
                            <div style={{padding: 12, fontSize: 14, fontWeight: '600'}}>Description:</div>
                            <div style={{padding: 12, fontSize: 14}}> 
                                Unleash Inner Stunt Driver: Our RC Stunt Car is designed for kids who love adventure 
                                and excitement! It can tumble and flip at 360 degrees, and drive on both sides, which offers a 
                                thrilling and unique experience for children and even adults alike, with all-terrain performance, 
                                our remote control car can handle various terrains, including sand, lawn, stone road, and more, 
                                making it perfect for taking your stunts and races anywhere you want.
                                Long-Lasting Fun: Featuring with upgraded 1400mAh battery, our remote control car can provide up to 
                                90 minutes of non-stop action on a 
                                single charge, giving you plenty of time to perfect your stunts and wow your audience. So, 
                                grab your remote and get ready to push the limits with our long-lasting and exciting RC cars! </div>
                        </div>
                        {/* Additional details */}
                        <div>
                            <div style={{padding: 6, fontSize: 14, fontWeight: '600'}}>Additional details:</div>
                            <div style={{padding: 6, fontSize: 14, fontWeight: '400', color: 'green'}}>Verified by transparency</div>
                        </div>

                    </div>
                    {/* Actions and state */}
                    <div id="action-section" style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", borderWidth: 1, borderStyle: 'solid', borderColor: 'rgb(233, 223, 223)', padding: 16, borderRadius: 6, margin: 8, width: '80%'}}>
                            <div style={{fontSize: 14, }}>No featured offers available</div>
                            <div style={{fontSize: 14, color:'green'}} onClick={() => {}}>Learn more</div>
                        </div>

                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", borderWidth: 1, borderStyle: 'solid', borderColor: 'rgb(233, 223, 223)', padding: 16, borderRadius: 6, margin: 8, width: '80%'}}>
                            <div style={{fontSize: 14, color: 'red'}}>Available</div>
                            <div style={{fontSize: 14, color:'green', display: "flex", gap: 8, alignItems: "center", borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: 'rgb(233, 223, 243)', paddingBottom: 6, marginBlock: 8}}> 
                                <BsFillCompassFill color="grey"/> 
                                <div style={{color: select === 'delivery'? 'orange' : 'green', cursor: 'pointer', fontSize: 12}} onMouseOver={() => setSelect('delivery')} onMouseOut={() => setSelect('')}>Delivery to Mbale</div>
                            </div>
                            <div style={{color: 'white', cursor: "pointer", padding: 12, borderWidth: 1, borderStyle: 'solid', borderColor: select === 'acart' ? "orange" : 'rgb(233, 223, 243)', borderRadius: 6, marginBlock: 16, display: "flex", gap: 8, alignItems: "center", justifyContent: "center", backgroundColor: select === 'acart' ? 'red' : 'orange'}} onMouseOver={() => setSelect('acart')} onMouseOut={() => setSelect('')}>
                                Add to Cart
                            </div>
                        </div>
                    </div>


                </div>
                {/* Product info */}
                <div className="product-info-frame">
                    <div id="info-area">
                        <div id="product-info-header">Product information</div>
                            {pdctInfo.map((product, index) => (
                                <div id="info-table">
                                    <div style={{color: 'grey', height: 30}}>{product.key}</div>
                                    <div style={{color: 'black'}}>{product.value}</div>
                                
                                </div>
                            ))}
                    </div>
                    <div>

                    </div>
                </div>

                {/* Important information */}
                <div className="important-info">
                    <div style={{fontWeight: '700', fontSize: 22, color: 'black'}}>Important information</div>
                    <div id="product-report">
                        <div style={{color: 'black', fontSize: 14, paddingInline: 8}}>To report an issue with this product or seller, </div>
                        <div style={{color: 'blue', fontSize: 14,}}> Click here</div>
                    </div>

                </div>

                {/* What is in the box */}
                <div className="box-items-frame"> 
                    <div style={{fontWeight: '700', fontSize: 22, color: 'black'}}>What's in the Box</div>
                    <div>
                        <div></div>
                    </div>

                </div>

                {/* Product guides and documents */}
                <div className="guide-doc-frame"> 
                    <div style={{fontWeight: '700', fontSize: 22, color: 'black'}}>Product guides and documents</div>
                    <div>
                        <div></div>
                    </div>

                </div>
                
            </div>
            <Footer/>   
            <Signing/>         
        </div>
    )
}

export default DetailsPage;