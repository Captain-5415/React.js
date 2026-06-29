import { Link } from "react-router-dom";
import brands from "../data/brands";
import "./Brands.css";

function Brands() {
    return (
        <section className="brands-page">

            <div className="brands-header">

                <h1>Our Premium Brands</h1>

                <p>
                    Explore luxury and premium automobile manufacturers from around the world.
                </p>

            </div>

            <div className="brands-grid">

                {brands.map((brand) => (

                    <div
                        className="brand-cards"
                        key={brand.id}
                    >

                        <div className="brand-image">
                            <img
                                src={brand.image}
                                alt={brand.name}
                            />
                        </div>

                        <div className="brand-content">

                            <h2>{brand.name}</h2>

                            <p>{brand.description}</p>

                            <Link
                                to={`/cars?brand=${brand.name}`}
                                className="brand-btn"
                            >
                                Explore Cars →
                            </Link>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Brands;