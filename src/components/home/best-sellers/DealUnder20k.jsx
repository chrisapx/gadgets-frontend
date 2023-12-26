import { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './Dealsunder20k.scss'

const DealUnder20k = () => {

    const containerRef = useRef(null);
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
        { url : 'src/assets/images/g-mouse.png', name: 'Gamers Mouse'},
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

    const [seeMoreHover, setSeeMoreHoover] = useState(false);

    return(
        <div style={{backgroundColor: 'white', height: 300, color: 'black', width: 1280, borderRadius: 10, paddingInline: 16, paddingTop: 8, marginTop: 20}}>
            <div>

                {/* Heading */}
                <div style={{display: "flex", alignItems: "center"}}>
                    <div style={{fontWeight: '600', fontSize: 22}}>Deals under UGX 20,000</div>
                    <div style={{color: seeMoreHover? 'orange' : 'rgb(5, 121, 86)', fontWeight: '500', paddingInline: 16,  textDecoration: seeMoreHover? 'underline': 'unset', textDecorationColor: 'orange', fontSize: 12, cursor: "pointer", }} onMouseOver={() => setSeeMoreHoover(true)} onMouseOut={() => setSeeMoreHoover(false)} onClick={() => alert("Clicked see more sound accessories")}>See more deals</div>
                </div>

                <div style={{ display: "flex", flexDirection: 'row'}}>
                    {/* Left chevrolet */}
                    <div style={{backgroundColor: 'white', display: "flex", alignItems: 'center', cursor: 'pointer' }} onClick={scrollLeft}>
                        <BsChevronLeft size={30}/>
                    </div>
                    {/* Listings section */}
                    <div className="h-list" >
                        {BsKitchen.map((img, index) => (
                            <div style={{}} onClick={() => alert('clicked ' + img.url)}>
                                {/* <img src={img.url} height={'80%'}/> */}
                                <div style={{height: 170, cursor: "pointer", }}>
                                    {/* <img src={'src/assets/images/iphone-12-2.png'} height={'80%'} style={{objectFit: 'cover'}}/> */}
                                    <img src={img.url} height={'80%'} style={{objectFit: 'cover'}}/>
                                </div>
                                
                                <div style={{width: 200}}>
                                    <div style={{display: 'flex', flexDirection: 'row', gap: 6, alignItems: 'center'}}>
                                        <div style={{color: 'white', fontSize: 12, fontWeight: '500', backgroundColor: '#C83F49', padding: 4, borderRadius: 4}}>26% off</div>
                                        <div style={{color: '#C83F49', fontSizse: 8, fontWeight: '600', }}>Deal</div>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', gap: 6, alignItems: "center"}}>
                                        <div style={{color: 'black', fontSize: 15, fontWeight: '600'}}>UGX 233,700</div>
                                        {/* <div style={{color: 'grey', fontSize: 10, fontWeight: '500'}}>List price: </div> */}
                                        <div style={{textDecoration: 'line-through', color: 'grey', fontSize: 12, fontWeight: '500'}}>UGX 275,000</div>
                                    </div>
                                    <div style={{fontWeight: '400'}}> 
                                        {trimSent(img.name, 20)}
                                        {/* {img.name} */}
                                    </div>
                                </div>
                                    
                            </div>
                        ))} 
                    </div >
                    {/* Right chevrolet */}
                    <div style={{backgroundColor: 'white', display: "flex", alignItems: 'center', cursor: "pointer"}} onClick={scrollRight}> 
                        <BsChevronRight size={30}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DealUnder20k;