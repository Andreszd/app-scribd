import Logo from '../Logo'

import iconEmail from '../../assets/images/icon-email.svg' 
import iconSearch from '../../assets/images/icon-location.svg' 
import iconPhone from '../../assets/images/icon-phone.svg' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './style.scss'

export default function Footer(){
    return (
        <footer className="footer">
            <form action="" className="form-footer">
                <h2 className="form-footer__title">
                    Get early access today
                </h2>
                <p className="form-footer__text">
                    It only takes a minute to sign up and our free starter tier is extremely generous. If you have any question our support team would be happy to help you
                </p>
                <div className="form-footer__input-fields">
                    <input type="email" 
                    className="form-footer__input" 
                    placeholder="example: correo@correo.com"/>
                    <input type="submit" value="Get Started For Free" className="button button--color-cyan form-footer__submit"/>
                </div>
            </form>
            <Logo/>
            <div className="footer-info-container">
            <section className="footer-info">
                <ul className="footer-info__list">
                    <li className="footer-info__item">
                        <img src={iconSearch} alt="" className="footer-info__img"/>
                        <p className="footer-info__text">Lorem ipsum . Accusantium obcaecati itaque quibusdam sit nihil laudantium quia ipsam dignissimos soluta.</p>
                    </li>
                    <li className="footer-info__item">
                        <img src={iconPhone} alt="" className="footer-info__img"/>
                        <p className="footer-info__text">+1-543-123-4567</p>
                    </li>
                    <li className="footer-info__item">
                        <img src={iconEmail} alt="" className="footer-info__img"/>
                        <p className="footer-info__text">example@correo.com</p>
                    </li>
                </ul>
            </section>
            <nav className="footer-nav">
                <ul className="footer-menu">
                    <li className="footer-menu__item">About Us</li>
                    <li className="footer-menu__item">Jobs</li>
                    <li className="footer-menu__item">Press</li>
                    <li className="footer-menu__item">Blog</li>
                </ul> 
                <ul className="footer-menu">
                    <li className="footer-menu__item">Contact Us</li>
                    <li className="footer-menu__item">Terms</li>
                    <li className="footer-menu__item">Privacy</li>
                </ul>
            </nav>
            <div className="social-icons">
                <span className="social-icons__icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                </span>
                <span className="social-icons__icon">
                    <FontAwesomeIcon icon={faInstagram }/>
                </span>
                <span className="social-icons__icon">
                    <FontAwesomeIcon icon={faTwitter } />
                </span>
            </div>
            </div>
        </footer>
    )
}