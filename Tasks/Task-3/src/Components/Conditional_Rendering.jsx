import { useState } from "react";
import List_Rendering from "./List_Rendering";
import "./conditional.css";

export default function Conditional_Rendering() {
    const [Login, setLogin] = useState(false);
    let [username, setUsername] = useState("");

    const handleLogin = () => {
        if (username.trim() === "") {
            alert("Please enter your name!");
            return;
        }
        setLogin(!Login);
    };

    return (
        <div className="cond">
            <h1>Conditional Rendering & List Rendering</h1>
            <div><label>UserName: </label>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter your username"
            /></div>
            <br />
            <button className="login-btn" onClick={() => {
                handleLogin();
            }} >Log {Login ? "Out" : "In"}
            </button>
            {Login ? (
                <>
                    <p>Welcome back, <span className="username">{username || "User"}!</span></p>
                    <List_Rendering />
                </>
            ) : (
                <p>Please log in to continue...</p>
            )}
        </div>
    );
}
