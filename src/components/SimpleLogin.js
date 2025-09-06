import React, { useState } from "react";

function SimpleLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password) {
      setMessage("Sign in successful! (This is a demo)");
      // In a real app, this would authenticate the user
    } else {
      setMessage("Please enter both email and password");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20, backgroundColor: "#f9f9f9", marginTop: 50 }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ 
            width: "100%", 
            marginBottom: 10, 
            padding: 10, 
            border: "1px solid #ddd",
            borderRadius: 4
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ 
            width: "100%", 
            marginBottom: 10, 
            padding: 10, 
            border: "1px solid #ddd",
            borderRadius: 4
          }}
        />
        <button 
          type="submit" 
          style={{ 
            width: "100%", 
            padding: 10, 
            backgroundColor: "#ff9900", 
            color: "white", 
            border: "none",
            borderRadius: 4,
            cursor: "pointer"
          }}
        >
          Sign In
        </button>
      </form>
      {message && <div style={{ marginTop: 10, color: message.includes("successful") ? "green" : "red" }}>{message}</div>}
      
      <div style={{ marginTop: 20, textAlign: "center" }}>
        <p>Don't have an account? <a href="#" style={{ color: "#007185" }}>Create account</a></p>
      </div>
    </div>
  );
}

export default SimpleLogin;
