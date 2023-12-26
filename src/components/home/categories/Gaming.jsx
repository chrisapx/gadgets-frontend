import { useState } from "react";

const Gaming = () => {

    const [seeMoreHover, setSeeMoreHoover] = useState(false);

    return(
        <div style={{height: 400, width: 280, backgroundColor: 'white', padding: 16, marginTop: 40, marginLeft: 10, marginRight: 10, borderRadius: 10}} >
            <title>details</title>

            <div style={{color: 'black', fontWeight: '600', fontSize: 19, alignItems: "center", display: "flex", flexDirection: 'column', justifyContent: 'space-between'}}>Gaming accessories</div> 
            
            <div style={{display: "flex", flexBasis: 'row', justifyContent: 'space-around', marginTop: 24}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', cursor: "pointer"}} onClick={() => alert("Clicked gaming headsets")}>
                    <img src="src/assets/images/g-headsets.png" height={100}  style={{}}/>
                    <div style={{color: 'black', fontSize: 14}}>Headsets</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', cursor: "pointer"}} onClick={() => alert("Clicked gaming Keyboards")}>
                    <img src="src/assets/images/g-keyboard.png" height={100}  style={{}}/> 
                    <div style={{color: 'black', fontSize: 14}}>Keyboards</div>
                </div>
            </div>

            <div style={{display: "flex", flexBasis: 'row', justifyContent: 'space-around', marginTop: 24}}>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', cursor: "pointer"}} onClick={() => alert("Clicked gaming Mice")}>
                    <img src="src/assets/images/g-mouse.png" height={120}  style={{}}/> 
                    <div style={{color: 'black', fontSize: 14}}>Computer mice</div> 
                </div> 
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', cursor: "pointer"}} onClick={() => alert("Clicked gaming Chairs")}>
                    <img src="src/assets/images/g-chairs.png" height={120}  style={{}}/> 
                    <div style={{color: 'black', fontSize: 14}}>Chairs</div>
                </div>            
            </div>
            <div style={{color: seeMoreHover? 'orange' : 'rgb(5, 121, 86)', fontWeight: '500', paddingInline: 16, paddingTop: 16, textDecoration: seeMoreHover? 'underline': 'unset', textDecorationColor: 'orange', fontSize: 12, cursor: "pointer", marginTop: 16, }} onMouseOver={() => setSeeMoreHoover(true)} onMouseOut={() => setSeeMoreHoover(false)} onClick={() => alert("Clicked see more gaming accessories")}>See more</div>

        </div>
    )
}

export default Gaming;