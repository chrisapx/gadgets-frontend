import Footer from "../../components/footer/Footer"
import Signing from "../../components/footer/Signing";
import Header from "../../components/header/Header"
import Gaming from "../../components/home/Gaming";
import Phones from "../../components/home/Phones";
import Sound from "../../components/home/Sound";
import Pcs from "../../components/home/pcs";
import './Home.scss'

const Home = () => {
    return(
        <div>
            {/* SEO section */}
            <title>Home</title>

            {/* Header */}
            <Header showAds={false}/>

            {/* Body section */}
            <div id="home-frame" >
                <div id="home-items">
                    <Gaming/>
                    <Phones/>
                    <Pcs/>
                    <Sound/>
                </div>
            </div>
            <Footer/>
            <Signing/>
        </div>
    )
}

export default Home;