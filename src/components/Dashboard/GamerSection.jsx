"use client";
import Image from "next/image";
import play from "../../assets/img/icons/play.png";
import cohete from "../../assets/img/icons/cohete.png";
import CardProduct from "../Product/CardProduct";
const GamerSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center gap-3 max-w-[1200px] mx-auto mt-10">
        <Image src={play} className="w-[55px]" alt="play" />

        <p className="text-[#3FD077] text-[30px] font-[500]">Gamer</p>
        <hr className="mt-5 border-[#3FD07766] w-[80%] mx-auto " />
        <Image src={cohete} className="w-[55px] " alt="cohete" />
        <p className="text-[#3FD077] text-[30px] font-[500]">Ver</p>
        <p className="text-[#3FD077] text-[30px] font-[500]">más</p>
      </div>

      <div className="flex gap-4 mt-5">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
};

export default GamerSection;
