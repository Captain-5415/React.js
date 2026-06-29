import { useState } from "react";
import carsData from "../data/cars";
import CarCard from "../components/CarCard";
import "./Cars.css";

function Cars() {
    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState("All");
    const [fuel, setFuel] = useState("All");
    const [sort, setSort] = useState("");

    const filteredCars = carsData
        .filter((car) =>
            car.name.toLowerCase().includes(search.toLowerCase())
        )
        .filter((car) =>
            brand === "All" ? true : car.brand === brand
        )
        .filter((car) =>
            fuel === "All" ? true : car.fuel === fuel
        )
        .sort((a, b) => {
            if (sort === "low") return a.price - b.price;
            if (sort === "high") return b.price - a.price;
            return 0;
        });

    return (
        <section className="cars-page">
            <h1>Our Cars</h1>

            <div className="filters">

                <input
                    type="text"
                    placeholder="Search Cars..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                >
                    <option>All</option>
                    <option>BMW</option>
                    <option>Audi</option>
                    <option>Mercedes</option>
                    <option>Toyota</option>
                    <option>Hyundai</option>
                    <option>Mahindra</option>
                </select>

                <select
                    value={fuel}
                    onChange={(e) => setFuel(e.target.value)}
                >
                    <option>All</option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>Electric</option>
                    <option>Hybrid</option>
                </select>

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="">Sort Price</option>
                    <option value="low">Low → High</option>
                    <option value="high">High → Low</option>
                </select>

            </div>

            <div className="cars-grid">
                {filteredCars.length > 0 ? (
                    filteredCars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))
                ) : (
                    <h2>No Cars Found</h2>
                )}
            </div>
        </section>
    );
}

export default Cars;