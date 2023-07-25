import Card from '@/components/admin/Card'
import React from 'react'
import card1 from "../../assets/img/admin/card1.svg";
import card2 from "../../assets/img/admin/card2.svg";
const page = () => {
  return (
    <div className=' bg-slate-200 flex'>
        <div className='w-[150px] bg-stone-400  '>

        </div>
        <div className='flex flex-wrap gap-2'>
            <Card img={card1} title = "Ventas del lunes" amount="S/. 1,000.00"  />
            <Card img={card1} title = "Ventas de la semana" amount="S/. 2,000.00"  />
            <Card img={card1} title = "Ventas total del mes" amount="S/. 8,000.00"  />
            <Card img={card2} title = "Usuarios Online" amount="100"  />
            <Card img={card2} title = "Usuarios Registrados" amount="1500"  />
            <Card img={card2} title = "Nuevos Usuarios" amount="120"  />
        </div>

    </div>
  )
}

export default page