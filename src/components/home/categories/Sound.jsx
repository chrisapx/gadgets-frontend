import { useState } from "react";
import { FaLeaf } from "react-icons/fa";



const Sound = () => {

    const [seeMoreHover, setSeeMoreHoover] = useState(false);

    return(
        <div style={{height: 400, width: 280, backgroundColor: 'white', padding: 16, marginTop: 40, marginLeft: 10, marginRight: 10, borderRadius: 10}} >
            <title>Speakers and sound</title>

            <div style={{color: 'black', fontWeight: '600', fontSize: 19, alignItems: "center", display: "flex", flexDirection: 'column', justifyContent: 'space-between'}}>Sound accessories</div> 
            
            <div style={{display: "flex", flexBasis: 'row', justifyContent: 'space-around', marginTop: 24}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', cursor: "pointer"}} onClick={() => alert("Clicked Mini speaksers")}>
                    <img src="src/assets/images/speaker-2.png" height={120}  style={{}}/> 
                    <div style={{color: 'black', fontSize: 14}}>Mini speakers</div>
                </div>
                {/* <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', cursor: "pointer"}} onClick={() => alert("Clicked gaming Keyboards")}>
                    <img src="src/assets/images/iphone-12-2.png" height={100}  style={{}}/> 
                    <div style={{color: 'black', fontSize: 14}}>Tecnos</div>
                </div> */}
            </div>

            <div style={{display: "flex", flexBasis: 'row', justifyContent: 'space-around', marginTop: 24}}>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', cursor: "pointer"}} onClick={() => alert("Clicked headsets")}>
                    <img src="src/assets/images/g-headsets.png" height={120}  style={{}}/> 
                    <div style={{color: 'black', fontSize: 14}}>Headsets</div> 
                </div> 
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', cursor: "pointer"}} onClick={() => alert("Clicked gaming Chairs")}>
                    <img src="src/assets/images/jbl-speaker.png" height={80}  style={{}}/>
                    <div style={{color: 'black', fontSize: 14}}>Bluetooth speakers</div>
                </div>            
            </div>
            <div style={{color: seeMoreHover? 'orange' : 'rgb(5, 121, 86)', fontWeight: '500', paddingInline: 16,  textDecoration: seeMoreHover? 'underline': 'unset', textDecorationColor: 'orange', fontSize: 12, cursor: "pointer", marginTop: 16, }} onMouseOver={() => setSeeMoreHoover(true)} onMouseOut={() => setSeeMoreHoover(false)} onClick={() => alert("Clicked see more sound accessories")}>See more deals</div>

        </div>
    )
}

export default Sound;