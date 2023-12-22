import NavBarLower from "../navBar/NavBarLower";
import NavBarMiddle from "../navBar/NavBarMiddle";
import NavBarTop from "../navBar/NavBarTop";


const Header = () => {
    return(
        <div>
            <NavBarTop/>
            <NavBarMiddle/>
            <NavBarLower/>
        </div>
    )
}

export default Header;