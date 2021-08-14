import Logo from '../../img/logo.png'

export const FooterTop = () => {
    return <>
        <footer>
            <div className="footer-container">
                <address className="footer-address">
                    <div className="footer-logo">
                        <p className="footer-logo-name">maketall</p>
                        <img src={Logo} alt="логотип" width="60"/>
                        <p className="footer-logo-owner">Кунинець Михайло</p>
                    </div>
                    <ul className="footer-address-list">
                        <li><a href="tel:+0977550966">+38 097 755 09 66</a></li>
                        <li><a href="mailto:info@devstudio.com">projektmaket@gmail.com</a></li>
                    </ul>
                    <ul className="footer-address-list">
                        <li>м. Вишневе, вул. Залізнична 92</li>
                    </ul>
                </address>
            </div>
        </footer>
    </>
}