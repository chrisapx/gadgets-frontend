import { useState } from "react"
import Footer from "../../components/footer/Footer"
import Signing from "../../components/footer/Signing"
import NavBarLower from "../../components/navBar/NavBarLower"
import NavBarMiddle from "../../components/navBar/NavBarMiddle"
import NavBarTop from "../../components/navBar/NavBarTop"
import './Listings.scss';
import StarRatings from "react-star-ratings"
import DummyItems from "../../utils/DummyItems"
import Recomended from "../../components/home/recommended/Recomended"
import { Link, useNavigate } from "react-router-dom"


const Listings = ( { type } ) => {

    const navigation = useNavigate();
    
    const [priceMoreHover, setPriceMoreHoover] = useState("");
    const [rating, setRating] = useState(2.8);
    const [isLoading, setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(30); // Set the number of items to display per page
    
    const items = DummyItems;
    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = items.length / itemsPerPage;
    
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

    const [isChecked, setIsChecked] = useState(false);
    const [checkedCategories, setCheckedCategories] = useState([]);
    const [checked, setChecked] = useState("");
  
    // const handleCheck = ( category ) => {
    //     if(checkedCategories.includes(category)){
    //         setChecked(category);
    //     };
        
    // }

    const handleChange = () => {
        setIsChecked(!isChecked);
        // if(checkedCategories.includes( item )){
        //     // checkedCategories.
        // }
    };

//     const [deps, setDepartments] = useState(initialDepartments);

//   const handleChange = (id) => {
//     const updatedDepartments = deps.map((dep) =>
//       dep.id === id ? { ...dep, selected: !dep.selected } : dep
//     );

//     setDepartments(updatedDepartments);

//     // Check if the checkbox is being unchecked, and remove the item
//     const uncheckedDepartment = updatedDepartments.find((dep) => dep.id === id && !dep.selected);
//     if (uncheckedDepartment) {
//       setDepartments((prevDepartments) => prevDepartments.filter((dep) => dep.id !== id));
//     }
//   };

    const departments = [
                { id: "1", name: "Baby Products", },
                { id: "2", name: "Beauty & Personal Care", },
                { id: "3", name: "Boys' Fashion", },
                { id: "4", name: "Camera & Photo", },
                { id: "5", name: "Cell Phones & Accessories", },
                { id: "6", name: "Clothing, Shoes & Jewelry", },
                { id: "7", name: "Electronics", },
                { id: "8", name: "Girls' Fashion", },
                { id: "9", name: "Health & Household", },
                { id: "10", name: "Home & Kitchen", },
                { id: "11", name: "Kitchen & Dining", },
                { id: "12", name: "Men's Clothing", },
                { id: "13", name: "Men's Fashion", },
                { id: "14", name: "Patio, Lawn & Garden", },
                { id: "15", name: "Pet Supplies", },
                { id: "16", name: "Toys & Games", },
                { id: "17", name: "Women's Clothing", },
                { id: "18", name: "Women's Fashion", },
                { id: "19", name: "Women's Shoes", },
    ]
    
    return(
        <div className="listings-frame">
            <div >
                <title>Listings</title>
                <NavBarTop/>
                <NavBarMiddle/>
                <NavBarLower/>
            </div>
            <div id="body-frame">
                {/* Filter section */}
                <div id="side-bar">
                    <div style={{paddingInline: 20, paddingBlock: 8, fontSize: 20, fontWeight: '700'}}>Departments</div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: "center", gap: 6, paddingBottom: 6, paddingLeft: 45, color: 'rgb(5, 121, 86)', fontWeight: '600'}}>Select all</div>
                    {departments.map((dep, index) => (
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: "center", gap: 6, paddingBottom: 6, paddingLeft: 20}}>
                        <input value = {dep.name} type = "checkbox" onChange = {handleChange} 
                            style={{
                                zIndex: 2,
                                appearance: 'none', // Remove default styles
                                width: '16px',
                                height: '16px',
                                border: '2px solid gray', // Gray border
                                borderRadius: '3px',
                                marginRight: '5px',
                                position: 'relative',
                                cursor: 'pointer',
                                outline: 'none', // Remove default outline
                            }}/>
                            <span style={{
                                            position: 'absolute',
                                            zIndex: 1,
                                            left: 26,
                                            display: isChecked ? 'block' : 'none',
                                        }}
                                        >
                                        ✔
                                        </span>
                        <div style={{fontSize: 14, fontWeight: '400'}}>{dep.name}</div>
                    </div>
                    ))}
                </div>
                {/* Listing section */}
                <div id="main-body"> 
                    
                    { currentItems.map((item, index) => (
                        <div id="grid-item" key={index} onClick={() => navigation('/details/'+item.id)} >
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
            {/* Pagination controls */}
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: 20, gap: 16}}>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} style={{cursor: "pointer"}}> Previous </button>
                <span style={{color: 'black'}}>{currentPage} / {totalPages}</span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentItems.length < itemsPerPage} style={{cursor: "pointer"}}> Next </button>
            </div>

            <div style={{width: '100%', height: '300px', overflow: 'hidden',}}>
                <img src={"src/assets/images/top-view-devices-supplies-composition.jpg"} alt="Cwift Ad" style={{width: '100%', objectFit: 'cover',}} onLoad={() => setIsLoading(false)} />
                {isLoading && <div style={{color: 'black'}}>Loading....</div>}
            </div>

            <div>
                <Recomended/>
            </div>
            <div>
                <Footer/>
                <Signing/>
            </div>
        </div>
    )
}

export default Listings;