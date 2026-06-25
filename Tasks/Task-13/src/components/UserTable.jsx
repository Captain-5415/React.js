import "./UserTable.css";
import useFetchData from "../hooks/useFetchData";

export default function UserTable() {
    const { data: users, loading, error, } = useFetchData("https://jsonplaceholder.typicode.com/users");

    if (loading) {
        return <h2 className="status">Loading Users...</h2>;
    }
    if (error) {
        return <h2 className="status error">{error}</h2>;
    }

    return (
        <div className="table-container">
            <h1>User Details</h1>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((person) => (
                        <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>{person.username}</td>
                            <td>{person.email}</td>
                            <td>{person.phone}</td>
                            <td>{person.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}