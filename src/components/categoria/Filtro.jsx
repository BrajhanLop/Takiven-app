import Image from "next/image";
import filter from "../../assets/img/svg/filter.svg";

const Filtro = () => {
  return (
    <div className=" hidden md:block w-[280px] h-[300px] bg-[#ECEEF0] rounded-[20px]">
      <div className=" bg-[#3FD077] text-white rounded-t-[20px] h-[62px] flex items-center gap-3 pl-3">
        <Image src={filter} alt="icon" />
        <p className=" text-[24px] font-semibold">Filtros</p>
      </div>
      <div className=" flex flex-col gap-3 px-2">
        <select className=" bg-transparent text-[20px] font-[500] mt-3">
          <option value="">Tipo</option>
        </select>
        <hr />
        <select className=" bg-transparent text-[20px] font-[500]">
          <option value="">Marca</option>
        </select>
        <hr />
        <p className="text-[20px] font-[500] ">Rango de Precios</p>
        <div className="flex items-center mx-5">
          <div className="w-[10px] h-[10px] bg-[#3FD077] rounded-full "></div>
          <hr className=" bg-[#3FD077] h-[3px] w-[100%] mx-auto" />
          <div className="w-[10px] h-[10px] bg-[#3FD077] rounded-full "></div>
        </div>
        <p className="text-[20px] text-center">S/ 1.00 - S/ 2000.00 </p>
      </div>
    </div>
  );
};

export default Filtro;
