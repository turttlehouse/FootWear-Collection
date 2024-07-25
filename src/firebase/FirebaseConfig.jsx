// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBcRJ8smWgw8s07Letn1apKSxgH7b_kmLE",
//   authDomain: "grocery-store-85346.firebaseapp.com",
//   projectId: "grocery-store-85346",
//   storageBucket: "grocery-store-85346.appspot.com",
//   messagingSenderId: "1073452178758",
//   appId: "1:1073452178758:web:a8517d788fa9d54601d947",
//   measurementId: "G-N5JSLX4D8S"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCaC6zzRYr0R-DuHDzfDuHnsfpuCnZU_0g",
  authDomain: "footwear-dcc07.firebaseapp.com",
  projectId: "footwear-dcc07",
  storageBucket: "footwear-dcc07.appspot.com",
  messagingSenderId: "467524568038",
  appId: "1:467524568038:web:ae0f12f3156b6284c10c27",
  measurementId: "G-G94NV5GFCV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }








