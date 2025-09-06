import React, { useState } from "react";
import { auth } from "../firebase";
import SocialSignIn from "./SocialSignIn";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Email/Password Sign In
  const handleSignIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential.user.emailVerified) {
          setMessage("Sign in successful!");
        } else {
          setMessage("Please verify your email before signing in.");
        }
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 8 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 8 }}
        />
        <button type="submit" style={{ width: "100%", marginBottom: 8 }}>
          Sign In
        </button>
      </form>
      <div style={{ margin: "16px 0" }}>
        <SocialSignIn />
      </div>
      {message && <div style={{ color: "red" }}>{message}</div>}
    </div>
  );
}

export default Login;
