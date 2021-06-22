import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const services = [
        {name: "About us" , link: "/transformation"},
        {name: "Our facilities" , link: "/manageGarden"},
        {name: "Our teams" , link: "/buyPlants"},
        {name: "Our payment systems" , link: "/seedsFertilizer"},
        {name: "Our branches" , link: "/branches"}
    ]
    const ourAddress = [
        {name: "Collage Gate, Tongi, Gazipur" , link: "/google.com/map"},
        {name: "Dhaka, Bangladesh" , link: "/google.com/map"},
    ]
    const socialMedia = [
    ]

    return (
        <footer className="footer-area clear-both">
            <div className="container">
                <div className="ml-5 row py-3">
                    <FooterCol key={1} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={2} menuTitle="Our Address" menuItems={ourAddress} /> 
                    <FooterCol key={3} menuTitle="Stay Connected" menuItems={socialMedia}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//twitter.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-3">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+880123456789</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;