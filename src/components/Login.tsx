import React from 'react';
import { useRouter } from 'next/router';
import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import firebase from '../services/firebase';
import { FaFacebook } from "react-icons/fa";
import { dataInFirestore }  from '../components/Database';

const Login = () => {

   const router = useRouter();
   const auth = getAuth(firebase);

   const signInWithFacebook = () => {
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider)
         .then(async (result) => {
            console.log(result);

            const user = result.user;
            await dataInFirestore(user);

            router.push('/user')

         })
         .catch((error) => {
            console.error(error);
         });
   }

   return (
      <>
         <section className="h-screen container">
            <div className="h-full">

               <div
                  className="flex h-full flex-wrap items-center justify-center lg:justify-between">
                  <div
                     className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                     <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="w-full"
                        alt="Sample image" />
                  </div>


                  <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                     <form>

                        <div
                           className="flex flex-row items-center justify-center lg:justify-start">
                           <p className="mb-0 mr-4 text-lg">Entrar com</p>


                           <button
                              type="button"
                              className='flex gap-1 text-lg items-center transition duration-150 ease-linear hover:shadow-xl'
                              onClick={signInWithFacebook}
                           >
                              <span className='text-blue-500 font-bold'>facebook</span>
                              <FaFacebook className="text-blue-500 text-xl" />
                           </button>

                        </div>

                        <div
                           className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                           <p
                              className="mx-4 mb-0 text-center font-semibold dark:text-white">
                              Ou entrar com uma conta
                           </p>
                        </div>


                        <div className="relative mb-6">
                           <input
                              type="text"
                              className="block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] outline-2"
                              id="Email"
                              placeholder="Email" />
                           <label
                              className=""
                           >

                           </label>
                        </div>


                        <div className="relative mb-6">
                           <input
                              type="password"
                              className="block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] outline-2"
                              id="Senha"
                              placeholder="Senha" />
                           <label
                              className=""
                           >

                           </label>
                        </div>


                        <div className="text-center lg:text-left">
                           <button
                              type="button"
                              className="inline-block rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-sm transition duration-150 ease-in-out hover:shadow-xl"
                           >
                              Login
                           </button>

                           <div className='flex gap-1 justify-center mt-5'>
                              <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                 Nao tem uma conta?</p>
                              <a
                                 href="#!"
                                 className="text-red-700 hover:text-blue-500 mb-0 mt-2 pt-1 text-sm font-semibold"
                              >
                                 Criar conta
                              </a>
                           </div>

                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Login