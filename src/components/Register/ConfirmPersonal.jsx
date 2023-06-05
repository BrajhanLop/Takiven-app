import React from "react";
import { useForm } from "react-hook-form";
import check from "../../assets/img/icons/check.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ConfirmPersonal = ({ toggle, info }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const submit = (data) => {
    console.log(data);
    router.push("/register/addres");
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 m-auto bg-slate-300/60  flex justify-center items-center">
      <div className=" w-[500px] rounded-[36px]  px-3 py-5  bg-white flex flex-col pb-10 md:px-10 md:pt-16    md:rounded-[57px]">
        <div className="flex justify-center">
          <h2 className="text-[24px] font-[700] text-title mb-3">
            Confirmar Datos
          </h2>
        </div>
        <div className="bg-[#f2f6fb] px-5 py-4 rounded-[22px]">
          <div className="flex gap-2 ">
            <div>
              <Image src={check} alt="check" />
            </div>
            <div className=" text-subtext text-[20px]">
              <p className="font-[300]">Nombre legal completo</p>
              <p className="font-[500]">{info.name}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <Image src={check} alt="check" />
            </div>
            <div className=" text-subtext text-[20px]">
              <p className="font-[300]">N° DNI / C.E</p>
              <p className="font-[500]">{info.dni}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <Image src={check} alt="check" />
            </div>
            <div className=" text-subtext text-[20px]">
              <p className="font-[300]">Fecha de Nacimiento</p>
              <p className="font-[500]">{info.fechnac}</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-5 md:gap-5"
        >
          <div className="flex  gap-2 mt-3 mb-0">
            <input
              type="checkbox"
              className="w-[16px] h-[16px] mt-1"
              {...register("contract", {
                required: {
                  value: true,
                  message: "Debe certificar la información.",
                },
              })}
            />

            <p className="text-[18px] font-[300] leading-6 text-justify ">
              Certifico que la información enviada anteriormente es legalmente
              precisa y que esta es mi única cuenta de Takiven.
            </p>
          </div>
          <p className=" text-[#FF5576]">{errors.contract?.message}</p>
          <button
            onClick={() => toggle()}
            className=" text-green text-[24px] border border-green w-[320px] md:w-[350px]  py-3 rounded-lg mx-auto"
          >
            Editar datos
          </button>
          <button
            type="submit"
            className=" bg-green text-[24px] text-white w-[320px] md:w-[350px]  py-3 rounded-lg mx-auto"
          >
            Siguiente
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmPersonal;
