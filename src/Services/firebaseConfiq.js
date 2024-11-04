// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize en instanse af Firebase Authentication
const auth = getAuth(app);


export const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user }
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return { success: false, message: "This email is already in use. Please use a different email." };
    } else {
      return { success: false, message: "Signup failed, please try again." };
    }
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user }
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };