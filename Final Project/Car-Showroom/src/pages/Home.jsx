import { Link } from "react-router-dom";
import "./Home.css";

import bmw from "../assets/images/bmw.jpg";
import audi from "../assets/images/audi.jpg";
import mercedes from "../assets/images/mercedes.jpg";

function Home() {
    return (
        <>
            <section className="hero">

                <div className="hero-content">

                    <h1>Drive Your Dream Car Today</h1>

                    <p>
                        Explore premium cars from the world's top brands.
                        Find the perfect car that matches your style and budget.
                    </p>

                    <div className="hero-buttons">

                        <Link to="/cars" className="primary-btn">
                            Explore Cars
                        </Link>

                        <Link to="/book-test-drive" className="secondary-btn">
                            Book Test Drive
                        </Link>

                    </div>

                </div>

            </section>

            <section className="featured">

                <h2>Featured Cars</h2>

                <div className="featured-grid">

                    <div className="featured-card">

                        <img src={bmw} alt="BMW X5" />

                        <div className="featured-content">

                            <h3>BMW X5</h3>

                            <p>
                                Luxury SUV with premium comfort, advanced technology and powerful performance.
                            </p>

                            <span>₹78,00,000</span>

                            <Link to="/cars/1" className="details-btn">
                                View Details
                            </Link>

                        </div>

                    </div>

                    <div className="featured-card">

                        <img src={audi} alt="Audi Q5" />

                        <div className="featured-content">

                            <h3>Audi Q5</h3>

                            <p>
                                Stylish SUV featuring elegant design, premium interiors and cutting-edge features.
                            </p>

                            <span>₹72,00,000</span>

                            <Link to="/cars/2" className="details-btn">
                                View Details
                            </Link>

                        </div>

                    </div>

                    <div className="featured-card">

                        <img src={mercedes} alt="Mercedes C-Class" />

                        <div className="featured-content">

                            <h3>Mercedes C-Class</h3>

                            <p>
                                Experience exceptional luxury, comfort and performance with the latest C-Class.
                            </p>

                            <span>₹65,00,000</span>

                            <Link to="/cars/3" className="details-btn">
                                View Details
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            <section className="brands">

                <h2>Popular Brands</h2>

                <div className="brand-grid">

                    <Link to="/cars?brand=BMW" className="brand-card">
                        BMW
                    </Link>

                    <Link to="/cars?brand=Audi" className="brand-card">
                        Audi
                    </Link>

                    <Link to="/cars?brand=Mercedes" className="brand-card">
                        Mercedes
                    </Link>

                    <Link to="/cars?brand=Toyota" className="brand-card">
                        Toyota
                    </Link>

                    <Link to="/cars?brand=Hyundai" className="brand-card">
                        Hyundai
                    </Link>

                    <Link to="/cars?brand=Mahindra" className="brand-card">
                        Mahindra
                    </Link>

                </div>

            </section>

            <section className="why-us">

                <h2>Why Choose Us?</h2>

                <div className="why-grid">

                    <div className="why-card">
                        <h3>🚗 Premium Cars</h3>
                        <p>
                            Wide collection of luxury and premium vehicles from trusted global brands.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>💰 Best Prices</h3>
                        <p>
                            Competitive prices with attractive offers and flexible finance options.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>🛡 Certified Vehicles</h3>
                        <p>
                            Every vehicle undergoes quality inspection to ensure complete customer satisfaction.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>📞 Expert Support</h3>
                        <p>
                            Friendly experts available to assist you before and after your purchase.
                        </p>
                    </div>

                </div>

            </section>

            <section className="testimonial">

                <h2>Customer Reviews</h2>

                <div className="testimonial-grid">

                    <div className="review">

                        <h3>⭐⭐⭐⭐⭐</h3>

                        <p>
                            "Excellent customer service and an amazing collection of premium vehicles."
                        </p>

                        <h4>Rahul Sharma</h4>

                    </div>

                    <div className="review">

                        <h3>⭐⭐⭐⭐⭐</h3>

                        <p>
                            "The buying experience was smooth and the staff were extremely professional."
                        </p>

                        <h4>Sneha Reddy</h4>

                    </div>

                    <div className="review">

                        <h3>⭐⭐⭐⭐⭐</h3>

                        <p>
                            "Highly recommended for anyone looking for luxury cars at the best prices."
                        </p>

                        <h4>Arjun Kumar</h4>

                    </div>

                </div>

            </section>

        </>
    );
}

export default Home;