import { useState } from "react";
import "./ChatApp.css";

function ChatApp() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSend = () => {
        if (message.trim() === "") return;

        setMessages([...messages, message]);
        setMessage("");
    };

    return (
        <div className="container">

            <div className="chat-box">
                <h2>Mini Chat Application</h2>

                <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button onClick={handleSend}>
                    Send Message
                </button>
            </div>

            <div className="message-container">
                <h3>Messages</h3>

                {messages.length === 0 ? (
                    <p className="empty">No Messages Yet</p>
                ) : (
                    messages.map((msg, index) => (
                        <div className="message" key={index}>
                            {msg}
                        </div>
                    ))
                )}
            </div>

        </div>
    );
}

export default ChatApp;