import Image from "next/image";
import React from "react";

const Detail = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-5">
      <div className="xl:w-[637px] lg:w-[500px] xl:h-[491px] lg:h-[400px] md:w-[400px] md:h-[300px] w-[300px] h-[300px] border border-[#3FD077]"></div>

      <div className="xl:w-[553px] lg:w-[450px] md:w-[450px] w-[320px] text-[#3C4A5B] mt-5">
        <p className="text-[22px] font-[300]">Marca</p>
        <p className="text-[24px] font-[500]">NOMBRE DEL PRODUCTO</p>
        <p className="text-[22px] font-[300]">
          Vendido por: <span className="font-[400]">Takiven</span>
        </p>
        <p className="text-[22px] font-[300]">
          Codigo: <span className="font-[400]">TK-019011</span>
        </p>

        <div className="my-5 text-[18px]">
          <div className="flex justify-between">
            <p>Precio de Lista:</p>
            <p className="text-[16px] line-through">S/. 1990.00</p>
          </div>

          <div className="flex justify-between">
            <p>Oferta:</p>
            <p>S/. 1290.00</p>
          </div>
        </div>

        <div className="flex justify-between gap-2 my-5">
          <div className=" flex gap-8">
            <button className="bg-[#ECEEF0] w-[40px] h-[40px] rounded-[5px] text-[22px] font-[700]">
              -
            </button>
            <p className="text-[22px] font-[700]">1</p>
            <button className="bg-[#3FD077] text-white w-[40px] h-[40px] rounded-[5px] text-[22px] font-[700]">
              +
            </button>
          </div>
          <button className="bg-[#3FD077] text-white w-[275px] h-[40px] rounded-[5px] text-[18px] font-[300]">
            Agregar al carrito
          </button>
        </div>

        <div className=" hidden lg:flex gap-3">
          <div className="w-[175px] h-[153px] border border-[#3FD077]"></div>
          <div className="w-[175px] h-[153px] border border-[#3FD077]"></div>
          <div className="w-[175px] h-[153px] border border-[#3FD077]"></div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
