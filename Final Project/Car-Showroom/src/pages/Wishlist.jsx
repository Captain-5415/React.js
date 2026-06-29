import { useWishlist } from "../context/WishlistContext";
import CarCard from "../components/CarCard";
import "./Wishlist.css";

function Wishlist() {
    const { wishlist } = useWishlist();

    return (
        <div className="wishlist-page">
            <h1>My Wishlist</h1>

            {wishlist.length === 0 ? (
                <div className="empty">
                    <h2>No Cars in Wishlist ❤️</h2>
                    <p>Add your favorite cars from the Cars page.</p>
                </div>
            ) : (
                <div className="cars-grid">
                    {wishlist.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Wishlist;