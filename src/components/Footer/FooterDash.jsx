"use client";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
// import { BiPhone } from "react-icons/bi";

import info from "../../assets/img/svg/info.svg";
import terminos from "../../assets/img/svg/terminos.svg";
import politicas from "../../assets/img/svg/poli.svg";
import cambios from "../../assets/img/svg/cambios.svg";
import offer from "../../assets/img/svg/offer.svg";
import phone from "../../assets/img/svg/phone.svg";
import mail from "../../assets/img/svg/mail.svg";
import pedido from "../../assets/img/svg/truck.svg";
import inst from "../../assets/img/svg/inst.svg";
import face from "../../assets/img/svg/face.svg";
import mark from "../../assets/img/svg/mark.svg";
import logo from "../../assets/img/logo/logo.png";
import visa from "../../assets/img/tarjetas/visa.png";
import master from "../../assets/img/tarjetas/master.png";
import dinner from "../../assets/img/tarjetas/dinner.png";
import amex from "../../assets/img/tarjetas/amex.png";
import union from "../../assets/img/tarjetas/union.png";
import culqui from "../../assets/img/tarjetas/culqui.png";
import libro from "../../assets/img/logo/img.png";
import Image from "next/image";
import Link from "next/link";
const FooterDash = () => {
  const isBrowser = () => typeof window !== "undefined";

  isBrowser();
  return (
    <div>
      <div
        className="mt-5 bg-green text-white flex justify-center items-center gap-3
      lg:gap-6 h-[59px]"
      >
        {/* <div className="flex items-center gap-2">
          <div>
            <Image src={info} alt="info" />
          </div>
          <Link href="/">
            <p className=" text-[20px] font-[500]">Acerca de Nosotros</p>
          </Link>
        </div> */}
        <div className="flex items-center gap-2 ">
          <div>
            <Image src={terminos} alt="info" className="w-[34px] md:w-[24px]" />
          </div>
          <Link href="/dashboard/term">
            <p className=" hidden md:block text-[14px] lg:text-[16px] xl:text-[20px] font-[500]">
              Terminos y condiciones
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <Image src={politicas} alt="info" className="w-[34px] md:w-[24px]" />
          </div>
          <Link href="/dashboard/politica">
            <p className="hidden md:block text-[14px] lg:text-[16px]  xl:text-[20px] font-[500]">
              Politicas de Privacidad
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <Image src={cambios} alt="info" className="w-[34px] md:w-[24px]" />
          </div>
          <Link href="/dashboard/cambios">
            <p className=" hidden md:block text-[14px] lg:text-[16px]  xl:text-[20px] font-[500]">
              Cambios y Devoluciones
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <Image src={offer} alt="info" className="w-[34px] md:w-[24px]" />
          </div>
          <Link href="/dashboard/legales">
            <p className="hidden md:block text-[14px] lg:text-[16px]  xl:text-[20px] font-[500]">
              Oferta y Promociones
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col px-3 md:px-0 md:flex-row gap-5 ">
        <div className=" md:w-[30%] flex justify-end">
          <div className="lg:w-[294px] lg:pr-6 lg:pt-5">
            <div className="flex justify-center">
              <Image src={logo} alt="logo" className="w-[200px] lg:w-[250px]" />
            </div>
            <p className="text-[18px] font-[300] text-justify px-2 lg:px-0 lg:pl-5">
              Somos un Marketplace online donde encontrarás la selección más grande de productos de
              las mejores tiendas del Perú.
            </p>
          </div>
          <div className="hidden md:flex items-center">
            <div className="w-px h-[80%] bg-gray-300"></div>
          </div>
        </div>
        <hr className="md:hidden" />
        <div className=" md:w-[34%]">
          <h3 className=" text-[#29E197] text-[32px] xl:text-[32px] lg:text-[32px] font-[700] mt-5 mb-4 text-center">
            ¿Necesitas Ayuda?
          </h3>
          <p className=" text-[18px] font-[300] mb-3">
            Conversa con nosotros de lunes a viernes de 9:00 am a 9:00pm y sábado de 9:00 am a 1:00
            pm
          </p>
          <div className="ml-5 flex flex-col gap-2">
            <div className="flex gap-1">
              <div>
                <Image src={phone} alt="info" />
                {/* <BiPhone /> */}
              </div>
              <p className=" text-[18px] font-[300]">
                Llamanos <span className="text-[#29E197] font-[500]">al (01) 679-9828</span>
              </p>
            </div>
            <div className="flex  gap-1">
              <div>
                <Image src={mail} alt="info" />
              </div>
              <p className=" text-[18px] font-[300]">
                Escribenos
                <span className="text-[#29E197] font-[500] ml-1">hola@takiven.com.pe</span>
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
        <hr className="md:hidden" />
        <div className=" md:w-[36%] flex">
          <div className="flex items-center">
            <div className="hidden md:block w-px h-[80%] bg-gray-300"></div>
          </div>
          <div className="md:pl-5">
            <h3 className=" text-[#29E197] text-[32px] text-center xl:text-[32px] lg:text-[32px] font-[700] mt-5 mb-3">
              ¿Quieres vender en Takiven?
            </h3>
            <p className=" text-[18px] font-[300] mb-3">
              Conoce los beneficios y{" "}
              <span className="text-[#29E197] font-[500]">dejános tus datos</span>
            </p>
            <div className="flex justify-between md:mb-14">
              <div className="flex">
                <div>
                  {/* <Image src={inst} alt="info" className="w-[50px]" /> */}

                  <AiFillInstagram className="text-[50px] text-[#29E197]" />
                </div>
                <div>
                  {/* <Image src={face} alt="info" className="w-[50px] " /> */}
                  <MdFacebook className="text-[50px] text-[#29E197]" />
                </div>
              </div>
              <div>
                <Image src={libro} alt="info" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col items-center gap-3 md:flex-row justify-evenly py-5">
        <div className="flex items-center gap-3">
          <p className=" hidden md:block text-[18px] font-[300]">Métodos de pago: </p>
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
          <p className=" hidden md:block text-[18px] font-[300]">Pagos seguros con:</p>
          <div>
            <Image src={culqui} alt="info" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 bg-[#3FD077] py-1">
        <div>
          <Image src={mark} alt="info" className="w-[22px]" />
        </div>
        <p className="text-[14px] md:text-[18px] font-[500] text-white ">
          {" "}
          2023 Takiven - Todos los derechos reservados
        </p>
      </div>
    </div>
  );
};

export default FooterDash;
