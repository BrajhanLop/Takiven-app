import Image from "next/image";
import React from "react";

const Detail = () => {
  return (
    <div className="flex gap-5">
      <div className="w-[637px] h-[491px] border border-[#3FD077]"></div>

      <div className="w-[553px] text-[#3C4A5B] mt-5">
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

        <div className="flex justify-between my-5">
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

        <div className="flex gap-3">
          <div className="w-[175px] h-[153px] border border-[#3FD077]"></div>
          <div className="w-[175px] h-[153px] border border-[#3FD077]"></div>
          <div className="w-[175px] h-[153px] border border-[#3FD077]"></div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
