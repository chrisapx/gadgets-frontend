import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Signing from "../../components/footer/Signing";
import Header from "../../components/header/Header";
import './Details.scss';
import NavBarTop from "../../components/navBar/NavBarTop";
import NavBarMiddle from "../../components/navBar/NavBarMiddle";
import NavBarLower from "../../components/navBar/NavBarLower";
import StarRatings from "react-star-ratings";
import { useEffect, useState } from "react";
import { BsFillCompassFill } from "react-icons/bs";
import Recomended from "../../components/home/recommended/Recomended";

const DetailsPage = () => {

    const { id } = useParams();
    const [select, setSelect] = useState('');
    
    const imgList = [
        { url: '../src/assets/images/g-headsets.png' },
        { url : '../src/assets/images/g-keyboard.png' },
        { url: '../src/assets/images/g-mouse.png' },
        { url: '../src/assets/images/iphone-12.png' },
        { url: '../src/assets/images/iphone-12-3.png' },
        { url: '../src/assets/images/iphone-12-2.png' },
    ]

    const [clickedImage, setClickedImage] = useState(imgList[0].url);

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

    // useEffect(() => {
    //     setClickedImage(imgList[0])
    // }, [])

    return(
        <div className="details-frame">
            <title>{"Remote Control Car Stunt RC Cars, 90 Min Playtime, 2.4Ghz Double Sided 360° Rotating  RC Crawler with Headlights, 4WD Off Road Drift RC Race Car Toy for Boys and Girls Aged 6-12 Blue"}</title>
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
                        <div id="side-img" onClick={() => setClickedImage(img.url)} onMouseOver={() => setClickedImage(img.url)}>
                            <img src={img.url} alt="item img" width={'100%'}/>
                        </div>))}
                    </div>
                    {/* Full image */}
                    <div id="image-section">
                        <div id="main-img">
                            <img src={clickedImage} height={'100%'}/>
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
                            <div style={{padding: 6, fontSize: 14, fontWeight: '400', color: 'rgb(5, 121, 86)'}}>Verified by transparency</div>
                        </div>

                    </div>
                    {/* Actions and state */}
                    <div id="action-section" style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", borderWidth: 1, borderStyle: 'solid', borderColor: 'rgb(233, 223, 223)', padding: 16, borderRadius: 6, margin: 8, width: '80%'}}>
                            <div style={{fontSize: 14, }}>No featured offers available</div>
                            <div style={{fontSize: 14, color:'rgb(5, 121, 86)'}} onClick={() => {}}>Learn more</div>
                        </div>

                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", borderWidth: 1, borderStyle: 'solid', borderColor: 'rgb(233, 223, 223)', padding: 16, borderRadius: 6, margin: 8, width: '80%'}}>
                            <div style={{fontSize: 14, color: 'red'}}>Available</div>
                            <div style={{fontSize: 14, color:'rgb(5, 121, 86)', display: "flex", gap: 8, alignItems: "center", borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: 'rgb(233, 223, 243)', paddingBottom: 6, marginBlock: 8}}> 
                                <BsFillCompassFill color="grey"/> 
                                <div style={{color: select === 'delivery'? 'orange' : 'rgb(5, 121, 86)', cursor: 'pointer', fontSize: 12}} onMouseOver={() => setSelect('delivery')} onMouseOut={() => setSelect('')}>Delivery to Mbale</div>
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
                        <div style={{color: 'rgb(5, 121, 86)', fontSize: 14,}}> Click here</div>
                    </div>

                </div>

                {/* Related items */}
                <div className="related-frame">
                <div style={{fontWeight: '700', fontSize: 22, color: 'black'}}>Related Items</div>
                    <div style={{color: 'red', fontSize: 14, paddingInline: 8}}>Comming soon ...........</div>
                </div>

                {/* What is in the box */}
                <div className="box-items-frame"> 
                    <div style={{fontWeight: '700', fontSize: 22, color: 'black'}}>What's in the Box</div>
                    <div>
                        {pdctInfo.map((item, index) => (
                            <li style={{color: 'black'}} key={item.key}>{item.value}</li>
                        ))}
                    </div>

                </div>

                {/* Product guides and documents */}
                <div className="guide-doc-frame"> 
                    <div style={{fontWeight: '700', fontSize: 22, color: 'black'}}>Product guides and documents</div>
                    <div>
                        <a href="" style={{color: 'rgb(5, 121, 86)', fontSize: 14}}>Instructions of Use (UFU) (PDF)</a>
                    </div>

                </div>

                {/* Reviews and rating */}
                <div className="review-rate-frame"> 
                    <div>
                        <div style={{fontWeight: '600', fontSize: 20, color: 'black'}}>Customer reviews</div>
                        <div style={{display: "flex", alignItems:"center", paddingBottom: 20, paddingRight: 50 }}> 

                            <div style={{display: "flex", flexDirection: 'row', alignItems: 'center', }}>
                                <div onMouseOver={() => setSelect('star')} onMouseOut={() => setSelect('')}>
                                    <StarRatings
                                            rating={3.7} // Initial rating
                                            starRatedColor="orange" // Color of selected stars
                                            // changeRating={(newRating) => setRating(newRating)} // Update the rating directly
                                            numberOfStars={6} // Total number of stars
                                            name='rating' // Name of the rating input (required for accessibility)
                                            starDimension="16px" // Size of the stars
                                            starSpacing="1px" // Spacing between stars
                                        />
                                </div>
                                <div style={{color: 'black' , textDecoration: select === 'rating' && 'underline', fontSize: 14, paddingLeft: 8, fontWeight: '400', cursor: 'pointer', marginRight: 8}} onMouseOver={() => setSelect('rating')} onMouseOut={() => setSelect('')}>3.7 OUT OF 5</div>
                            </div>
                            <div style={{color: 'grey', fontSize: 14}}>452 Ratings</div>


                        </div>
                        <div style={{fontWeight: '600', fontSize: 20, color: 'black', paddingBlock: 16}}>Review this product</div>
                        <div style={{fontWeight: '400', fontSize: 14, color: 'black', }}>Share your thoughts with other customers</div>
                        <div style={{fontWeight: '400', fontSize: 12, color: 'black', borderRadius: 5, display: 'flex', justifyContent: "center", alignItems: "center", borderWidth: 1, borderStyle: 'solid', borderColor: 'grey', marginTop: 40, height: 30, marginInline: 30, cursor: 'pointer', }} >Write a Customer reviews</div>

                    </div>

                    <div>
                        <div style={{fontWeight: '600', fontSize: 20, color: 'black'}}>Review comments</div>

                    { pdctInfo.map((review, index) => (
                        <div style={{paddingBlock: 24}}>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 14}}>
                                <div style={{height: 30, width: 30, backgroundColor: 'grey', borderRadius: 30, display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <img src="../src/assets/images/g-mouse.png" height={'90%'} width={'90%'}/>
                                </div>
                                <div style={{color: 'black', fontSize: 14}}>Chris Mwesigwa</div>
                                <div style={{color: 'rgb(146, 41, 0)', fontSize: 14, fontWeight: '600'}}>Verified purchase</div>
                            </div>

                            <div>
                                <div style={{display: "flex", flexDirection: 'row', alignItems: 'center', }}>
                                    <div onMouseOver={() => setSelect('star')} onMouseOut={() => setSelect('')}>
                                        <StarRatings
                                                rating={3.7} // Initial rating
                                                starRatedColor="orange" // Color of selected stars
                                                // changeRating={(newRating) => setRating(newRating)} // Update the rating directly
                                                numberOfStars={6} // Total number of stars
                                                name='rating' // Name of the rating input (required for accessibility)
                                                starDimension="16px" // Size of the stars
                                                starSpacing="1px" // Spacing between stars
                                            />
                                    </div>
                                    <div style={{color: select === 'review-comm' ? 'orange' : 'black' , textDecoration: select === 'review-comm' && 'underline', fontSize: 14, paddingLeft: 8, fontWeight: '600', cursor: 'pointer'}} onMouseOver={() => setSelect('review-comm')} onMouseOut={() => setSelect('')}>Easy to get going, entertaining.</div>
                                </div>
                            </div>

                            <div style={{fontSize: 14, color: 'grey'}}>From Chris Mwesigwa on Tuesday 24th-Feb-2023</div>
                            <div style={{fontSize: 14, color: 'black'}}>Easy to get going and super entertaining.
                                                                        This is a blast to play with! My boys have loved it. 
                                                                        It seems really durable especially compared to other models we have had before. 
                                                                        It has been driven all around the house and the yard. 
                                                                        The battery life is surprisingly great. Would buy again.</div>
                            

                        </div>
                    ))}

                    </div>
                </div>
                
            </div>
            <Recomended/>
            <Footer/>   
            <Signing/>         
        </div>
    )
}

export default DetailsPage;