import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebase from '../../services/firebase';
import withAuth from '@/components/Hoc';

const index = () => {

   const router = useRouter();
   const [userData, setUserData] = useState<any>(null);

   useEffect(() => {
      const auth = getAuth(firebase);
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
         if (user) {
            const userId = user.uid;
            const db = getFirestore();
            const userRef = doc(db, 'users', userId);

            try {
               const docSnap = await getDoc(userRef);
               if (docSnap.exists()) {
                  setUserData(docSnap.data());
               } else {
                  console.log('Documento não encontrado!');
               }
            } catch (error) {
               console.error('Erro ao buscar dados do usuário:', error);
            }
         } else {
            router.push('/');
         }
      });

      return () => unsubscribe();
   }, []);

   if (!userData) {
      return <p>Carregando...</p>;
   }

   return (
      <>
         <section className="h-screen bg-white">
            <div className="h-60 w-screen bg-[url('../../public/assets/polygonal19.jpg')] bg-cover" />
            <div className='h-36 w-36 bg-gray-400 rounded-full ms-20 -mt-14 flex justify-center items-center'>
               <img src={userData.photoURL} className='rounded-full h-36 w-36' />
            </div>
            <div className='ms-64 -mt-20'>
               <p>{userData.displayName}</p>
               <p>{userData.email}</p>
            </div>
         </section>
      </>
   )
}

export default withAuth(index);