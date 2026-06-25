
import useFetchData from "../hooks/useFetchData";

export default function UserCard() {
    const { data: users, loading, error, } = useFetchData("https://jsonplaceholder.typicode.com/users");

    if (loading) return <h2 >Loading...</h2>;
    if (error) return <h2 >{error}</h2>;
    
    return (
        <div className="container">
            <h1>User Details</h1>
            <h2>API Integration using Custom Hook</h2>

            <div className="card-container">
                {users.map((user) => (
                    <div className="card" key={user.id}>

                        <h2>{user.name}</h2>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Website:</strong>{" "}
                            <a href={`https://${user.website}`}
                                target="_blank" rel="noreferrer">
                                { user.website}
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}