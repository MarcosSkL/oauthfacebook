import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebase from '../../services/firebase';
import withAuth from '@/components/Hoc';

const Index = () => {

   const router = useRouter();
   const auth = getAuth(firebase);
   const [userData, setUserData] = useState<any>(null);

   useEffect(() => {

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

   const handleLogout = async () => {
      const auth = getAuth();
      try {
         await signOut(auth)
            .then(() => {
               console.log('Logout realizado com sucesso');
            })
      } catch (error) {
         console.error('Erro ao fazer logout:', error);
      }
   };


   if (!userData) {
      return <p>Carregando...</p>;
   }

   return (
      <>
         <section className='max-w-[1000px]'>
            <div className="mx-auto w-screen h-full flex flex-col justify-center bg-white">
               <div className="sm:h-60 h-40 sm:w-screen w-screen bg-[url('../../public/assets/polygonal19.jpg')] bg-cover">
               </div>
               <div className='h-36 w-36 bg-gray-400 rounded-full ms-20 -mt-14 flex justify-center items-center'>
                  <img src={userData.photoURL} alt='foto perfil' className='rounded-full h-36 w-36' />
               </div>
               <div className='md:ms-60 md:-mt-20'>
                  <p className='font-semibold font-serif text-lg'>{userData.displayName}</p>
                  <p className='font-mono'>{userData.email}</p>
               </div>
               <div className='flex justify-end md:me-10 md:-mt-10 -mt-10 md:h-full '>
                  <button
                     type="button"
                     onClick={handleLogout}
                     className="inline-block rounded bg-red-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-sm transition duration-150 ease-in-out hover:shadow-xl"
                  >
                     Sair
                  </button>
               </div>
            </div>
         </section>
      </>
   )
}

export default withAuth(Index);