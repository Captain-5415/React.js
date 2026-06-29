import { useParams, Link } from "react-router-dom";
import cars from "../data/cars";
import { useWishlist } from "../context/WishlistContext";
import "./CarDetails.css";

function CarDetails() {
    const { id } = useParams();

    const car = cars.find((item) => item.id === Number(id));

    const {
        addToWishlist,
        removeFromWishlist,
        isWishlisted,
    } = useWishlist();

    if (!car) {
        return <h1 style={{ textAlign: "center" }}>Car Not Found</h1>;
    }

    const wishlisted = isWishlisted(car.id);

    const handleWishlist = () => {
        if (wishlisted) {
            removeFromWishlist(car.id);
        } else {
            addToWishlist(car);
        }
    };

    return (
        <section className="details">
            <div className="details-image">
                <img src={car.image} alt={car.name} />
            </div>

            <div className="details-content">
                <h1>{car.name}</h1>

                <h2>₹ {car.price.toLocaleString("en-IN")}</h2>

                <p>{car.description}</p>

                <div className="specifications">
                    <div>
                        <strong>Brand</strong>
                        <span>{car.brand}</span>
                    </div>

                    <div>
                        <strong>Fuel</strong>
                        <span>{car.fuel}</span>
                    </div>

                    <div>
                        <strong>Transmission</strong>
                        <span>{car.transmission}</span>
                    </div>

                    <div>
                        <strong>Engine</strong>
                        <span>{car.engine}</span>
                    </div>

                    <div>
                        <strong>Mileage</strong>
                        <span>{car.mileage}</span>
                    </div>

                    <div>
                        <strong>Seats</strong>
                        <span>{car.seating}</span>
                    </div>

                    <div>
                        <strong>Color</strong>
                        <span>{car.color}</span>
                    </div>

                    <div>
                        <strong>Year</strong>
                        <span>{car.year}</span>
                    </div>
                </div>

                <div className="details-buttons">
                    <button
                        className="wishlist-btn"
                        onClick={handleWishlist}
                    >
                        {wishlisted
                            ? "❤️ Remove Wishlist"
                            : "🤍 Add to Wishlist"}
                    </button>

                    <Link
                        to="/book-test-drive"
                        state={{ car }}
                        className="book-btn"
                    >
                        Book Test Drive
                    </Link>

                    <Link
                        to="/contact"
                        state={{ car }}
                        className="contact-btn"
                    >
                        Contact Dealer
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CarDetails;