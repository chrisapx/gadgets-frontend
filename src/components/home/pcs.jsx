

import { useState } from "react";
import { FaLeaf } from "react-icons/fa";



const Pcs = () => {

    const [seeMoreHover, setSeeMoreHoover] = useState(false);

    return(
        <div style={{height: 400, width: 260, backgroundColor: 'white', padding: 16, marginTop: 40, marginLeft: 10, marginRight: 10}} >
            <title>Personal computers</title>

            <div style={{color: 'black', fontWeight: '600', fontSize: 19, alignItems: "center", display: "flex", flexDirection: 'column', justifyContent: 'space-between'}}>Deals in PCs</div> 
            
            <div style={{display: "flex", flexBasis: 'row', justifyContent: 'space-around', marginTop: 24, marginBottom: 82}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', cursor: "pointer"}} onClick={() => alert("Clicked gaming headsets")}>
                    <img src="src/assets/images/g-headsets.png" height={200}  style={{}}/>
                    <div style={{color: 'black', fontSize: 14}}>Computers</div>
                </div>
            </div>

            <div style={{color: seeMoreHover? 'orange' : 'grey', textDecoration: seeMoreHover? 'underline': 'unset', textDecorationColor: 'orange', fontSize: 12, cursor: "pointer", marginTop: 16, display: "flex", }} onMouseOver={() => setSeeMoreHoover(true)} onMouseOut={() => setSeeMoreHoover(false)} onClick={() => alert("Clicked shop now Pc accessories")}>Shop now</div>

        </div>
    )
}

export default Pcs;