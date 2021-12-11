import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4444", {
  transports: ["websocket", "polling"],
});
export default function Dialog() {
  let username = "You write:";

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("username", username);
    });

    socket.on("users", (users) => {
      setUsers(users);
    });

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("connected", (user) => {
      setUsers((users) => [...users, user]);
    });

    socket.on("disconnected", (id) => {
      setUsers((users) => {
        return users.filter((user) => user.id !== id);
      });
    });
  }, []);

  const submit = (event) => {
    event.preventDefault();
    socket.emit("send", message);
    setMessage("");
  };
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-md-12 mt-4 mb-4">
            <h6>Hello, can I help you</h6>
          </div>
          <div className="col-md-8">
            <div id="messages">
              {messages.map(({ user, date, text }, index) => (
                <div key={index} className="row mb-2">
                  <pre>{text}</pre>
                  <div className="col-md-3">
                    <pre>{Date(date)}</pre>
                  </div>
                </div>
              ))}
              {messages.length > 3 && (
                <>
                  <pre style={{ color: "red" }}>
                    Thanks for you appeal, we don't
                  </pre>
                  <pre style={{ color: "red" }}>work after 05-00 pm</pre>
                </>
              )}
            </div>
            <form onSubmit={submit} id="form">
              <div className="input-group">
                <input
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  id="text"
                />
                <span className="input-group-btn">
                  <button>Send</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
