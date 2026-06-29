import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Contact.css";

function Contact() {
    const location = useLocation();

    const selectedCar = location.state?.car;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <section className="contact-page">
            <h1>Contact Dealer</h1>

            {selectedCar && (
                <h2>Enquiry for: {selectedCar.name}</h2>
            )}

            {submitted ? (
                <div className="success-box">
                    <h2>✅ Enquiry Sent Successfully!</h2>
                    <p>Our dealer will contact you soon.</p>
                </div>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
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

                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Write your enquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Send Enquiry
                    </button>
                </form>
            )}
        </section>
    );
}

export default Contact;