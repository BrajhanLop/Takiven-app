"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Register = ({ toggle }) => {
  const { register, handleSubmit,  reset, formState: {errors}  } = useForm();
  const router = useRouter();
  const submit = (data) => {
    console.log(data)
    router.push("/register/personal");
  }




  return (
    <div className=" max-w-[340px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-max lg:w-1/2 bg-[#f2f6fb] md:bg-white flex flex-col md:px-10 md:pt-16 pb-10   md:rounded-[57px]">
      <div>
        <h2 className="text-[30px] font-[700] text-title">
          Unete a Takiven
        </h2>
        <p className=" text-title text-[18px] md:text-[22px]">
          ¿Ya tienes cuenta?{" "}
          <span className=" text-green font-[500]" onClick={toggle}>
            Iniciar Sesion
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
            className="px-3 border-2 border-[#e3dada] rounded-md h-[63px] text-[24px] "
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
            className="px-3 border-2 border-[#e3dada] text-[24px]   rounded-md h-[63px] "
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
        <p className=" text-[20px] leading-6 xl:pb-5">
          La apertura de una cuenta Takiven está sujeta al estado, condiciones,
          controles de identidad y a personas mayores de 18 años.
        </p>
        <div className="flex items-start gap-2">
          <input type="checkbox" className="w-[30px] h-[30px]" {...register("contract", {required: {
              value:true, message: "Debe aceptar los terminos y condiciones"
            }})} />
          <p className="text-[20px] ">
            Acepto los{" "}
            <span className=" text-green font-[500]">
              términos y condiciones
            </span>{" "}
            de Takiven y su{" "}
            <span className=" text-green font-[500]">
              política de privacidad.
            </span>
          </p>
          
        </div>
        <p className=" text-[#FF5576]">{errors.contract?.message}</p>
        <button
          type="submit"
          className=" bg-green text-[24px] text-white w-[320px] md:w-[350px]  py-3 rounded-lg mx-auto"
        >
          Siguiente
        </button>
      </form>
      {/* <button onClick={() => router.push("/login")}>redirigir</button> */}
    </div>
  );
};

export default Register;
