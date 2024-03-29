import React from "react";

const SubEspecificaciones = () => {
  return (
    <div className="text-[18px]  text-[#3C4A5B] xl:w-[1110px] lg:w-[950px] md:w-[700px] w-full px-2 md:px-0 mx-auto  ">
      <div className="flex bg-[#ECEEF0] py-2 pl-2">
        <p className="w-1/2">Genero</p>
        <p className="w-1/2">Hombre</p>
      </div>
      <div className="flex  py-2 pl-2">
        <p className="w-1/2">Color</p>
        <p>Negro</p>
      </div>
      <div className="flex bg-[#ECEEF0] py-2 pl-2">
        <p className="w-1/2">Talla</p>
        <p>44</p>
      </div>
      <div className="flex  py-2 pl-2">
        <p className="w-1/2">Zapatillas</p>
        <p>Si</p>
      </div>
      <div className="flex bg-[#ECEEF0] py-2 pl-2">
        <p className="w-1/2">Botines</p>
        <p>No</p>
      </div>
    </div>
  );
};

export default SubEspecificaciones;
