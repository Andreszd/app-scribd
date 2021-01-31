import Logo from '../Logo'
import Button from '../Button'

import iconEmail from '../../assets/images/icon-email.svg' 
import iconSearch from '../../assets/images/icon-location.svg' 
import iconPhone from '../../assets/images/icon-phone.svg' 

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
                <input type="email" 
                className="form-footer__input" 
                placeholder="example: correo@correo.com"/>
                <Button text="Get Started Free" modifier={["color-cyan", "width-all"]}/>
            </form>
            <Logo/>
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
                <ul className="main-menu">
                    <li>About Us</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Blog</li>
                </ul> 
                <ul className="main-menu">
                    <li>Contact Us</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                </ul>
            </nav>
        </footer>
    )
}