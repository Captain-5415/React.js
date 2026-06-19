import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }, [id]);

    if (!user) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="details-container">
            <h1>User Details</h1>

            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address.street}</p>
            <p><strong>City:</strong> {user.address.city}</p>
        </div>
    );
}