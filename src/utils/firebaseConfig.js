import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
	collection,
	doc,
	getDocs,
	getDoc,
	query,
	where,
} from "firebase/firestore";
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
export const db = getFirestore(app);

export const firestoreFetch = async (categoryId) => {
	let q = query(collection(db, "products"));
	if (categoryId) {
		q = query(
			collection(db, "products"),
			where("categoryId", "==", categoryId)
		);
		console.log(q, "qif")
	} else {
		q = query(collection(db, "products"));
		console.log(q, "qelse")
	}
	const querySnapshot = await getDocs(q);
	console.log(querySnapshot, "querySnapshot")
	const dataFromFirestore = querySnapshot.docs.map((doc) => {
		return {
			id: doc.id,
			...doc.data(),
		};

	});
	console.log(dataFromFirestore, "dataFromFirestore")
	// const dataFiltered = dataFromFirestore.filter(elem => elem.products === categoryId)
	return dataFromFirestore;
};

