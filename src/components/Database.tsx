import { getFirestore, doc, setDoc } from 'firebase/firestore';

export const dataInFirestore = async (userData: any) => {
   const db = getFirestore();
   const userRef = doc(db, 'users', userData.uid);

   await setDoc(userRef, {
      displayName: userData.displayName,
      email: userData.email,
      photoURL: userData.photoURL
      
   });
};