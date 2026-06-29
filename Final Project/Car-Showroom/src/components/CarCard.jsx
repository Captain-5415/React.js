import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import "./CarCard.css";

function CarCard({ car }) {
    const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

    const wishlisted = isWishlisted(car.id);

    const handleWishlist = () => {
        if (wishlisted) {
            removeFromWishlist(car.id);
        } else {
            addToWishlist(car);
        }
    };

    return (
        <div className="car-card">
            <img
                src={car.image}
                alt={car.name}
                className="car-image"
            />

            <div className="car-info">
                <h2>{car.name}</h2>

                <p><strong>Brand:</strong> {car.brand}</p>
                <p><strong>Price:</strong> ₹{car.price.toLocaleString("en-IN")}</p>
                <p><strong>Fuel:</strong> {car.fuel}</p>
                <p><strong>Transmission:</strong> {car.transmission}</p>

                <div className="card-buttons">
                    <button
                        className="wishlist-btn"
                        onClick={handleWishlist}
                    >
                        {wishlisted ? "❤️ Remove Wishlist" : "🤍 Add Wishlist"}
                    </button>

                    <Link
                        to={`/cars/${car.id}`}
                        className="details-btn"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CarCard;