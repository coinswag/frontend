import { setDoc, doc } from "firebase/firestore";
import { dataBase } from "./firebase.config";
import { v4 as uuidv4 } from "uuid";

export const createUserWaitList = async (email: string) => {
	try {
		const userRef = doc(dataBase, "users", uuidv4());
		await setDoc(userRef, {
			email,
			createdAt: new Date().toISOString(),
		});
		console.log("docRef", userRef);
	} catch (error) {
		console.log(error);
	}
};
