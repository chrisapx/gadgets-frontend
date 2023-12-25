import { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";

const Recomended = () => {

    const containerRef = useRef(null);
    const navigation = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleItemClick = (item) => {
        alert('Clicked ' + item.caption);
      };
    
      const scrollLeft = () => {
        if (containerRef.current) {
          const newPosition = scrollPosition - 200; // Adjust the value as needed
          setScrollPosition(Math.max(newPosition, 0));
          containerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
        }
      };
    
      const scrollRight = () => {
        if (containerRef.current) {
          const newPosition = scrollPosition + 200; // Adjust the value as needed
          setScrollPosition(newPosition);
          containerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
        }
      };

    const BsKitchen = [
        { url : 'src/assets/images/g-mouse.png', name: 'Gamers Mouse, Real game changer, Comes with a long connection wire used by lazer acient gamers'},
        { url : 'src/assets/images/g-keyboard.png', name: "Gamer's keyboard"},
        { url : 'src/assets/images/g-headsets.png', name: "Gamer's headsets"},
        { url : 'src/assets/images/iphone-12.png', name: "iPhone 12 | 64GB ROM"},
        { url : 'src/assets/images/iphone-12-2.png', name: "iPhone 12 | 128GB ROM"},
        { url : 'src/assets/images/laptops.png', name: "HP laptop | 4GB RAM"},
        { url : 'src/assets/images/g-headsets.png', name: "Gamer's headsets, 2nd Gen"},
        { url : 'src/assets/images/iphone-12-3.png', name: "iPhone 12 | 4BG RAM"},
        { url : 'src/assets/images/iphone-12-2.png', name: "iPhone 12, copy"},
        { url : 'src/assets/images/speaker-2.png', name: "JBL Speaker | JBL | 10th Gen"},
        { url : 'src/assets/images/g-chairs.png', name: "Gamer's chair"},
        { url : 'src/assets/images/smart-watch.png', name: "Apple watch | 2 series"},
        
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

    const [seeMoreHover, setSeeMoreHoover] = useState(false);
    const [priceMoreHover, setPriceMoreHoover] = useState("");
    const [rating, setRating] = useState(2.8);

    return(
        <div style={{ backgroundColor: 'white', color: 'black', paddingInline: 16, paddingTop: 8, borderWidth: 2, borderStyle: 'solid', borderColor: '#D3D3D3' }}>
        <div>

                {/* Heading */}
                <div style={{display: "flex", alignItems: "center"}}>
                    <div style={{fontWeight: '500', fontSize: 22}}>Recomended based on your browsing history</div>
                    <div style={{color: seeMoreHover? 'orange' : 'rgb(5, 121, 86)', fontWeight: '500', paddingInline: 16,  textDecoration: seeMoreHover? 'underline': 'unset', textDecorationColor: 'orange', fontSize: 12, cursor: "pointer", }} onMouseOver={() => setSeeMoreHoover(true)} onMouseOut={() => setSeeMoreHoover(false)} onClick={() => alert("Clicked see more sound accessories")}>See more deals</div>
                </div>

                <div style={{ display: "flex", flexDirection: 'row'}}>
                    {/* Left chevrolet */}
                    {/* <div style={{backgroundColor: 'white', display: "flex", alignItems: 'center', cursor: 'pointer' }} onClick={scrollLeft}>
                        <BsChevronLeft size={30}/>
                    </div> */}
                    {/* Listings section */}
                    <div className="h-list" style={{marginInline: 50, paddingBlock: 50}}>
                        {BsKitchen.map((img, index) => (
                            <div style={{width: 200, paddingInline: 8, paddingBlock: 16, borderWidth: 0, borderStyle: 'solid', borderColor: 'grey', marginBottom: 12, }} onClick={() => navigation('/about')}>
                                {/* <img src={img.url} height={'80%'}/> */}
                                <div style={{height: 170, cursor: "pointer", }}>
                                    {/* <img src={'src/assets/images/iphone-12-2.png'} height={'80%'} style={{objectFit: 'cover'}}/> */}
                                    <img src={img.url} height={'80%'} style={{objectFit: 'cover'}}/>
                                </div>
                                
                                <div style={{width: 200}}>
                                    <div style={{fontWeight: '400', color: priceMoreHover === img.name? 'orange' : 'rgb(5, 121, 86)', cursor: 'pointer'}} onMouseOver={() => setPriceMoreHoover(img.name)} onMouseOut={() => setPriceMoreHoover("")} onClick={() => alert('Clicked ' + img.name)}> 
                                        {img.name}
                                        {/* {trimSent(img.name, 20)} */}
                                        {/* {img.name} */}
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', gap: 6, alignItems: 'center'}}>
                                        <div style={{color: 'white', fontSize: 12, fontWeight: '500', backgroundColor: '#C83F49', padding: 4, borderRadius: 4}}>26% off</div>
                                        <div style={{color: '#C83F49', fontSizse: 8, fontWeight: '600', }}>Deal</div>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'column', }}>
                                        <div style={{color: 'black', fontSize: 15, fontWeight: '600'}}>UGX {formatNumber(6752450)}</div>
                                        <div style={{textDecoration: 'line-through', color: 'grey', fontSize: 12, fontWeight: '500'}}>UGX 275,000</div>
                                    </div>
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
                                    
                            </div>
                         ))} 
                    </div >
                    {/* Right chevrolet */}
                    {/* <div style={{backgroundColor: 'white', display: "flex", alignItems: 'center', cursor: "pointer"}} onClick={scrollRight}> 
                        <BsChevronRight size={30}/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Recomended;