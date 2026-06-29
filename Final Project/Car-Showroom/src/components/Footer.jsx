import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-box">
                    <h2>GCube Cars</h2>

                    <p>
                        Discover premium cars at the best prices.
                        Find your dream car today.
                    </p>
                </div>

                <div className="footer-box">

                    <h3>Quick Links</h3>

                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/cars">Cars</NavLink></li>
                        <li><NavLink to="/brands">Brands</NavLink></li>
                        <li><NavLink to="/compare">Compare</NavLink></li>
                    </ul>

                </div>

                <div className="footer-box">

                    <h3>Contact</h3>

                    <p>Vijayawada</p>
                    <p>+91 9052520552</p>
                    <p>support@gcube.com</p>

                </div>

            </div>

            <hr />

            <p className="copyright">
                © 2026 GCubeCars. All Rights Reserved.
            </p>

        </footer>
    );
}

export default Footer;