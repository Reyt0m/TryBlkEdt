import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsfoUFdDTGryJR8g00sR0pwtIjYlEzVd0",
  authDomain: "blockeditor-4cf9a.firebaseapp.com",
  databaseURL: "https://blockeditor-4cf9a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blockeditor-4cf9a",
  storageBucket: "blockeditor-4cf9a.appspot.com",
  messagingSenderId: "22729385365",
  appId: "1:22729385365:web:a357b8dfb7ac7c516dc29c"

//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATA_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
