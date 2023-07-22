"use client";
import Image from "next/image";
import left from "../../assets/img/svg/left.svg";
import rigth from "../../assets/img/svg/rigth.svg";
import cohete from "../../assets/img/svg/rocket.svg";
import CardProduct from "../Product/CardProduct";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Relacionados = ({ category }) => {

  const sliderRef = useRef(null);
  const [swichtCat, setSwichtCat] = useState(true);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const router = useRouter();

  const handleScrollLeft = () => {
    sliderRef.current.scrollLeft -= 200;
  };

  const handleScrollRight = () => {
    sliderRef.current.scrollLeft += 200;
  };
  return (
    <div className="mx-auto overflow-hidden mt-10">
      <h3 className="text-[#3C4A5B] text-[24px] font-[500]">¡Lo piensas y lo tienes!</h3>

      {swichtCat && (
        <div className="flex items-center justify-center px-1">
          <div className="flex-none cursor-pointer" onClick={handleScrollLeft}>
            <Image src={left} alt="" className="w-[40px]" />
          </div>
          <div
            className="max-w-[300px]  md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] flex gap-4 mt-8 flex-row flex-nowrap overflow-auto scroll-smooth scrollbar-hide"
            ref={sliderRef}>
            {arr.map((ar, index) => (
              <CardProduct key={index} />
            ))}
          </div>
          <div className="flex-none cursor-pointer" onClick={handleScrollRight}>
            <Image src={rigth} alt="" className="w-[40px]" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Relacionados