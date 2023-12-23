import { GiCash } from "react-icons/gi";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import './Footer.scss';

const Footer = () => {
    return(
        <div className="footer-frame">
            <div id="col-1">
                <div>
                    <p id="footer-item-header">NEED HELP</p>
                    <div id="footer-item">Chat with us</div>
                    <div id="footer-item">Help center</div>
                    <div id="footer-item">Contact Us</div>

                </div>

                <div>
                    <p id="footer-item-header">USERFUL LINKS</p>
                    <div id="footer-item">Place an order</div>
                    <div id="footer-item">Delivery</div>
                    <div id="footer-item">Delivery timelines</div>
                    <div id="footer-item">Report a product</div>
                    <div id="footer-item">Create a return</div>

                </div>
            </div>

            <div id="col-2">
                <div>
                    <p id="footer-item-header">GET TO KNOW US</p>
                    <div id="footer-item">Carriers</div>
                    <div id="footer-item">Blog</div>
                    <div id="footer-item">Investor Relations</div>
                    <div id="footer-item">Cwift Devices</div>
                    <div id="footer-item">Cwift science</div>

                </div>
                <div id="payment-cards">
                    <p id="footer-item-header">PAYMENT METHODS</p>
                    <div id="card-items">
                        <div><GiCash size={24}/></div>
                        <div><FaCcVisa size={24}/></div>
                        <div><FaCcMastercard size={24}/></div>
                        <div><GiCash size={24}/></div>
                        <div><FaCcVisa size={24}/></div>
                        <div><FaCcMastercard size={24}/></div>
                    </div>

                </div>
            </div>

            <div id="col-3">
                <p id="footer-item-header">ABOUT CWIFT MARKETPLACE</p>
                <div id="footer-item">About us</div>
                <div id="footer-item">Cwift carriers</div>
                <div id="footer-item">Terms and conditions</div>
                <div id="footer-item">Dispute resolution policy</div>
                <div id="footer-item">Privacy policy notice</div>
                <div id="footer-item">Cookie policy</div>
                <div id="footer-item">Return & refund policy</div>
                <div id="footer-item">Flash sales</div>
                <div id="footer-item">IPR protection policy</div>
                <div id="footer-item">Store and credit terms and conditions</div>

            </div>

            <div id="col-4">
                <p id="footer-item-header">MAKE MINEY WITH US</p>
                <div id="footer-item">Sell on Cwift</div>
                <div id="footer-item">Become an affliate</div>
                <div id="footer-item">Become a delivery agent</div>
                <div id="footer-item">Become a logistics partner</div>
                <div id="footer-item">Vendor console</div>
                <div id="footer-item">Delivery console</div>
                <div id="footer-item">Affliate console</div>
                <div id="footer-item">Offer Model Advice</div>
            </div>

            
        </div>
    )
}

export default Footer;