import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1Wttn62HAWXFsgIKh0XvminJdazk5mDw",
  authDomain: "carmate-4326b.firebaseapp.com",
  projectId: "carmate-4326b",
  storageBucket: "carmate-4326b.appspot.com",
  messagingSenderId: "393069666936",
  appId: "1:393069666936:web:680177b7a48e79a2c0438d",
  measurementId: "G-Y203GTF2XR"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get the Auth object
const auth = getAuth(firebaseApp);

// Export the Auth object
export default auth;