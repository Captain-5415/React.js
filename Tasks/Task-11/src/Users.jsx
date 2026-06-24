// import React from "react";
import { useSearchParams } from "react-router-dom";
import "./Users.css";

function Users() {
    const [searchParams, setSearchParams] = useSearchParams();

    const users = [
        { id: 1, name: "Gowtham", email: "gowtham@gmail.com", city: "Vijayawada", role: "Developer" },
        { id: 2, name: "Vamsi Krishna", email: "vamsi@gmail.com", city: "Hyderabad", role: "Tester" },
        { id: 3, name: "Sai Kiran", email: "saikiran@gmail.com", city: "Vizag", role: "Designer" },
        { id: 4, name: "Harsha Vardhan", email: "harsha@gmail.com", city: "Guntur", role: "HR" },
        { id: 5, name: "Naveen", email: "naveen@gmail.com", city: "Tirupati", role: "Developer" },
        { id: 6, name: "Teja", email: "teja@gmail.com", city: "Hyderabad", role: "Tester" },
        { id: 7, name: "Pavan Kumar", email: "pavan@gmail.com", city: "Warangal", role: "Manager" },
        { id: 8, name: "Charan", email: "charan@gmail.com", city: "Vijayawada", role: "Developer" },
        { id: 9, name: "Praveen", email: "praveen@gmail.com", city: "Nellore", role: "HR" },
        { id: 10, name: "Karthik", email: "karthik@gmail.com", city: "Hyderabad", role: "Designer" },
        { id: 11, name: "Lokesh", email: "lokesh@gmail.com", city: "Kakinada", role: "Developer" },
        { id: 12, name: "Ajay", email: "ajay@gmail.com", city: "Rajahmundry", role: "Tester" },
        { id: 13, name: "Durga Prasad", email: "durga@gmail.com", city: "Vizag", role: "Manager" },
        { id: 14, name: "Sandeep", email: "sandeep@gmail.com", city: "Ongole", role: "HR" },
        { id: 15, name: "Rohith", email: "rohith@gmail.com", city: "Hyderabad", role: "Developer" },
        { id: 16, name: "Manoj", email: "manoj@gmail.com", city: "Vijayawada", role: "Designer" },
        { id: 17, name: "Venu", email: "venu@gmail.com", city: "Guntur", role: "Tester" },
        { id: 18, name: "Mahesh", email: "mahesh@gmail.com", city: "Tirupati", role: "Manager" },
        { id: 19, name: "Yaswanth", email: "yaswanth@gmail.com", city: "Vizag", role: "HR" },
        { id: 20, name: "Srikar", email: "srikar@gmail.com", city: "Hyderabad", role: "Developer" }
    ];

    const currentPage = Number(searchParams.get("page")) || 1;

    const recordsPerPage = 5;
    const totalPages = Math.ceil(users.length / recordsPerPage);

    const startIndex = (currentPage - 1) * recordsPerPage;
    const currentUsers = users.slice(
        startIndex,
        startIndex + recordsPerPage
    );

    const changePage = (page) => {
        setSearchParams({ page });
    };

    return (
        <div className="container">
            <h1>User Pagination Using useSearchParams</h1>

            <div className="card-container">
                {currentUsers.map((user) => (
                    <div className="card" key={user.id}>
                        <h2>{user.name}</h2>
                        <p><strong>ID:</strong> {user.id}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>City:</strong> {user.city}</p>
                        <p><strong>Role:</strong> {user.role}</p>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={
                            currentPage === index + 1 ? "page-btn active" : "page-btn"
                        }
                        onClick={() => changePage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Users;