"use client";
import Image from "next/image";
import { BiHomeAlt, BiStore, BiSolidTruck, BiUser, BiCog } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import takivn from "../../assets/img/admin/takiven.png";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const [isHoverpedido, setIsHoverpedido] = useState(false);
  const [isHovercuenta, setIsHovercuenta] = useState(false);
  const [isAjuste, setIsAjuste] = useState(false);
  const [isTienda, setIsTienda] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const router = useRouter();
  const ruta = usePathname();
  console.log(usePathname());

  return (
    <div className="fixed h-screen left-0 top-0 bg-[#EDF0F1] w-[90px] flex flex-col gap-5 items-center">
      <div>
        <Image src={takivn} alt="" />
      </div>
      <div
        onClick={() => router.push("/admin")}
        className={
          ruta === "/admin"
            ? "cursor-pointer text-[40px] w-full  hover:left-6  hover:w-[160px] text-white bg-[#3C4A5B] gap-4 flex justify-center items-center rounded-r-[20px] py-2 relative z-20"
            : "cursor-pointer text-[40px] w-full hover:left-6 hover:w-[160px] text-[#3C4A5B] hover:text-white hover:bg-[#3C4A5B] gap-4 flex justify-center items-center rounded-r-[20px] py-2 relative z-20"
        }
        onMouseEnter={() => setIsHome(true)}
        onMouseLeave={() => setIsHome(false)}>
        <BiHomeAlt />
        <p
          className={`text-[18px]  z-30  pr-2 text-white absolute  cursor-pointer ${
            isHome ? "opacity-100 relative" : "opacity-0"
          }`}>
          Home
        </p>
      </div>

      <div
        onClick={() => router.push("/admin/tienda")}
        className={
          ruta === "/admin/tienda"
            ? "cursor-pointer text-[40px] w-full  hover:left-6  hover:w-[160px] text-white bg-[#3C4A5B] gap-4 flex justify-center items-center rounded-r-[20px] py-2 relative z-20"
            : "cursor-pointer text-[40px] w-full hover:left-6 hover:w-[160px] text-[#3C4A5B] hover:text-white hover:bg-[#3C4A5B] gap-4 flex justify-center items-center rounded-r-[20px] py-2 relative z-20"
        }
        onMouseEnter={() => setIsTienda(true)}
        onMouseLeave={() => setIsTienda(false)}>
        <BiStore className=" " />
        <p
          className={`text-[18px]  z-30  pr-2 text-white absolute  cursor-pointer ${
            isTienda ? "opacity-100 relative" : "opacity-0"
          }`}>
          Tienda
        </p>
      </div>

      <div
      onClick={() => router.push("/admin/pedidos")}
        className={`cursor-pointer text-[40px] w-full hover:left-6 hover:w-[160px] text-[#3C4A5B] hover:text-white hover:bg-[#3C4A5B] gap-4 flex justify-center items-center rounded-r-[20px] py-2 relative z-20`}
        onMouseEnter={() => setIsHoverpedido(true)}
        onMouseLeave={() => setIsHoverpedido(false)}>
        <FaTruck />
        <p
          className={`text-[18px]  z-30  pr-2 text-white absolute  cursor-pointer ${
            isHoverpedido ? "opacity-100 relative" : "opacity-0"
          }`}>
          Pedidos
        </p>
      </div>

      <div
        className="cursor-pointer text-[40px] w-full hover:left-6 hover:w-[160px] text-[#3C4A5B] hover:text-white hover:bg-[#3C4A5B] gap-4 flex justify-center items-center rounded-r-[20px] py-2 relative z-20"
        onMouseEnter={() => setIsHovercuenta(true)}
        onMouseLeave={() => setIsHovercuenta(false)}>
        <BiUser />
        <p
          className={`text-[18px]  z-30  pr-2 text-white absolute  cursor-pointer ${
            isHovercuenta ? "opacity-100 relative" : "opacity-0"
          }`}>
          Mi cuenta
        </p>
      </div>

      <div
        className="cursor-pointer text-[40px] w-full  hover:left-6 hover:w-[160px] text-[#3C4A5B] hover:text-white hover:bg-[#3C4A5B] gap-4 flex justify-center items-center rounded-r-[20px] py-2 relative z-20"
        onMouseEnter={() => setIsAjuste(true)}
        onMouseLeave={() => setIsAjuste(false)}>
        <BiCog />
        <p
          className={`text-[18px]  z-30  pr-2 text-white absolute  cursor-pointer ${
            isAjuste ? "opacity-100 relative" : "opacity-0"
          }`}>
          Ajustes
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
