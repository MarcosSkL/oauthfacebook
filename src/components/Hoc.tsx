// withAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';
import firebase from '../services/firebase';

const withAuth = (WrappedComponent:any) => {
   return (props:any) => {
      const router = useRouter();
      const auth = getAuth(firebase);

      useEffect(() => {
         const unsubscribe = auth.onAuthStateChanged(user => {
            if (!user) {
               router.push('/');
            }
         });

         return () => unsubscribe();
      }, []);

      return <WrappedComponent {...props} />;
   };
};

export default withAuth;
