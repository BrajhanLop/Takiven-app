import Image from "next/image";
import { BiHomeAlt, BiStore, BiSolidTruck, BiUser, BiCog } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-[#EDF0F1] w-[90px] flex flex-col gap-5 items-center">
      <div className="text-[40px] text-white bg-[#3C4A5B] w-full flex justify-center rounded-r-[20px] py-2 cursor-pointer">
        <BiHomeAlt />
      </div>

      <div className="text-[40px] text-[#3C4A5B] cursor-pointer">
        <BiStore />
      </div>

      <div className="text-[40px] text-[#3C4A5B] cursor-pointer">
        <FaTruck />
      </div>

      <div className="text-[40px] text-[#3C4A5B] cursor-pointer">
        <BiUser />
      </div>

      <div className="text-[40px] text-[#3C4A5B] cursor-pointer">
        <BiCog />
      </div>
    </div>
  );
};

export default Sidebar;
