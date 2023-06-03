"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import left from "../../assets/img/icons/left.png";


const AddresForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
 


  const submit = (data) => {
    console.log(data);

  
  };
  return (
    <div className="max-w-[350px] sm:max-w-[450px]    bg-[#f2f6fb] md:max-w-[550px] md:bg-white flex flex-col gap-3 md:px-10 md:pt-16 pb-10   md:rounded-[57px]">
      <div className="flex justify-center lg:justify-start gap-2">
        <Image src={left} alt="left" />
        <h2 className="text-[30px] font-[700] text-title">
          Dirección de entregas
        </h2>
      </div>

      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col mx-5 gap-5 md:gap-5"
      >
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-[24px] text-subtext md:text-[24px] md:font-[500]"
          >
            Direccion Completa
          </label>
          <input
            className="border-2 border-[#e3dada] rounded-md h-[63px] text-[24px] px-3"
            type="text"
            {...register("addres", {
              required: {
                value: true,
                message: "La dirección es requerida",
              },
            })}
          />
          <p className=" text-[#FF5576]">{errors.addres?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-[24px] text-subtext  md:font-[500]">
            Distrito
          </label>
          <input
            type="text"
            className="border-2 border-[#e3dada] text-[24px]   rounded-md h-[63px] px-3 "
            {...register("dist", {
              required: {
                value: true,
                message: "El Distrito es requerido",
              }
            })}
          />
          <p className=" text-[#FF5576]">{errors.dist?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-[24px] text-subtext  md:font-[500]">
            Departamento
          </label>
          <input
            type="text"
            className="border-2 border-[#e3dada] text-[24px] text-subtext    rounded-md h-[63px] px-3 "
            {...register("dep", {
              required: {
                value: true,
                message: "El departamento es requerido",
              },
            })}
          />

          <p className=" text-[#FF5576]">{errors.dep?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-[24px] text-subtext  md:font-[500]">
            Referencia
          </label>
          <input
            type="text"
            className="border-2 border-[#e3dada] text-[24px] text-subtext    rounded-md h-[63px] px-3 "
            {...register("ref", {
              required: {
                value: true,
                message: "la referencia es requerida",
              },
            })}
          />

          <p className=" text-[#FF5576]">{errors.ref?.message}</p>
        </div>
        <p className="text-[18px] xl:mb-10">
          La direccion de entrega debe ser real y proporcionada de manera
          correcta por el usuario
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

export default AddresForm;
