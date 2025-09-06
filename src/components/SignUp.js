import React, { useState } from "react";
import { auth } from "../firebase";
import SocialSignIn from "./SocialSignIn";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Email/Password Sign Up with Email Verification
  const handleSignUp = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        userCredential.user.sendEmailVerification();
        setMessage("Registration successful! Please check your email to verify your account.");
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
          Sign Up
        </button>
      </form>
      <div style={{ margin: "16px 0" }}>
        <SocialSignIn />
      </div>
      {message && <div style={{ color: "green" }}>{message}</div>}
    </div>
  );
}

export default SignUp;
