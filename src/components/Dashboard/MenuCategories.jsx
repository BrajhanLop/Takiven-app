import Image from "next/image";
import play from "../../assets/img/icons/play.png";
import mascotas from "../../assets/img/icons/mascotas.png";
import computer from "../../assets/img/icons/computer.png";
import audio from "../../assets/img/icons/audio.png";
import belleza from "../../assets/img/icons/belleza.png";
import world from "../../assets/img/icons/world.png";
import love from "../../assets/img/icons/love.png";

const MenuCategories = () => {
  return (
    <div className=" bg-[#30F27B] w-[987px] h-[133px] flex justify-center gap-8 rounded rounded-b-[20px] pt-3">
      <div>
        <div className="p-3 border w-[80px] h-[80px] border-white rounded-full flex justify-center items-center">
          <Image src={play} />
        </div>
        <p className="text-center text-white text-[20px]">Gamer</p>
      </div>
      <div>
        <div className="p-3 border border-white rounded-full   w-[80px] h-[80px] flex justify-center items-center">
          <Image src={mascotas} className="m-0" />
        </div>
        <p className="text-center text-white text-[20px]">Mascotas</p>
      </div>
      <div>
        <div className="p-3 border border-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
          <Image src={computer} />
        </div>
        <p className="text-center text-white text-[20px]">Computo</p>
      </div>
      <div>
        <div className="p-3 border border-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
          <Image src={audio} />
        </div>
        <p className="text-center text-white text-[20px]">Audio</p>
      </div>
      <div>
        <div className="p-3 border border-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
          <Image src={belleza} />
        </div>
        <p className="text-center text-white text-[20px]">Belleza</p>
      </div>
      <div>
        <div className="p-3 border border-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
          <Image src={world} />
        </div>
        <p className="text-center text-white text-[20px]">Mundo</p>
      </div>
      <div>
        <div className="p-3 border border-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
          <Image src={love} />
        </div>
        <p className="text-center text-white text-[20px]">Love</p>
      </div>
    </div>
  );
};

export default MenuCategories;