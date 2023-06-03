'use client'
import { useForm } from "react-hook-form";

const FormLogin = ({ toggle }) => {
  const { register, handleSubmit,  reset, formState: {errors}  } = useForm();

  const submit = (data) => {
    console.log(data)
  }

  return (
    <div className="w-full lg:w-1/2 bg-[#f2f6fb] md:bg-white flex flex-col md:px-10 md:pt-16 pb-10   md:rounded-[57px]">
      <div>
        <h2 className="text-[30px] font-[700] text-title">
          Iniciar Sesión en Takiven
        </h2>
        <p className=" text-title text-[18px] md:text-[22px]">
          ¿No eres cliente?{" "}
          <span className=" text-green font-[500]" onClick={toggle}>
            Regístrate ahora
          </span>
        </p>
      </div>
      <hr className="mt-5 border-[#3FD07766] w-[80%] mx-auto mb-8" />
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-2 md:gap-5">
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-[24px] md:text-[24px] md:font-[500]"
          >
            Correo electronico
          </label>
          <input
            className="border-2 border-[#e3dada] rounded-md h-[63px] text-[24px] px-3"
            type="text"
            {...register("email" , { required: {
              value:true, message: "El correo es requerido"
            }, 
            pattern: {
                value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                message: "ingrese un email válido "
            }})}
          />
          <p className=" text-[#FF5576]">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-[24px] md:font-[500]">
            Contraseña
          </label>
          <input
            type="password"
            className="border-2 border-[#e3dada] text-[24px]   rounded-md h-[63px] px-3 "
            {...register("password", { required: {
              value:true, message: "la contraseña es requerida"
            }, 
            pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i,
                message: "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula "
            },
            maxLength: 18 })}
          />
          <p className=" text-[#FF5576]">{errors.password?.message}</p>
        </div>
        <p className=" text-[24px] text-green font-[500] xl:pb-5">
          Olvidaste tu contraseña
        </p>
        <button type="submit" className=" bg-green text-[24px] text-white w-[320px] md:w-[350px]  py-3 rounded-lg mx-auto">
          Iniciar Sesion
        </button>
        <button
          className=" bg-yellow text-[24px] text-white px-10  py-3 w-[320px] md:w-[350px] rounded-lg mx-auto"
          onClick={toggle}
        >
          Registrate
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
