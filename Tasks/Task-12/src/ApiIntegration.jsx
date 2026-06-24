import { useEffect, useState } from "react";

export default function ApiIntegration() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const api = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        async function fetchUser() {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(api);
                if (!response.ok) {
                    throw new Error("Failed to fetch data.");
                }
                const data = await response.json();
                if (!data || data.length === 0) {
                    throw new Error("No user data available.");
                }
                setUser(data);
            } catch (err) {
                setError(err.message || "An unexpected error occurred.");
            } finally {
                setLoading(false);
                console.log("API request completed.");
            }
        }
        fetchUser();
    }, []);

    if (loading) {
        return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
    }

    if (error) {
        return (
            <h2 style={{ color: "red", textAlign: "center" }}>{error}</h2>
        );
    }

    return (
        <div className="container">
            <div className="header">
                <h1>API Integration</h1>
                <p>Fetching User Data with Exception Handling</p>
            </div>

            <div className="table-card">
                <h2>User Details</h2>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                    </thead>

                    <tbody>
                        {user.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}