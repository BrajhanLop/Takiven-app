"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import logo from "../../assets/img/logo/logo.png";
const Welcome = () => {
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
    <div className="px-2 max-w-[350px] h-full bg-white rounded-3xl sm:max-w-[450px]  md:max-w-[550px] xl:w-[619px] md:bg-white flex flex-col items-center justify-center gap-3 md:px-10 md:pt-16 pb-10   md:rounded-[57px]">
      <div className="my-auto flex flex-col justify-center items-center lg:justify-start gap-2">
        <h2 className="text-[26px] font-[700] text-title">
          Te damos la Bienvenida en
        </h2>
        <Image src={logo} alt="left" />
      </div>
      <form
        onSubmit={handleSubmit(submit)}
        className=" flex flex-col w-full mx-5 gap-5 md:gap-5"
      >
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

export default Welcome;
