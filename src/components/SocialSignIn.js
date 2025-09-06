import React from "react";
import { auth } from "../firebase";
import firebase from "firebase/app";

function SocialSignIn() {
  // Google provider
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        // User signed in
        alert("Signed in with Google: " + result.user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Facebook provider
  const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        // User signed in
        alert("Signed in with Facebook: " + result.user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <button onClick={signInWithGoogle} style={{ margin: "8px" }}>
        Continue with Google
      </button>
      <button onClick={signInWithFacebook} style={{ margin: "8px" }}>
        Continue with Facebook
      </button>
    </div>
  );
}

export default SocialSignIn;
