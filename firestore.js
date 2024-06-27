// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { addDoc, collection, deleteDoc, doc, getDoc, getFirestore, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA75MlUyzHPyuPZFZQcoSIBCGvDQg1KzEE",
  authDomain: "project-3407256027767358805.firebaseapp.com",
  projectId: "project-3407256027767358805",
  storageBucket: "project-3407256027767358805.appspot.com",
  messagingSenderId: "37578955280",
  appId: "1:37578955280:web:c0e7a45b077762f6684895"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export const save = (pasajero) => {
    addDoc(collection(db, 'pasajeros'),pasajero)
}

export const selectOne = (id) => getDoc(doc(db, 'pasajeros', id))