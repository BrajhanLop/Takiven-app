import React from "react";

const DatosSocio = () => {
  return (
    <div className=" xl:max-w-[1200px] w-full  xl:mt-24 lg:mt-10 mt-5">
      <div>
        <h2 className="text-[38px] md:text-[40px] font-[700] text-green pl-5 xl:pl-0">
          Datos de socio
        </h2>
        <hr className="mb-3" />
        <p className="bg-[#F6F6F6] text-[#3C4A5B] py-3 px-5 text-[20px] text-justify">
          La información que te identifica como cliente de Takiven no puede ser editada. Si alguno
          de los datos no es correcto o quieres cambiarlo, escríbenos a{" "}
          <span className="font-[700]">hola@takiven.com.pe</span> colocando como asunto{" "}
          <span className="font-[700]">Actualizacion de Datos.</span>
        </p>
        <div className="flex justify-center my-10 ">
          <div className="flex gap-x-10 gap-y-5 px-5 lg:mx-0 flex-wrap w-full lg:w-[900px]">
            <div className="w-[360px] lg:w-[380px]">
              <p className="text-[20px] font-[400] text-[#00000033]">Nombre Completo</p>
              <p className="text-[30px] lg:text-[32px] font-[400] text-[#00000033] ">
                Paulo Cesar Abad Navarro
              </p>
            </div>
            <div>
              <p className="text-[20px] font-[400] text-[#00000033]">Tipo de documento</p>
              <p className="text-[30px] lg:text-[32px] font-[400] text-[#00000033]">DNI</p>
            </div>
            <div>
              <p className="text-[20px] font-[400] text-[#00000033]">Tipo de documento</p>
              <p className="text-[30px] lg:text-[32px] font-[400] text-[#00000033]">74490011</p>
            </div>
            <div className="w-[330px] lg:w-[380px]">
              <p className="text-[20px] font-[400] text-[#00000033]">Fecha de nacimiento</p>
              <p className="text-[30px] lg:text-[32px] font-[400] text-[#00000033]">16/04/1999</p>
            </div>
            <div>
              <p className="text-[20px] font-[400] text-[#00000033]">Genero</p>
              <p className="text-[30px] lg:text-[32px] font-[400] text-[#00000033]">HOMBRE</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className=" text-[38px] md:text-[40px] font-[700] text-green pl-5 xl:pl-0">
          Datos de contacto
        </h2>
        <hr className="mb-3" />
        <div className="flex justify-center my-10">
          <div className="flex gap-x-10 gap-y-5 justify-center  flex-wrap w-full lg:w-[950px]">
            <div className="w-[280px]">
              <p className="text-[20px] font-[400] text-[#3C4A5B]">Departamento</p>
              <select
                name=""
                id=""
                className="border-b border-black w-[274px] h-[40px] bg-transparent focus:outline-none text-[#00000033]"
              >
                <option value="">Elija una opcion</option>
              </select>
            </div>
            <div className="w-[280px]">
              <p className="text-[20px] font-[400] text-[#3C4A5B]">Provincia</p>
              <select
                name=""
                id=""
                className="border-b border-black w-[274px] h-[40px] bg-transparent focus:outline-none text-[#00000033]"
              >
                <option value="">Elija una opcion</option>
              </select>
            </div>
            <div className="w-[280px]">
              <p className="text-[20px] font-[400] text-[#3C4A5B]">Distrito</p>
              <select
                name=""
                id=""
                className="border-b border-black w-[274px] h-[40px] bg-transparent focus:outline-none text-[#00000033]"
              >
                <option value="">Elija una opcion</option>
              </select>
            </div>
            <div className="w-[280px]">
              <p className="text-[20px] font-[400] text-[#3C4A5B]">Dirección</p>
              <input
                type="text"
                className="border-b border-black w-[274px] h-[40px] bg-transparent focus:outline-none text-[#00000033]"
              />
            </div>
            <div className="w-[280px]">
              <p className="text-[20px] font-[400] text-[#3C4A5B]">Referencia</p>
              <input
                type="text"
                className="border-b border-black w-[274px] h-[40px] bg-transparent focus:outline-none text-[#00000033]"
              />
            </div>
            <div className="w-[280px]">
              <p className="text-[20px] font-[400] text-[#3C4A5B]">Contacto</p>
              <input
                type="text"
                className="border-b border-black w-[274px] h-[40px] bg-transparent focus:outline-none text-[#00000033]"
              />
            </div>
            <div className="w-[280px]">
              <p className="text-[20px] font-[400] text-[#3C4A5B]">Correo electronico</p>
              <input
                type="text"
                className="border-b border-black w-[274px] h-[40px] bg-transparent focus:outline-none text-[#00000033]"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 bg-[#F6F6F6] px-5 py-3 rounded-[20px]">
          <input type="checkbox" className="w-[27px]" />
          <p className="text-[#3C4A5B] text-[16px] md:text-[20px] text-justify">
            Acepto recibir promociones, descuentos y publicidad de Takiven mediante el uso de datos
            personales brindados
          </p>
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-[#C7C9CD] px-5 py-3 text-[26px] rounded-[20px] mt-5">
            GUARDAR
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className=" text-[38px] md:text-[40px] font-[700] text-green pl-3 md:pl-5 xl:pl-0">
          Cambiar contraseña
        </h2>
        <hr className="mb-3" />
        <div className="flex justify-center my-10">
          <div className="flex gap-x-10 gap-y-5  flex-wrap w-[950px] justify-center">
            <div className="w-[280px]">
              <p className="text-[20px] font-[400] text-[#3C4A5B]">Nueva Contraseña</p>
              <input
                type="text"
                className="border-b border-black w-[274px] h-[40px] bg-transparent focus:outline-none text-[#00000033]"
              />
            </div>
            <div className="w-[280px]">
              <p className="text-[20px] font-[400] text-[#3C4A5B]">Confirmar contraseña</p>
              <input
                type="text"
                className="border-b border-black w-[274px] h-[40px] bg-transparent focus:outline-none text-[#00000033]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="text-white bg-[#C7C9CD] px-5 py-3 text-[26px] rounded-[20px] mt-5">
            GUARDAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatosSocio;
