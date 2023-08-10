"use client";
import Image from "next/image";
import { BiHomeAlt, BiStore, BiSolidTruck, BiUser, BiCog } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import takivn from "../../assets/img/admin/takiven.png";
import { useRouter, usePathname } from "next/navigation";

const Sidebar = () => {
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
            : "cursor-pointer text-[40px] w-full  hover:left-6  hover:w-[160px] text-[#3C4A5B]  gap-4 flex justify-center items-center rounded-r-[20px] py-2 relative z-20"
        }>
        <BiHomeAlt />
        <p className="text-[18px] h-[60px] w-[100px] opacity-0 hover:w-auto  hover:h-auto  z-30  pr-2 text-white absolute  hover:relative hover:opacity-100 ">
          Home
        </p>
      </div>

      <div
        onClick={() => router.push("/admin/tienda")}
        className={
          ruta === "/admin/tienda"
          ? "cursor-pointer text-[40px] w-full  hover:left-6  hover:w-[160px] text-white bg-[#3C4A5B] gap-4 flex justify-center items-center rounded-r-[20px] py-2 relative z-20"
          : "cursor-pointer text-[40px] w-full  hover:left-6  hover:w-[160px] text-[#3C4A5B]  gap-4 flex justify-center items-center rounded-r-[20px] py-2 relative z-20"
        }>
        <BiStore className=" " />
        <p className="text-[18px] h-[60px] hover:h-auto opacity-0 z-30  pr-2 text-[white] absolute  hover:relative hover:opacity-100 ">
          Tienda
        </p>
      </div>

      <div className="tcursor-pointer text-[40px] w-full hover:left-6 hover:w-[160px] text-[#3C4A5B] hover:text-white hover:bg-[#3C4A5B] gap-4 flex justify-center items-center rounded-r-[20px] py-2 relative z-20">
        <FaTruck />
        <p className="text-[18px] h-[60px] hover:h-auto opacity-0 z-30  pr-2 text-white absolute  hover:relative hover:opacity-100 cursor-pointer">
          Pedidos
        </p>
      </div>

      <div className="cursor-pointer text-[40px] w-full hover:left-6 hover:w-[160px] text-[#3C4A5B] hover:text-white hover:bg-[#3C4A5B] gap-4 flex justify-center items-center rounded-r-[20px] py-2 relative z-20">
        <BiUser />
        <p className="text-[18px] h-[60px] hover:h-auto opacity-0 z-30  pr-2 text-white absolute  hover:relative hover:opacity-100 ">
          Mi cuenta
        </p>
      </div>

      <div className="cursor-pointer text-[40px] w-full  hover:left-6 hover:w-[160px] text-[#3C4A5B] hover:text-white hover:bg-[#3C4A5B] gap-4 flex justify-center items-center rounded-r-[20px] py-2 relative z-20">
        <BiCog />
        <p className="text-[18px] h-[60px] hover:h-auto opacity-0 z-30  pr-2 text-white absolute  hover:relative hover:opacity-100 ">
          Ajustes
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
