import React from 'react'
import FooterStyles from './css/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck, faLocationDot, faMobileScreenButton} from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/images/footerPay/visa.png'
import img2 from '../assets/images/footerPay/discover.png'
import img3 from '../assets/images/footerPay/master_card.png'
import img4 from '../assets/images/footerPay/paypal.png'
import img5 from '../assets/images/footerPay/amarican_express.png'
import {faFacebookF, faGooglePlusG, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer>
            <div>
                <div className={FooterStyles.containerLinks} >
                    <div className={FooterStyles.links}>
                        <div className={FooterStyles.linksone}>
                            <h2>Contact Info</h2>
                            <div><FontAwesomeIcon icon={faLocationDot} />  123 Street, Old Trafford, NewYork, USA</div>
                            <div><FontAwesomeIcon icon={faEnvelopeCircleCheck} />  info@sitename.com</div>
                            <div><FontAwesomeIcon icon={faMobileScreenButton} />  + 457 789 789 65</div>
                            <div className={FooterStyles.social} >
                            
                            <FontAwesomeIcon className={FooterStyles.social1}  icon={faFacebookF} />
                            <FontAwesomeIcon className={FooterStyles.social2}  icon={faTwitter} />
                            <FontAwesomeIcon className={FooterStyles.social3}  icon={faGooglePlusG} />
                            <FontAwesomeIcon className={FooterStyles.social4}  icon={faYoutube} />
                            <FontAwesomeIcon className={FooterStyles.social5}  icon={faInstagram} />
                            </div>
                        </div>
                    </div>
                    <div className={FooterStyles.links}>
                        <ul>
                        <h2>Useful Links</h2>
                            <li>About Us</li>
                            <li>FAQ</li>
                            <li>Location</li>
                            <li>Affiliates</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className={FooterStyles.links}>
                        <ul>
                            <h2>My Account</h2>
                            <li>My Account</li>
                            <li>Discount</li>
                            <li>Returns</li>
                            <li>Orders History</li>
                            <li>Order Tracking</li>
                        </ul>
                    </div>
                    <div className={FooterStyles.links}>
                        <h2>Subscribe Our Newsletter</h2>
                        <p>If you want to get an email from us every time we have a new special offer, then sign up here!</p>
                        <div className={FooterStyles.linksInput} >
                            <input placeholder='Enter Email Address' />
                            <FontAwesomeIcon className={FooterStyles.icon} icon={faEnvelopeCircleCheck}/>
                        </div>
                    </div>
                </div>
            </div>
            <div  className={FooterStyles.line}></div>
            <div className={FooterStyles.bottomFooter} >
                <div className={FooterStyles.container} >
                    <p>© 2023 All Rights Reserved by Abdelrahman Amin</p>
                    <div>
                        <img src={img1} alt='payment'/>
                        <img src={img2} alt='payment'/>
                        <img src={img3} alt='payment'/>
                        <img src={img4} alt='payment'/>
                        <img src={img5} alt='payment'/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
