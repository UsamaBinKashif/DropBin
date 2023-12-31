// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtGiuExXJFh6_1F1OHexcrDgxy8mlXaJ8",
  authDomain: "drop-bin24.firebaseapp.com",
  projectId: "drop-bin24",
  storageBucket: "drop-bin24.appspot.com",
  messagingSenderId: "931446683904",
  appId: "1:931446683904:web:072c408548dd7d38e31be5",
};

// Initialize Firebase
const app: FirebaseApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
const storage: FirebaseStorage = getStorage(app);

export { db, storage };
