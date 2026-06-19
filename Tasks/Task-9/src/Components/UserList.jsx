import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

export default function UserList() {
    const [users, setUsers] = useState([])
    let api = "https://jsonplaceholder.typicode.com/users"
    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
            })
    }, [])
    return (
        <div>
            <h1>Users List</h1>
            <div className="user-container">
                {users.map((user) => (
                    <div>
                        <Link
                            key={user.id}
                            className="user-card"
                            to={`/user/${user.id}`}>
                            <div>
                                <h3>{user.name}</h3>
                            </div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                            </span>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    )
}
