// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, query} from "firebase/firestore"
import {collection, getDocs,   where } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjd5DkR_KcYlBuLmLnJcvWKtd_3IPh6_8",
  authDomain: "e-comm-cerve.firebaseapp.com",
  projectId: "e-comm-cerve",
  storageBucket: "e-comm-cerve.appspot.com",
  messagingSenderId: "961759771047",
  appId: "1:961759771047:web:7f518d5cceade30d731e82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export  const firestoreFetch = async (id) =>{ 
let q ;

if (id){
    q = query (collection (db, "products"), where ('categoryId', ' == ', id));

} else  {

    q = query (collection (db, "products"))
}

const querySnapshot = await getDocs(q);

const dataFromFirestore = querySnapshot.docs.map (doc => ({
    id: doc.id,
    ...doc.data()
}))
return dataFromFirestore
 
}