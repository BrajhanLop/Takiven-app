import Image from "next/image";
import left from "../../assets/img/icons/left.png";
import { useRouter } from "next/navigation";

const ImageLeft = () => {
  const router = useRouter();
  return <Image src={left} alt="left" className=" cursor-pointer" onClick={() => router.back()} />;
};

export default ImageLeft;
