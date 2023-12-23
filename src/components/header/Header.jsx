import AdBar from "../ad-section/AdBar";
import NavBarLower from "../navBar/NavBarLower";
import NavBarMiddle from "../navBar/NavBarMiddle";
import NavBarTop from "../navBar/NavBarTop";


const Header = () => {
    return(
        <div>
            <NavBarTop/>
            <NavBarMiddle/>
            <NavBarLower/>
            <AdBar/>
        </div>
    )
}

export default Header;