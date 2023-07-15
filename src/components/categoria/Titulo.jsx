import Image from "next/image";
import React from "react";
import play from "../../assets/img/icons/play.png";

const Titulo = () => {
  return (
    <div className="flex justify-between w-full mt-16 mb-5 max-w-[1280px]">
      <div className="flex gap-3">
        <Image src={play} />
        <p className="text-[#3FD077] text-[20px] md:text-[24px] font-[400] font-rock">Gamer</p>
      </div>
      <div>
        <select className="border border-[#29E197] px-3 py-1 rounded-xl text-[19px]">
          <option value="Relevancia">Relevancia</option>
        </select>
      </div>
    </div>
  );
};

export default Titulo;
