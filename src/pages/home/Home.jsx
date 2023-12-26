import AdBar from "../../components/ad-section/AdBar";
import Footer from "../../components/footer/Footer"
import Signing from "../../components/footer/Signing";
import BsKitchenElectronics from "../../components/home/best-sellers/BsKitchenElectronics";
import DealUnder20k from "../../components/home/best-sellers/DealUnder20k";
import Gaming from "../../components/home/categories/Gaming";
import Phones from "../../components/home/categories/Phones";
import Sound from "../../components/home/categories/Sound";
import Pcs from "../../components/home/categories/pcs";
import Fitness from "../../components/home/new-arrivals/Fitness";
import HomeArrivals from "../../components/home/new-arrivals/HomeArrivals";
import Laptops from "../../components/home/new-arrivals/Laptops";
import NewDay from "../../components/home/new-arrivals/WholeNewDayToWork";
import Recomended from "../../components/home/recommended/Recomended";
import NavBarLower from "../../components/navBar/NavBarLower";
import NavBarMiddle from "../../components/navBar/NavBarMiddle";
import NavBarTop from "../../components/navBar/NavBarTop";
import './Home.scss'

const Home = () => {
    return(
        <div>
            {/* SEO section */}
            <title>Home</title>
                <NavBarTop/>
            <div style={{position: "sticky", top: 0}}>
                {/* Header */}
                <NavBarMiddle/>
                <NavBarLower/>
            </div>

            {/* Body section */}
            <div id="home-frame" >

                <AdBar/>
                {/* Categories */}
                <div id="home-items">
                    <Gaming/>
                    <Phones/>
                    <Pcs/>
                    <Sound/>
                </div>

                {/* New arrivals */}
                <div id="home-items">
                    <HomeArrivals/>
                    <NewDay/>
                    <Fitness/>
                    <Laptops/>
                </div>

                <div id="home-items">
                    {/* Best Sellers in kitchen */}
                    <BsKitchenElectronics/>
                </div>
                <div id="home-items">
                    {/* Deals under 20k */}
                    <DealUnder20k/>
                </div>
            </div>
            <div >
                <Recomended/>
            </div>
            <Footer/>
            <Signing/>
        </div>
    )
}

export default Home;