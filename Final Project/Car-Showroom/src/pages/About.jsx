import { Link } from "react-router-dom";
import "./About.css";

function About() {
    return (
        <div className="about-page">

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-content">
                    <h1>About Luxury Motors</h1>

                    <p>
                        Luxury Motors is committed to providing premium vehicles,
                        exceptional customer service, and an unforgettable car-buying
                        experience. From luxury sedans to powerful SUVs, we bring the
                        world's leading automobile brands together under one roof.
                    </p>

                    <Link to="/cars">
                        <button>Explore Cars</button>
                    </Link>
                </div>
            </section>

            {/* Statistics */}

            <section className="stats">

                <div className="stat-card">
                    <h2>10+</h2>
                    <p>Years Experience</p>
                </div>

                <div className="stat-card">
                    <h2>500+</h2>
                    <p>Cars Sold</p>
                </div>

                <div className="stat-card">
                    <h2>200+</h2>
                    <p>Happy Customers</p>
                </div>

                <div className="stat-card">
                    <h2>50+</h2>
                    <p>Premium Brands</p>
                </div>

            </section>

            {/* Mission & Vision */}

            <section className="mission">

                <div className="mission-card">
                    <h2>Our Mission</h2>

                    <p>
                        To make luxury and premium vehicles accessible through transparent
                        pricing, trusted service, and customer-first support.
                    </p>

                </div>

                <div className="mission-card">

                    <h2>Our Vision</h2>

                    <p>
                        To become the most trusted automobile showroom by delivering
                        quality vehicles and long-term customer relationships.
                    </p>

                </div>

            </section>

            {/* Why Choose Us */}

            <section className="why-us">

                <h2>Why Choose Us?</h2>

                <div className="why-grid">

                    <div className="why-box">
                        🚗
                        <h3>Premium Cars</h3>
                        <p>Latest luxury models from top global brands.</p>
                    </div>

                    <div className="why-box">
                        🛡️
                        <h3>Certified Vehicles</h3>
                        <p>Every vehicle is inspected for quality and safety.</p>
                    </div>

                    <div className="why-box">
                        💰
                        <h3>Affordable Finance</h3>
                        <p>Flexible EMI and finance options.</p>
                    </div>

                    <div className="why-box">
                        ⭐
                        <h3>Customer Support</h3>
                        <p>Dedicated support before and after purchase.</p>
                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="about-cta">

                <h2>Ready to Find Your Dream Car?</h2>

                <p>
                    Browse our collection and schedule a test drive today.
                </p>

                <Link to="/cars">
                    <button>View Cars</button>
                </Link>

            </section>

        </div>
    );
}

export default About;