import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN0KFArLzp-kps9iBW2poDI2sHzfFVI6o",
  authDomain: "clone-2d965.firebaseapp.com",
  projectId: "clone-2d965",
  storageBucket: "clone-2d965.appspot.com",
  messagingSenderId: "341372826727",
  appId: "1:341372826727:web:494060629c3c7569d50c2",
  measurementId: "G-9L4SRBZYLC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };