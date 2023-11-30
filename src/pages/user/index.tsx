import React from 'react'

const index = () => {
   return (
      <>
         <section className="h-screen bg-white">
            <div className="h-60 w-screen bg-[url('../../public/assets/polygonal19.jpg')] bg-cover" />
            <div className='h-36 w-36 bg-gray-400 rounded-full ms-20 -mt-14 flex justify-center items-center'>
               <p>Foto</p>
            </div>
            <div className='ms-64 -mt-20'>
               <p>Nome</p>
               <p>E-mail</p>
            </div>
         </section>
      </>
   )
}

export default index