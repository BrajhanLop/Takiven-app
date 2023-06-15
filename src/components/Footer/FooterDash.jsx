import info from "../../assets/img/icons/info.png";
import terminos from "../../assets/img/icons/terminos.png";
import politicas from "../../assets/img/icons/politicas.png";
import cambios from "../../assets/img/icons/cambios.png";
import offer from "../../assets/img/icons/offer.png";
import phone from "../../assets/img/icons/phone.png";
import mail from "../../assets/img/icons/mail.png";
import pedido from "../../assets/img/icons/pedido.png";
import inst from "../../assets/img/svg/inst.svg";
import face from "../../assets/img/svg/face.svg";
import mark from "../../assets/img/icons/mark.png";
import logo from "../../assets/img/logo/logo.png";
import visa from "../../assets/img/tarjetas/visa.png";
import master from "../../assets/img/tarjetas/master.png";
import dinner from "../../assets/img/tarjetas/dinner.png";
import amex from "../../assets/img/tarjetas/amex.png";
import union from "../../assets/img/tarjetas/union.png";
import culqui from "../../assets/img/tarjetas/culqui.png";

import Image from "next/image";
const FooterDash = () => {
  const isBrowser = () => typeof window !== "undefined";

  isBrowser();
  return (
    <div>
      <div className="mt-5 bg-green text-white flex justify-center items-center gap-5 h-[59px]">
        <div className="flex items-center gap-2">
          <div>
            <Image src={info} alt="info" />
          </div>
          <p className=" text-[20px] font-[500]">Acerca de Nosotros</p>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Image src={terminos} alt="info" />
          </div>
          <p className=" text-[20px] font-[500]">Terminos y condiciones</p>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <Image src={politicas} alt="info" />
          </div>
          <p className=" text-[20px] font-[500]">Politicas de Privacidad</p>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <Image src={cambios} alt="info" />
          </div>
          <p className=" text-[20px] font-[500]">Cambios y Devoluciones</p>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <Image src={offer} alt="info" />
          </div>
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
              <div>
                <Image src={phone} alt="info" />
              </div>
              <p className=" text-[18px] font-[300]">
                Llamanos{" "}
                <span className="text-[#29E197] font-[500]">
                  al (01) 679-9828
                </span>
              </p>
            </div>
            <div className="flex  gap-1">
              <div>
                <Image src={mail} alt="info" />
              </div>
              <p className=" text-[18px] font-[300]">
                Escribenos
                <span className="text-[#29E197] font-[500] ml-1">
                  hola@takiven.com.pe
                </span>
              </p>
            </div>
            <div className="flex  gap-1">
              <div>
                <Image src={pedido} alt="info" />
              </div>
              <p className=" text-[18px] font-[300]">
                Sigue tu pedido en
                <span className="text-[#29E197] font-[500] ml-1">DINET</span>
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
              Conoce los beneficios y{" "}
              <span className="text-[#29E197] font-[500]">
                dejános tus datos
              </span>
            </p>
            <div className="flex mb-14">
              <div>
                <Image src={inst} alt="info" className="w-[50px]" />
              </div>
              <div>
                <Image src={face} alt="info" className="w-[50px] " />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <Image src={mark} alt="info" className="w-[22px]" />
              </div>
              <p className=" text-[18px] font-[300]">
                {" "}
                2023 Takiven - Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex justify-evenly py-5">
        <div className="flex items-center gap-3">
          <p className=" text-[18px] font-[300]">Métodos de pago: </p>
          <div className="flex gap-2">
            <div>
              <Image src={visa} alt="info" />
            </div>
            <div>
              <Image src={master} alt="info" />
            </div>
            <div>
              <Image src={dinner} alt="info" />
            </div>
            <div>
              <Image src={amex} alt="info" />
            </div>
            <div>
              <Image src={union} alt="info" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <p className=" text-[18px] font-[300]">Pagos seguros con:</p>
          <div>
            <Image src={culqui} alt="info" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDash;
