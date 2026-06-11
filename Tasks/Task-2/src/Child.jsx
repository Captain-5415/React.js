
import './Child.css'
export default function Child({ name, city, age, Mobile, Address }) {
    return (
        <div className="child">
            <p><strong>Name</strong> : {name}</p>
            <p><strong>City</strong> : {city}</p>
            <p><strong>Age</strong> : {age}</p>
            <p><strong>Mobile</strong> : {Mobile}</p>
            <p><strong>Address</strong> : {Address}</p>
        </div>
    );
}
