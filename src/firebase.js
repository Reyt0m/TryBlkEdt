import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyAsfoUFdDTGryJR8g00sR0pwtIjYlEzVd0",
	authDomain: "blockeditor-4cf9a.firebaseapp.com",
	databaseURL: "https://blockeditor-4cf9a-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "blockeditor-4cf9a",
	storageBucket: "blockeditor-4cf9a.appspot.com",
	messagingSenderId: "22729385365",
	appId: "1:22729385365:web:a357b8dfb7ac7c516dc29c"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
