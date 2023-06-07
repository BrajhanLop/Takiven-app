"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import marker from "../../assets/img/icons/marker.png";
import { useRouter } from "next/navigation";
import ImageLeft from "./ImageLeft";

const UbicationInfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const submit = (data) => {
    console.log(data);
    router.push("/register/phone");
  };
  return (
    <div className=" max-w-[350px] sm:max-w-[450px]    bg-[#f2f6fb] md:max-w-[550px] md:bg-white flex flex-col items-center gap-3 md:px-10 md:pt-16 pb-10   md:rounded-[57px]">
      <div className="flex justify-center lg:justify-start gap-2">
        <ImageLeft />
        {/* <Image src={left} alt="left" /> */}
        <h2 className="text-[30px] font-[700] text-title">
          Muestra tu Ubicación
        </h2>
      </div>
      <p className=" text-[24px] text-title">
        Indicanos donde llegaran tus pedidos
      </p>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col w-full mx-5 gap-5 md:gap-5"
      >
        <div className=" border-2 border-[#DADEE3] rounded-2xl h-[336px] flex justify-center items-center">
          <div className="w-full h-full">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62438.59013296546!2d-77.07540972326834!3d-12.01514003543415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1686155460389!5m2!1ses-419!2spe"
              style={{ border: 0 }}
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image src={marker} alt="Marker" className="w-8 h-8"  />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className=" bg-green text-[24px] text-white w-full md:w-[350px]  py-3 rounded-lg mx-auto"
        >
          Siguiente
        </button>
      </form>
    </div>
  );
};

export default UbicationInfo;
