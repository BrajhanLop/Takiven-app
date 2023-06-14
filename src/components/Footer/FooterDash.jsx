// import "boxicons";
import logo from "../../assets/img/logo/logo.png";
import Image from "next/image";
const FooterDash = () => {
  return (
    <div>
      <div className="mt-5 bg-green text-white flex justify-center items-center gap-5 h-[59px]">
        <div className="flex gap-2">
          {/* <box-icon name="info-circle" type="solid" color="#ffffff"></box-icon> */}
          <p className=" text-[20px] font-[500]">Acerca de Nosotros</p>
        </div>
        <div className="flex gap-2">
          {/* <box-icon name="file" color="#ffffff"></box-icon> */}
          <p className=" text-[20px] font-[500]">Terminos y condiciones</p>
        </div>

        <div className="flex gap-2">
          {/* <box-icon type="solid" name="check-shield" color="#ffffff"></box-icon> */}
          <p className=" text-[20px] font-[500]">Politicas de Privacidad</p>
        </div>

        <div className="flex gap-2">
          {/* <box-icon name="aperture" color="#ffffff"></box-icon> */}
          <p className=" text-[20px] font-[500]">Cambios y Devoluciones</p>
        </div>

        <div className="flex gap-2">
          {/* <box-icon type="solid" name="offer" color="#ffffff"></box-icon> */}
          <p className=" text-[20px] font-[500]">Oferta y Promociones</p>
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className=" w-[30%] flex justify-end">
          <div className="w-[294px] pr-6 pt-5">
            <div className="flex justify-center">
              <Image src={logo} alt="logo" className="w-[250px]" />
            </div>
            <p className="text-[18px] font-[300] text-justify">
              Somos un Marketplace online donde encontrarás la selección más
              grande de productos de las mejores tiendas del Perú.
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-px h-[80%] bg-gray-300"></div>
          </div>
        </div>

        <div className=" w-[34%]">
          <h3 className=" text-[#29E197] text-[32px] font-[700] mt-5 mb-4">
            ¿Necesitas Ayuda?
          </h3>
          <p className=" text-[18px] font-[300] mb-3">
            Conversa con nosotros de lunes a viernes de 9:00 am a 9:00pm y
            sábado de 9:00 am a 1:00 pm
          </p>
          <div className="ml-5 flex flex-col gap-2">
            <div className="flex gap-1">
              {/* <box-icon name="phone" type="solid" color="#29e197"></box-icon> */}
              <p className=" text-[18px] font-[300]">
                Llamanos al (01) 679-9828
              </p>
            </div>
            <div className="flex  gap-1">
              {/* <box-icon name="envelope" type="solid" color="#29e197"></box-icon> */}
              <p className=" text-[18px] font-[300]">
                Escribenos hola@takiven.com.pe
              </p>
            </div>
            <div className="flex  gap-1">
              {/* <box-icon type="solid" name="truck" color="#29e197"></box-icon> */}
              <p className=" text-[18px] font-[300]">
                Sigue tu pedido en DINET
              </p>
            </div>
          </div>
        </div>

        <div className=" w-[36%] flex">
          <div className="flex items-center">
            <div className="w-px h-[80%] bg-gray-300"></div>
          </div>
          <div className="pl-5">
            <h3 className=" text-[#29E197] text-[32px] font-[700] mt-5 mb-3">
              ¿Quieres vender en Takiven?
            </h3>
            <p className=" text-[18px] font-[300] mb-3">
              Conoce los beneficios y dejános tus datos
            </p>
            <div className="flex mb-14">
              {/* <box-icon
                name="facebook-circle"
                type="logo"
                color="#29e197"
                size="50px"
              ></box-icon>

              <box-icon
                name="instagram-alt"
                type="logo"
                color="#29e197"
                size="50px"
              ></box-icon> */}
            </div>
            <div>
              <p className=" text-[18px] font-[300]">
                {" "}
                2023 Takiven - Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div>
        <div>
          <p>Métodos de pago: </p>
        </div>

        <div>
          <p>PAgos seguros con:</p>
        </div>
      </div>
    </div>
  );
};

export default FooterDash;
