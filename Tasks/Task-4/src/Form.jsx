import { useState } from "react";
import "./Form.css";

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        DOB: "",
        address: "",
        city: "",
        country: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First Name is required";
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last Name is required";
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }
        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone Number must be 10 digits";
        }
        if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm Password is required";
        }
        else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        if (!formData.DOB) {
            newErrors.DOB = "Date of Birth is required";
        }
        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
        }
        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }
        if (!formData.country.trim()) {
            newErrors.country = "Country is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Registration Successful!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                password: "",
                confirmPassword: "",
                DOB: "",
                address: "",
                city: "",
                country: "",
            });
            setErrors({});
        }
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Registration Form</h2>
                <section>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter First Name" />
                </section>
                <section>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter Last Name" />
                </section>
                <section>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email" />
                </section>
                <section>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter Phone Number" />
                </section>
                <section>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Password" />
                </section>
                <section>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password" />
                </section>
                <section>
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="DOB"
                        value={formData.DOB}
                        onChange={handleChange} />
                </section>
                <section>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter Address" />
                </section>
                <section>
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter City" />
                </section>
                <section>
                    <label>Country:</label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Enter Country" />
                </section>

                {/* {errors.firstName && <p  className="error">{errors.firstName}</p>}
                {errors.lastName && <p  className="error">{errors.lastName}</p>}
                {errors.email && <p  className="error">{errors.email}</p>}
                {errors.phoneNumber && <p  className="error">{errors.phoneNumber}</p>}
                {errors.password && <p  className="error">{errors.password}</p>}
                {errors.confirmPassword && <p  className="error">{errors.confirmPassword}</p>}
                {errors.DOB && <p  className="error">{errors.DOB}</p>}
                {errors.address && <p  className="error">{errors.address}</p>}
                {errors.city && <p  className="error">{errors.city}</p>}
                {errors.country && <p className="error">{errors.country}</p>} */}

                {Object.keys(errors).length > 0 && (
                    <div className="error-container">
                        {Object.values(errors).map((error, index) => (
                            <p key={index} className="error">
                                ❌ {error}
                            </p>
                        ))}
                    </div>
                )}

                <button type="submit">Register</button>
            </form>
        </div>
    );
}