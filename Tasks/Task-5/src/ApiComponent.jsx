import { useEffect, useState } from "react"
import './ApiComponent.css'

export default function ApiComponent() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let api = "https://jsonplaceholder.typicode.com/users";
        fetch(api)
            .then(data => data.json())
            .then(jsData => {
                setUsers(jsData);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
            .catch(error => {
                console.log("Error fecthing data :", error);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
    }, [])
    // console.log(user);

    return (
        <div className="container">
            <h1>User Details</h1>
            {loading ? (<div className="loading"></div>) : (
                <div>
                    <div className="All-cards" >
                        {users.map(p => (
                            <div className="card" key={p.id}>
                                <h2>{p.name}</h2>
                                <p>Username : {p.username}</p>
                                <p>Email : {p.email}</p>
                                <p>Phone Number : {p.phone}</p>
                                <p>Website : {p.website}</p>
                            </div>
                        ))}
                    </div>
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Website</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((p) => (
                                <tr key={p.id}>
                                    <td>{p.name}</td>
                                    <td>{p.username}</td>
                                    <td>{p.email}</td>
                                    <td>{p.phone}</td>
                                    <td>{p.website}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
