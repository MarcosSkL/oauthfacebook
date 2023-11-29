import React from 'react'

const Login = () => {
   return (
      <>
         <section className="h-screen container">
            <div className="h-full">

               <div
                  className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
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
                              className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">

                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="mx-auto h-3.5 w-3.5"
                                 fill="blue"
                                 viewBox="0 0 24 24">
                                 <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                              </svg>
                           </button>

                        </div>

                        <div
                           className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                           <p
                              className="mx-4 mb-0 text-center font-semibold dark:text-white">
                              Ou criar conta
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
                              className="inline-block rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
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