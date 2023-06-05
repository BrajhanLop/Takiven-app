"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import left from "../../assets/img/icons/left.png";
import useToggle from "@/hooks/useToggle";
import ConfirmPersonal from "./ConfirmPersonal";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PersonalInfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { isToggle, toggle } = useToggle();
  const [info, setInfo] = useState(null);
  const router = useRouter();

  const submit = (data) => {
    console.log(data);
    setInfo(data);
    toggle();
  };
  return (
    <>
      <div className="max-w-[350px] sm:max-w-[450px] bg-[#f2f6fb] md:max-w-[550px] md:bg-white flex flex-col md:px-10 md:pt-16 pb-10   md:rounded-[57px]">
        <div className="flex gap-2">
          <Image src={left} alt="left" className=" cursor-pointer" onClick={()=>router.back()} />
          <h2 className="text-[30px] font-[700] text-title">
            Información Personal
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-5 md:gap-5"
        >
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-[24px] text-subtext md:text-[24px] md:font-[500]"
            >
              Nombre Legal Completo
            </label>
            <input
              className="border-2 border-[#e3dada] rounded-md h-[63px] text-[24px] px-3"
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "El nombre es requerido",
                },
              })}
            />
            <p className=" text-[#FF5576]">{errors.name?.message}</p>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-[24px] text-subtext  md:font-[500]"
            >
              N° DNI / C.E
            </label>
            <input
              type="number"
              className="border-2 border-[#e3dada] text-[24px]   rounded-md h-[63px] px-3 "
              {...register("dni", {
                required: {
                  value: true,
                  message: "El N° de Documento es requerido",
                },
                pattern: {
                  value: /^[0-9,$]*$/i,
                  message: "El numero de identificación debe ser numerico",
                },
                maxLength: 18,
              })}
            />
            <p className=" text-[#FF5576]">{errors.dni?.message}</p>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-[24px] text-subtext  md:font-[500]"
            >
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              className="border-2 border-[#e3dada] text-[24px] text-subtext    rounded-md h-[63px] px-3 "
              {...register("fechnac", {
                required: {
                  value: true,
                  message: "la fecha es requerida",
                },
              })}
            />

            <p className=" text-[#FF5576]">{errors.fechnac?.message}</p>
          </div>
          <p className="text-[18px] xl:mb-10">
            La fecha de nacimiento debe coincidir con la de tu documento de
            identidad
          </p>
          <button
            type="submit"
            className=" bg-green text-[24px] text-white w-[320px] md:w-[350px]  py-3 rounded-lg mx-auto"
          >
            Siguiente
          </button>
        </form>
      </div>
      {isToggle && <ConfirmPersonal toggle={toggle} info={info} />}
    </>
  );
};

export default PersonalInfo;
