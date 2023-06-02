"use client";
import { useRouter } from "next/navigation";

const Register = ({ toggle }) => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/register");
  };

  return (
    <div className="w-[90%] md:w-[80%] lg:w-1/2 bg-white flex flex-col md:px-10 md:pt-16 pb-10   md:rounded-[57px]">
      <div>
        <h2 className="text-[30px] font-[700] text-title">
          Iniciar Sesión en Takiven
        </h2>
        <p className=" text-title text-[18px] md:text-[22px]">
          ¿Ya tienes cuenta?{" "}
          <span className=" text-green font-[700]" onClick={toggle}>
            Iniciar Sesion
          </span>
        </p>
      </div>
      <hr className="mt-5 border-[#3FD07766] w-[80%] mx-auto mb-8" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-5">
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-[24px] md:text-[24px] md:font-[500]"
          >
            Dirección de correo electronico
          </label>
          <input
            className="border-2 border-[#e3dada] rounded-md h-[63px] text-[24px] "
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-[24px] md:font-[500]">
            Contraseña
          </label>
          <input
            type="text"
            className="border-2 border-[#e3dada] text-[24px]   rounded-md h-[63px] "
          />
        </div>
        <p className=" text-[20px] leading-6 xl:pb-5">
          La apertura de una cuenta Takiven está sujeta al estado, condiciones,
          controles de identidad y a personas mayores de 18 años.
        </p>
        <div className="flex items-start gap-2">
          <input type="checkbox" className="w-[30px] h-[30px]" />
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
