"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import left from "../../assets/img/icons/left.png";
import { useRouter } from "next/navigation";
import ImageLeft from "./ImageLeft";

const Phone = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const router = useRouter();

  const submit = data => {
    console.log(data);
    router.push("/welcome");
  };
  return (
    <div className="max-w-[350px] sm:max-w-[450px]    bg-[#f2f6fb] md:max-w-[550px] md:bg-white flex flex-col gap-3 md:px-10 md:pt-16 pb-10   md:rounded-[57px]">
      <div className="flex justify-center lg:justify-start gap-2">
        {/* <Image src={left} alt="left" /> */}
        <ImageLeft />
        <h2 className="text-[30px] font-[700] text-title">Número de Teléfono</h2>
      </div>

      <form onSubmit={handleSubmit(submit)} className="flex flex-col mx-5 gap-5 md:gap-5">
        <div className="flex flex-col">
          <label htmlFor="" className="text-[24px] text-subtext md:text-[24px] md:font-[400]">
            Contacto 1
          </label>
          <input
            className="border-2 border-[#e3dada] rounded-xl h-[63px] text-[24px] px-3"
            type="number"
            {...register("contacto1", {
              required: {
                value: true,
                message: "Este campo es obligatorio"
              }
            })}
          />
          <p className=" text-[#FF5576]">{errors.contacto1?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-[24px] text-subtext  md:font-[400]">
            Contacto 2
          </label>
          <input
            type="text"
            className="border-2 border-[#e3dada] text-[24px]   rounded-xl h-[63px] px-3 "
            {...register("contacto2")}
          />
        </div>

        <p className="text-[20px] xl:mb-10">
          De los numeros proporcionados, al menos uno de ellos debe contar con WhatsApp
        </p>
        <button
          type="submit"
          className=" bg-green text-[24px] text-white w-[320px] md:w-[350px]  py-3 rounded-lg mx-auto"
        >
          Siguiente
        </button>
      </form>
    </div>
  );
};

export default Phone;
