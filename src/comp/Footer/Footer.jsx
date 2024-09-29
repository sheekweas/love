import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>"<span style={{color: 'red'}}>Love</span> is when the happiness of another person is more important than your own."</p>
      <p>Thank you for being in my life!</p>
      <p>Looking forward to creating beautiful memories <span style={{color: '#fd407f'}}>together</span>!</p>
      <p className="socials"><a href="https://instagram.com/shekweas"><FaInstagram/></a> <a href="https://t.me/shekweas"><FaTelegram/></a> <a href="https://wa.me/+77773121593"><FaWhatsapp/></a></p>
      <p style={{color: 'grey', fontSize: '14px'}}>Don't forget to write to me more often, here are my social networks</p>
      <p>&copy; {new Date().getFullYear()}. Shapagat</p>
    </div>
  );
};

export default Footer;
