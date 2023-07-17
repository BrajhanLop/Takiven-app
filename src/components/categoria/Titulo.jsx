"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import play from "../../assets/img/icons/play.png";
import { arrayCategorias } from "@/helpers/categories";

const Titulo = ({ category }) => {
  const buscarCategory = () => {
    const result = arrayCategorias.find(cat => cat.categoria === category);
    return result;
  };

  // useEffect(() => {
  //   console.log(buscarCategory());
  // }, []);

  return (
    <div className="flex justify-between w-full mt-5 lg:mt-16 mb-5 max-w-[1280px] ">
      <div className="flex gap-3">
        <Image src={buscarCategory().img} alt="icon"/>
        <p className="text-[#3FD077] text-[20px] md:text-[24px] font-[400] font-rock">{category}</p>
      </div>
      <div className="pr-2 lg:pr-0">
        <select className="border border-[#29E197] px-3 py-1 rounded-xl text-[19px]">
          <option value="Relevancia">Relevancia</option>
          <option value="mas">Mayor precio primero</option>
          <option value="menos">Menor precio primero</option>
        </select>
      </div>
    </div>
  );
};

export default Titulo;
