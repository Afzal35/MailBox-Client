import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="text-center">
                    <h3>Mail - Box</h3>
                    <p> Contact Us.</p>
                </div>
                <div className="text-center">
                    <span><BsInstagram /></span>
                    <span><BsFacebook /></span>
                    <span><BsTwitter /></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;