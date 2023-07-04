import Image from "next/image";
import play from "../../assets/img/icons/play.png";
import mascotas from "../../assets/img/icons/mascotas.png";
import computer from "../../assets/img/icons/computer.png";
import audio from "../../assets/img/icons/audio.png";
import belleza from "../../assets/img/icons/belleza.png";
import world from "../../assets/img/icons/world.png";
import love from "../../assets/img/icons/love.png";

const MenuCategories = ({ catRef }) => {
  return (
    <div
      ref={catRef}
      className="fixed top-[95px] md:top-[80px] pb-3 bg-[#30F27B] lg:px-20 lg:h-[133px] w-[96%] md:w-[60%] lg:w-[62%] xl:w-[60%]  flex justify-center flex-wrap lg:items-center md:gap-2 xl:items-start  lg:gap-2 xl:gap-8 rounded rounded-b-[20px] pt-3"
    >
      <div className="flex flex-col items-center w-[80px]">
        <div className="p-3 border w-[50px] xl:w-[80px] lg:w-[70px]  xl:h-[80px] lg:h-[70px] border-white rounded-full flex justify-center items-center">
          <Image src={play} alt="play" />
        </div>
        <p className="text-center text-white text-[16px] lg:text-[20px] xl:text-[20px]">Gamer</p>
      </div>
      <div className="flex flex-col items-center w-[80px]">
        <div className="p-3 border border-white rounded-full w-[50px] xl:w-[80px] lg:w-[70px]  xl:h-[80px] lg:h-[70px] flex justify-center items-center">
          <Image src={mascotas} alt="play" className="m-0" />
        </div>
        <p className="text-center text-white text-[16px] xl:text-[20px]">Mascotas</p>
      </div>
      <div className="flex flex-col items-center w-[80px]">
        <div className="p-3 border border-white rounded-full w-[50px] xl:w-[80px] lg:w-[70px]  xl:h-[80px] lg:h-[70px]flex justify-center items-center">
          <Image alt="play" src={computer} />
        </div>
        <p className="text-center text-white text-[16px] xl:text-[20px]">Computo</p>
      </div>
      <div className="flex flex-col items-center w-[80px]">
        <div className="p-3 border border-white rounded-full w-[50px] xl:w-[80px] lg:w-[70px]  xl:h-[80px] lg:h-[70px] flex justify-center items-center">
          <Image alt="play" src={audio} />
        </div>
        <p className="text-center text-white xl:text-[20px]">Audio</p>
      </div>
      <div className="flex flex-col items-center w-[80px]">
        <div className="p-3 border border-white rounded-full w-[50px] xl:w-[80px] lg:w-[70px]  xl:h-[80px] lg:h-[70px] flex justify-center items-center">
          <Image alt="play" src={belleza} />
        </div>
        <p className="text-center text-white xl:text-[20px]">Belleza</p>
      </div>
      <div className="flex flex-col items-center w-[80px]">
        <div className="p-3 border border-white rounded-full w-[50px] xl:w-[80px] lg:w-[70px]  xl:h-[80px] lg:h-[70px] flex justify-center items-center">
          <Image alt="play" src={world} />
        </div>
        <p className="text-center text-white xl:text-[20px]">Mundo</p>
      </div>
      <div className="flex flex-col items-center w-[80px]">
        <div className="p-3 border border-white rounded-full w-[50px] xl:w-[80px] lg:w-[70px]  xl:h-[80px] lg:h-[70px] flex justify-center items-center">
          <Image alt="play" src={love} />
        </div>
        <p className="text-center text-white xl:text-[20px]">Love</p>
      </div>
    </div>
  );
};

export default MenuCategories;
