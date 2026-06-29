import { useState } from "react";
import cars from "../data/cars";
import "./CompareCars.css";

function CompareCars() {
    const [car1Id, setCar1Id] = useState("");
    const [car2Id, setCar2Id] = useState("");

    const car1 = cars.find((car) => car.id === Number(car1Id));
    const car2 = cars.find((car) => car.id === Number(car2Id));

    return (
        <section className="compare-page">
            <h1>Compare Cars</h1>

            <div className="compare-selectors">
                <select
                    value={car1Id}
                    onChange={(e) => setCar1Id(e.target.value)}
                >
                    <option value="">Select First Car</option>
                    {cars.map((car) => (
                        <option key={car.id} value={car.id}>
                            {car.name}
                        </option>
                    ))}
                </select>

                <select
                    value={car2Id}
                    onChange={(e) => setCar2Id(e.target.value)}
                >
                    <option value="">Select Second Car</option>
                    {cars.map((car) => (
                        <option key={car.id} value={car.id}>
                            {car.name}
                        </option>
                    ))}
                </select>
            </div>

            {car1 && car2 && (
                <table className="compare-table">
                    <thead>
                        <tr>
                            <th>Specification</th>
                            <th>{car1.name}</th>
                            <th>{car2.name}</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Image</td>
                            <td>
                                <img src={car1.image} alt={car1.name} />
                            </td>
                            <td>
                                <img src={car2.image} alt={car2.name} />
                            </td>
                        </tr>

                        <tr>
                            <td>Price</td>
                            <td>₹ {car1.price.toLocaleString("en-IN")}</td>
                            <td>₹ {car2.price.toLocaleString("en-IN")}</td>
                        </tr>

                        <tr>
                            <td>Brand</td>
                            <td>{car1.brand}</td>
                            <td>{car2.brand}</td>
                        </tr>

                        <tr>
                            <td>Fuel</td>
                            <td>{car1.fuel}</td>
                            <td>{car2.fuel}</td>
                        </tr>

                        <tr>
                            <td>Transmission</td>
                            <td>{car1.transmission}</td>
                            <td>{car2.transmission}</td>
                        </tr>

                        <tr>
                            <td>Engine</td>
                            <td>{car1.engine}</td>
                            <td>{car2.engine}</td>
                        </tr>

                        <tr>
                            <td>Mileage</td>
                            <td>{car1.mileage}</td>
                            <td>{car2.mileage}</td>
                        </tr>

                        <tr>
                            <td>Seats</td>
                            <td>{car1.seating}</td>
                            <td>{car2.seating}</td>
                        </tr>

                        <tr>
                            <td>Color</td>
                            <td>{car1.color}</td>
                            <td>{car2.color}</td>
                        </tr>

                        <tr>
                            <td>Year</td>
                            <td>{car1.year}</td>
                            <td>{car2.year}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </section>
    );
}

export default CompareCars;