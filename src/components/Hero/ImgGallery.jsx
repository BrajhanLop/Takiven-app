import iconos from './../../assets/img/icons/iconos.png'
import Image from "next/image";

const ImgGallery = () => {
  return (
    <div className="flex justify-center">
      <Image src={iconos} />
    </div>
  );
};

export default ImgGallery;
