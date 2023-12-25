import { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const BsKitchenElectronics = () => {

    const BsKitchen = [
        { url : 'src/assets/images/g-chairs.png'},
        { url : 'src/assets/images/g-headsets.png'},
        { url : 'src/assets/images/g-keyboard.png'},
        { url : 'src/assets/images/g-mouse.png'},
        { url : 'src/assets/images/iphone-12-2.png'},
        { url : 'src/assets/images/iphone-12-3.png'},
        { url : 'src/assets/images/iphone-12-2.png'},
        { url : 'src/assets/images/iphone-12.png'},
        { url : 'src/assets/images/laptops.png'},
        { url : 'src/assets/images/smart-watch.png'},
        { url : 'src/assets/images/speaker-2.png'},
        { url : 'src/assets/images/g-headsets.png'},
        
    ]

    const handleItemClick = ( item ) => {
        // <Link to={'/about'}/>
        alert('Clicked ' + item)
    }
    return(
        <div style={{backgroundColor: 'white', height: 280, color: 'black', width: 1280, borderRadius: 10, paddingInline: 16, paddingTop: 8, marginTop: 20}}>
            <div>
                <div style={{fontWeight: '600', fontSize: 22}}>Best sellers in kitchen electronics</div>
                <div style={{ display: "flex", flexDirection: 'row'}}>
                    {/* Left chevrolet */}
                    <div style={{backgroundColor: 'white', elevation: 5, display: "flex", alignItems: 'center', cursor: 'pointer' }} onClick={() => alert('Not available, use the scroll')}>
                        <BsChevronLeft size={30}/>
                    </div>
                    {/* Listings section */}
                    <div style={{display: "flex", flexDirection: "row", overflowX: "auto"}}>
                        {BsKitchen.map((img, index) => (
                            <div style={{height: 200, cursor: 'pointer'}} onClick={() => handleItemClick(img.url)}>
                                    <img src={img.url} height={'80%'}/>                                
                            </div>
                        ))}
                    </div >
                    {/* Right chevrolet */}
                    <div style={{backgroundColor: 'white', elevation: 5, display: "flex", alignItems: 'center', cursor: "pointer"}} onClick={() => alert('Not available, use the scroll')}> 
                        <BsChevronRight size={30}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BsKitchenElectronics;