import iconos from "../../assets/img/icons/Iconos.png";
import Image from "next/image";

const ImgGallery = () => {
  return (
    <div className="flex justify-center xl:w-auto">
      <Image className=" md:w-[520px]" src={iconos} alt="icons" />
    </div>
  );
};

export default ImgGallery;
