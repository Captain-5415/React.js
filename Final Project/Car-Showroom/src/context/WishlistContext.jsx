import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        const data = localStorage.getItem("wishlist");
        return data ? JSON.parse(data) : [];
    });

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (car) => {
        const exists = wishlist.find((item) => item.id === car.id);

        if (!exists) {
            setWishlist([...wishlist, car]);
        }
    };

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter((car) => car.id !== id));
    };

    const isWishlisted = (id) => {
        return wishlist.some((car) => car.id === id);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist,
                isWishlisted,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);