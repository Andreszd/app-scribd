import Logo from '../Logo'

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
                <input type="email" placeholder="example: correo@correo.com"/>
                <button>Get Started Free</button>
            </form>
            <Logo/>
            <section className="footer-info">
                <ul className="footer-info__list">
                    <li>
                        <img src="" alt="" className="footer-info__img"/>
                        <p className="footer-info__text"></p>
                    </li>
                    <li>
                        <img src="" alt="" className="footer-info__img"/>
                        <p className="footer-info__text"></p>
                    </li>
                    <li>
                        <img src="" alt="" className="footer-info__img"/>
                        <p className="footer-info__text"></p>
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