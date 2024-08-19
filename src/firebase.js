// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGP0q5f6oD2ys8xuiIX4b9SYfFoSe2RBg",
  authDomain: "take-it-easy-c213b.firebaseapp.com",
  projectId: "take-it-easy-c213b",
  storageBucket: "take-it-easy-c213b.appspot.com",
  messagingSenderId: "917422358758",
  appId: "1:917422358758:web:9992c4f705aafb763e3b27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
