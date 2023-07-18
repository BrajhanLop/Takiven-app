import React from 'react'

const Especifications = () => {
  return (
    <div className='mt-10'>
        <div className='flex w-[1130px] text-[20px] justify-around text-[#3C4A5B] mb-3'>
            <p className=' font-[700] border-b-2 border-[#3C4A5B] pb-2 px-4'>ESPECIFICACIONES</p>
            <p>DESCRIPCION</p>
            <p>POLITICAS Y GARANTIAS</p>
            <p>COMENTARIOS</p>
        </div>
        <div className='text-[18px] text-[#3C4A5B] w-[1110px] mx-auto '>
            <div className='flex bg-[#ECEEF0] py-2'>
                <p className='w-1/2'>Genero</p>
                <p className='w-1/2'>Hombre</p>
            </div>
            <div className='flex  py-2' >
                <p className='w-1/2'>Color</p>
                <p>Negro</p>
            </div>
            <div className='flex bg-[#ECEEF0] py-2'>
                <p className='w-1/2'>Talla</p>
                <p>44</p>
            </div>
            <div className='flex  py-2'>
                <p className='w-1/2'>Zapatillas</p>
                <p>Si</p>
            </div>
            <div className='flex bg-[#ECEEF0] py-2'>
                <p className='w-1/2'>Botines</p>
                <p>No</p>
            </div>

        </div>
    </div>
  )
}

export default Especifications