import GamerSection from '@/components/Dashboard/GamerSection'

import Detail from '@/components/productodetail/Detail'
import Especifications from '@/components/productodetail/Especifications'
import Relacionados from '@/components/productodetail/Relacionados'
import React from 'react'

const page = () => {
  return (
    <div>

      <p className='text-[#D2D0D0] text-[20px] mt-5 mb-5 ml-3 lg:ml-0'>Takiven/ Gamer/Nombre de Producto</p>
      <Detail/>
      <Especifications/>
      <Relacionados/>
      {/* <GamerSection/> */}
      
    </div>
  )
}

export default page