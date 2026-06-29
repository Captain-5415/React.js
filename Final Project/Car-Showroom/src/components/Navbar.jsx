import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useWishlist } from "../context/WishlistContext";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
    const { wishlist } = useWishlist();
    const { theme, toggleTheme } = useTheme();
    return (
        <header className="navbar">

            <Link to="/" className="logo">
                GCube Cars
            </Link>

            <nav className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cars">Cars</NavLink>
                <NavLink to="/brands">Brands</NavLink>
                <NavLink to="/compare">Compare</NavLink>
                <NavLink to="/faq">FAQ</NavLink>

                <NavLink to="/wishlist" className="wishlist-link">
                    Wishlist
                    <span className="wishlist-count">
                        {wishlist.length}
                    </span>
                </NavLink>

                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <button
                className="theme-btn"
                onClick={toggleTheme}
            >
                {theme === "light" ? "🌙" : "☀️"}
            </button>

        </header>
    );
}

export default Navbar;