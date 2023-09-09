"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import logo from '../../assets/img/logo/Logoc.png'

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const submit = data => {
    console.log(data);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[619px] lg:[610px] bg-[#f2f6fb] md:bg-white flex flex-col md:px-10 md:pt-16 pb-10   md:rounded-[57px]">
        <div className="flex justify-center">
            <Image src={logo} />
        </div>
        <hr className="mt-5 border-[#3FD07766] w-[80%] mx-auto mb-5" />
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-2 md:gap-3">
          <div className="flex flex-col">
            {/* <label
          htmlFor=""
          className="text-[24px] md:text-[24px] md:font-[500]"
        >
          Correo electronico
        </label> */}
            <input
              className="border-2 border-[#DADEE3] rounded-[12px] h-[63px] text-[24px] px-3"
              placeholder="RUC"
              type="text"
              {...register("email", {
                required: {
                  value: true,
                  message: "El correo es requerido"
                },
                pattern: {
                  value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                  message: "ingrese un email válido "
                }
              })}
            />
            <p className=" text-[#FF5576]">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col">
            {/* <label
          htmlFor=""
          className="text-[24px] md:text-[24px] md:font-[500]"
        >
          Correo electronico
        </label> */}
            <input
              className="border-2 border-[#DADEE3] rounded-[12px] h-[63px] text-[24px] px-3"
              placeholder="Usuario"
              type="text"
              {...register("email", {
                required: {
                  value: true,
                  message: "El correo es requerido"
                },
                pattern: {
                  value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                  message: "ingrese un email válido "
                }
              })}
            />
            <p className=" text-[#FF5576]">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col">
            {/* <label htmlFor="" className="text-[24px] md:font-[500]">
          Contraseña
        </label> */}
            <input
              type="password"
              placeholder="Contraseña"
              className="border-2 border-[#DADEE3] text-[24px]   rounded-[12px] h-[63px] px-3 "
              {...register("password", {
                required: {
                  value: true,
                  message: "la contraseña es requerida"
                },
                pattern: {
                  value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i,
                  message:
                    "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula "
                },
                maxLength: 18
              })}
            />
            <p className=" text-[#FF5576]">{errors.password?.message}</p>
          </div>

          <button
            type="submit"
            className=" bg-white text-[24px] text-green border border-green w-[320px] md:w-[350px]  py-3 rounded-lg mx-auto lg:w-full hover:bg-green hover:text-white hover:duration-500">
            Iniciar Sesion
          </button>
          <div className="mx-auto">
            <p className=" text-[24px] text-green font-[400]  mx-auto cursor-pointer">
              ¿Olvidaste tu contraseña?
            </p>
            <hr className="mt-2 border-[#3FD07766] w-[80%] mx-auto mb-2" />
          </div>
          <button className=" bg-green text-[24px] text-white px-10  py-3 w-[320px] md:w-[350px] rounded-lg mx-auto">
            Crear cuenta nueva
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
