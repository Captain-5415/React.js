// import React from "react";
import "./list.css"
export default function List_Rendering() {
    const employees = [
        {id : 1, Name: "Gowtham Goriparthi", Age : 23, City : "Vijayawada", Role : "Software Engineer", PhoneNo : "9052520552"},
        {id : 2, Name: "Prem Kumar", Age : 24, City : "Hyderabad", Role : "Product Manager", PhoneNo : "9966440895"},
        {id : 3, Name: "Siva Shankar", Age : 25, City : "Chennai", Role : "Data Scientist", PhoneNo : "7744112255"},
        {id : 4, Name: "Kowshik", Age : 23, City : "Vijayawada", Role : "UX Designer", PhoneNo : "9874563210"},
        {id : 5, Name: "Kedhar varma", Age : 30, City : "Banglore", Role : "DevOps Engineer", PhoneNo : "9875632140"}
    ];
    return (
        <div>
            <h1>List of Employees</h1>
            <div className="cards">
                {employees.map((employee, index) => (
                    <div className="card" key={index}>
                        <h2>{employee.Name}</h2>
                        <p>Age: {employee.Age}</p>
                        <p>City: {employee.City}</p>
                        <p>Role: {employee.Role}</p>
                        <p>Phone No: {employee.PhoneNo}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
