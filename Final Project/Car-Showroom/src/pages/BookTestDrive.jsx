import { useState } from "react";
import { useLocation } from "react-router-dom";
import cars from "../data/cars";
import "./BookTestDrive.css";
import bgImage from "../assets/images/test-drive-bg.jpg";
function BookTestDrive() {
    const location = useLocation();

    const selectedCar = location.state?.car;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        car: selectedCar ? selectedCar.name : "",
        date: "",
        time: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            phone: "",
            car: selectedCar ? selectedCar.name : "",
            date: "",
            time: "",
        });
    };

    return (
        <section
            className="booking-page"
            style={{
                backgroundImage: `linear-gradient(rgba(13,17,23,.82), rgba(13,17,23,.82)), url(${bgImage})`
            }}
        >
            <h1>Book Test Drive</h1>

            {submitted ? (
                <div className="success-message">
                    <h2>✅ Booking Successful!</h2>
                    <p>
                        Your test drive request has been submitted successfully.
                        Our representative will contact you shortly.
                    </p>
                </div>
            ) : (
                <form
                    className="booking-form"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    {selectedCar ? (
                        <input
                            type="text"
                            value={formData.car}
                            readOnly
                        />
                    ) : (
                        <select
                            name="car"
                            value={formData.car}
                            onChange={handleChange}
                            required
                        >
                            <option value="">
                                Select a Car
                            </option>

                            {cars.map((car) => (
                                <option
                                    key={car.id}
                                    value={car.name}
                                >
                                    {car.name}
                                </option>
                            ))}
                        </select>
                    )}

                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        onClick={(e) => e.target.showPicker?.()}
                        required
                    />

                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        onClick={(e) => e.target.showPicker?.()}
                        required
                    />

                    <button type="submit">
                        Book Test Drive
                    </button>
                </form>
            )}
        </section>
    );
}

export default BookTestDrive;