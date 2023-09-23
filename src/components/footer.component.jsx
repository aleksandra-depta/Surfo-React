import { Link } from "react-router-dom";

import Logo from "../img/logo.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">       
        <div className="footer__media"> 
          <Link to="/" className="footer__logo">
            <img className="footer__media--logo" alt="Surfo" src={`${Logo}`}/>
          </Link>
          <ul className="footer__media--links">
            <li>
              <Link to="https://www.instagram.com/" target="_blank"><div className="icon__social"><ion-icon size='large' name="logo-instagram"></ion-icon></div></Link>
            </li>
            <li>
              <Link to="https://www.facebook.com/" target="_blank"><div className="icon__social"><ion-icon size="large" name="logo-facebook"></ion-icon></div></Link>
            </li>
            <li>
              <Link to="https://www.twitter.com/" target="_blank"><div className="icon__social"><ion-icon size="large" name="logo-twitter"></ion-icon></div></Link>
            </li>
          </ul>
          <p className="footer__media--copyright text__description text__description--dark">
            Copyright &copy; <span className="year">2023</span> by Surfo,<br/> Aleksandra Depta <br/> Inc.
            All rights reserved. 
          </p>
        </div>
    
        <div className="footer__contact">
          <Link to="/contact" className="title__main title__main--dark">Contact us</Link>
          <p className="text__description text__description--dark">
            623 Amaizing St., 2nd Floor,<br/> San Francisco, CA 94105
          </p>
          <p >
            <Link to="tel:215-23331-6120" className="text__description text__description--dark">215-23331-6120</Link><br/>
            <Link to="mailto:arch.depta@gmail.com" className="text__description text__description--dark">hello@surfo.com</Link>
          </p>
        </div>

        <div className="footer__account footer__flex">
          <p className="title__main title__main--dark">Account</p>
          <ul className="footer__nav">
            <li><Link to="/login" className="text__description text__description--dark">Log in</Link></li>
            <li><Link to="/login" className="text__description text__description--dark">Sign up</Link></li>
            <li><Link to="" className="text__description text__description--dark">iOS app</Link></li>
            <li><Link to="" className="text__description text__description--dark">Android app</Link></li>
          </ul>
        </div>

        <div className="footer__company footer__flex">
          <p className="title__main title__main--dark">Company</p>
          <ul className="footer__nav">
            <li><Link to="" className="text__description text__description--dark">About Surfo</Link></li>
            <li><Link to="" className="text__description text__description--dark">How we work</Link></li>
            <li><Link to="" className="text__description text__description--dark">Our team</Link></li>
            <li><Link to="" className="text__description text__description--dark">Careers</Link></li>
          </ul>
        </div>

        <div className="footer__resources footer__flex">
          <p className="title__main title__main--dark">More</p>
          <ul className="footer__nav">
            <li><Link to="" className="text__description text__description--dark">For Business</Link></li>
            <li><Link to="" className="text__description text__description--dark">Partners</Link></li>
            <li><Link to="" className="text__description text__description--dark">Press</Link></li>
            <li><Link to="" className="text__description text__description--dark">Certificates</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;