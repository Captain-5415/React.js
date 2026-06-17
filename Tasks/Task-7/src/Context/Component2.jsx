import { useContext } from 'react'
import { Pass } from '../App'
import Component3 from "./Component3"

export default function Component2() {
    const { formData, handleChange, setSubmittedData } = useContext(Pass);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };
    return (
        <div className='c2'>
            <h2>Employee Form</h2>
            <form className='form'>
                <label htmlFor="">name</label>
                <input
                    type='text'
                    name='name'
                    placeholder='Employee Name'
                    value={formData.name}
                    onChange={handleChange} />
                <label htmlFor="">Email</label>
                <input
                    type='email'
                    name='email'
                    placeholder='Employee email'
                    value={formData.email}
                    onChange={handleChange} />
                <label htmlFor="">Phone Number</label>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <label htmlFor="">Address</label>
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                />
                <label htmlFor="">City</label>
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                />
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>

            <Component3 />
        </div>
    )
}
