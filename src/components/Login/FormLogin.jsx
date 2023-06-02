import React from "react";

const FormLogin = ({toggle}) => {
  return (
    <div className="w-full md:w-[80%] lg:w-1/2 bg-white flex flex-col md:px-10 md:pt-16 pb-10   md:rounded-[57px]">
      <div>
        <h2 className="text-[30px] font-[700] text-title">
          Iniciar Sesión en Takiven
        </h2>
        <p className=" text-title text-[18px] md:text-[22px]">
          ¿No eres cliente?{" "}
          <span className=" text-green font-[700]" onClick={toggle}>Regístrate ahora</span>
        </p>
      </div>
      <hr className="mt-5 border-[#3FD07766] w-[80%] mx-auto mb-8" />
      <form className="flex flex-col gap-2 md:gap-5">
        <div className="flex flex-col">
          <label htmlFor="" className="text-[24px] md:text-[24px] md:font-[500]">
            Dirección de correo electronico
          </label>
          <input className="border-2 border-[#e3dada] rounded-md h-[63px] text-[24px] " type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-[24px] md:font-[500]">
            Contraseña
          </label>
          <input type="text" className="border-2 border-[#e3dada] text-[24px]   rounded-md h-[63px] " />
        </div>
        <p className=" text-[24px] text-green font-[700] xl:pb-5">
          Olvidaste tu contraseña
        </p>
        <button className=" bg-green text-[24px] text-white w-[320px] md:w-[350px]  py-3 rounded-lg mx-auto">
          Iniciar Sesion
        </button>
        <button className=" bg-yellow text-[24px] text-white px-10  py-3 w-[320px] md:w-[350px] rounded-lg mx-auto"
        onClick={toggle}>
          Registrate
        </button>
      </form>
    </div>
  );
};

export default FormLogin;