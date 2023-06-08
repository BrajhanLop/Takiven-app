import Image from "next/image";
import play from "../../assets/img/icons/play.png";

const GamerSection = () => {
  return (
    <div className="flex items-center gap-3 max-w-[1200px] mx-auto mt-10">
      <Image src={play} className="w-[55px]" />

      <p className="text-[#3FD077] text-[30px] font-[500]">Gamer</p>
      <hr className="mt-5 border-[#3FD07766] w-[80%] mx-auto " />
    </div>
  );
};

export default GamerSection;
