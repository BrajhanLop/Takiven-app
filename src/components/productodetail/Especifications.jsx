"use client";
import React, { useState } from "react";
import Descripción from "./Descripción";
import SubEspecificaciones from "./SubEspecificaciones";
import Garantias from "./Garantias";
import Comentarios from "./Comentarios";

const Especifications = () => {
  const [esp, SetEsp] = useState(true);
  const [desc, setDesc] = useState(false);
  const [poli, setPoli] = useState(false);
  const [com, setCom] = useState(false);


  const hadleEsp = () => {
    SetEsp(true)
    setDesc(false)
    setPoli(false)
    setCom(false)
  }

  const hadleDesc = () => {
    SetEsp(false)
    setDesc(true)
    setPoli(false)
    setCom(false)
  }

  const hadlePoli = () => {
    SetEsp(false)
    setDesc(false)
    setPoli(true)
    setCom(false)
  }

  const hadleCom = () => {
    SetEsp(false)
    setDesc(false)
    setPoli(false)
    setCom(true)
  }

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="flex w-[1130px] text-[20px] justify-around text-[#3C4A5B] mb-3">
        <p onClick={hadleEsp} className={esp ? 'font-[700] border-b-2 border-[#3C4A5B] cursor-pointer' : 'cursor-pointer'}>
          ESPECIFICACIONES
        </p>
        <p onClick={hadleDesc} className={desc ? 'font-[700] border-b-2 border-[#3C4A5B] cursor-pointer' : 'cursor-pointer'}>DESCRIPCION</p>
        <p onClick={hadlePoli} className={poli ? 'font-[700] border-b-2 border-[#3C4A5B] cursor-pointer' : 'cursor-pointer'}>POLITICAS Y GARANTIAS</p>
        <p onClick={hadleCom}  className={com ? 'font-[700] border-b-2 border-[#3C4A5B] cursor-pointer' : 'cursor-pointer'}>COMENTARIOS</p>
      </div>
      {esp && <SubEspecificaciones />}
      {desc && <Descripción />}
      {poli && <Garantias />}
      {com && <Comentarios />}

      {/* <SubEspecificaciones/> */}
      {/* <Descripción/> */}
      {/* <Garantias/> */}
      {/* <Comentarios/> */}
    </div>
  );
};

export default Especifications;
