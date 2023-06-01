import { images } from "@/helpers/images";
import Image from "next/image";

const ImgGallery = () => {
  return (
    <div className="relative flex">
      {images.map((img, index) => (
        <Image src={images[index]} alt="Imagen 1" className="" />
      ))}
    </div>
  );
};

export default ImgGallery;
