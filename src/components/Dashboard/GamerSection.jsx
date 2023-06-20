"use client";
import Image from "next/image";
import play from "../../assets/img/icons/play.png";
import cohete from "../../assets/img/svg/rocket.svg";
import CardProduct from "../Product/CardProduct";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef } from "react";
const GamerSection = ({ category }) => {
  const sliderRef = useRef(null);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleScrollLeft = () => {
    sliderRef.current.scrollLeft -= 200; 
  };

  const handleScrollRight = () => {
    sliderRef.current.scrollLeft += 200; 
  };


  return (
    <div className="mx-auto overflow-hidden">
      <div className="flex items-center gap-3 mx-auto mt-10">
        <Image src={category.img} className="w-[55px]" alt="play" />

        <p className="text-[#3FD077] text-[30px] font-[400] font-rock">
          {category.categoria}
        </p>
        <hr className="mt-5 border-[#3FD07766] w-[80%] mx-auto " />
        <Image src={cohete} className="w-[55px] " alt="cohete" />
        <p className="text-[#3FD077] text-[30px] font-[400] font-rock">Ver</p>
        <p className="text-[#3FD077] text-[30px] font-[400] font-rock">más</p>
      </div>
      <div className="flex items-center ">
      <div className="flex-none">
        <button
          className="bg-gray-200 rounded-full p-2"
          onClick={handleScrollLeft}
        >
          <MdChevronLeft size={24} />
        </button>
      </div>
        <div className="lg:max-w-[1000px] xl:max-w-[1200px] flex gap-4 mt-5 flex-row flex-nowrap overflow-auto scroll-smooth scrollbar-hide" ref={sliderRef}>
          {arr.map((ar, index) => (
            <CardProduct key={index} />
          ))}
        </div>
        <div className="flex-none">
        <button
          className="bg-gray-200 rounded-full p-2"
          onClick={handleScrollRight}
        >
          <MdChevronRight size={24} />
        </button>
      </div>
      </div>
    </div>
  );
};

export default GamerSection;
