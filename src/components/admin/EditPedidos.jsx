'use client'
import { useRouter } from "next/navigation";

const EditPedidos = () => {

  const router = useRouter();

  return (
    <div className="w-[122px] h-[42px] modal-container bg-[#EDF0F1] rounded-[10px] text-[18px] text-[#3C4A5B] font-[400] absolute flex flex-col justify-center items-center z-30 left-[-70px] mt-1 ">
      <p onClick={()=>router.push('/admin/pedidos/detalle')} className=" cursor-pointer hover:text-black">Detalles</p>
    </div>
  )
}

export default EditPedidos