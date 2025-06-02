// Initialize Firebase in public/main.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = { /* Your config */ };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save data
async function saveData(data) {
  await addDoc(collection(db, "submissions"), data);
}