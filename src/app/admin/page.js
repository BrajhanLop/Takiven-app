import Card from "@/components/admin/Card";
import React from "react";
import card1 from "../../assets/img/admin/card1.svg";
import card2 from "../../assets/img/admin/card2.svg";
import start from "../../assets/img/admin/start.png";
import uservend from "../../assets/img/admin/uservend.png";
import despacho from "../../assets/img/admin/despacho.png";
import Image from "next/image";
import Sidebar from "@/components/admin/Sidebar";
import NavbarAdmin from "@/components/admin/NavbarAdmin";
import Footer from "@/components/admin/Footer";
import packages from "../../assets/img/admin/svg/bx-package.svg";
import arrow from "../../assets/img/admin/svg/bx-arrow-to-top.svg";
import star from "../../assets/img/admin/svg/bxs-star-half.svg";
import user from "../../assets/img/admin/svg/bxs-user-voice.svg";
import usercheck from "../../assets/img/admin/svg/bxs-user-check.svg";
import "./styles.css";

const page = () => {
  return (
    <div className=" bg-[#EDF0F1]  flex">
      <div className="flex flex-col gap-1 max-w-[1350px]">
        <NavbarAdmin />
        <div className="flex flex-col ml-[90px] lg:flex-row">
          <div className="lg:w-7/12 w-full flex flex-col gap-5 justify-between">
            <div className="flex justify-evenly  md:justify-around xl:justify-between flex-wrap gap-2  p-4 ">
              <Card img={arrow} title="Ventas del lunes" amount="S/. 1,000.00" color="#3FD077" />
              <Card img={arrow} title="Ventas de la semana" amount="S/. 2,000.00" color="#3FD077" />
              <Card
                img={arrow}
                title="Ventas total del mes"
                amount="S/. 8,000.00"
                color="#3FD077"
              />
              <Card img={usercheck} title="Usuarios Online" amount="100" color="#3FD0A4" />
              <Card img={usercheck} title="Usuarios Registrados" amount="1500" color="#3FD0A4" />
              <Card img={usercheck} title="Nuevos Usuarios" amount="120" color="#3FD0A4" />
            </div>

            <div className="bg-white rounded-[20px] text-[#3C4A5B]  p-4 mx-4 ">
              <div className="flex gap-3">
                <div
                  className={`w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-[#3FD0D0]`}>
                  <Image src={packages} alt="" />
                </div>
                <p className=" xl:text-[28px] md:text-[26px] text-[22px] font-[400]">Despacho</p>
              </div>
              <div className="">
                <div className=" flex xl:text-[18px] lg:text-[15px] text-[10px] justify-between font-[400] pt-4 ">
                  <p className=" md:w-1/4 text-center">Repartidor</p>
                  <p className=" md:w-1/4 text-center">Distrito</p>
                  <p className=" md:w-1/4 text-center">Status</p>
                  <p className=" md:w-1/4 text-center">Fecha</p>
                  <p className=" md:w-1/4 text-center"></p>
                </div>
                <hr className=" border-1 border-black mb-3" />
                <div className="custom-scroll-container overflow-y-scroll p-4 h-[300px]">
                  <div className="flex justify-between py-2 xl:text-[18px] md:text-[15px] text-[10px] mb-3  items-center">
                    <p className=" md:w-1/4 text-center">Paulo Abad</p>
                    <p className=" md:w-1/4 text-center">Jesus Maria</p>
                    <p className=" md:w-1/4 text-center">En camino</p>
                    <p className=" md:w-1/4 text-center">25/07/23</p>
                    <p className=" md:w-1/4 text-center bg-[#EDF0F1] rounded-[10px] cursor-pointer px-2">
                      Detalle
                    </p>
                  </div>
                  <div className="flex  justify-between py-2 xl:text-[18px] md:text-[15px] text-[10px] mb-3  items-center">
                    <p className=" md:w-1/4 text-center">Takiven Perú</p>
                    <p className=" md:w-1/4 text-center">San Martin de Porres</p>
                    <p className=" md:w-1/4 text-center">Recibido</p>
                    <p className=" md:w-1/4 text-center">22/07/23</p>
                    <p className=" md:w-1/4 text-center bg-[#EDF0F1] rounded-[10px] cursor-pointer px-2">
                      Detalle
                    </p>
                  </div>
                  <div className="flex justify-between py-2 xl:text-[18px] md:text-[15px] text-[10px] mb-3 items-center ">
                    <p className=" md:w-1/4 text-center">Juan Peña</p>
                    <p className=" md:w-1/4 text-center">Independencia</p>
                    <p className=" md:w-1/4 text-center">Entregado</p>
                    <p className="md:w-1/4 text-center">28/07/23</p>
                    <p className=" md:w-1/4 text-center bg-[#EDF0F1] rounded-[10px] cursor-pointer px-2">
                      Detalle
                    </p>
                  </div>
                  <div className="flex justify-between py-2 xl:text-[18px] md:text-[15px] text-[10px] mb-3 items-center">
                    <p className=" md:w-1/4 text-center">Takiven Perú</p>
                    <p className=" md:w-1/4 text-center">San Miguel</p>
                    <p className=" md:w-1/4 text-center">Recibido</p>
                    <p className=" md:w-1/4 text-center">27/07/23</p>
                    <p className=" md:w-1/4 text-center bg-[#EDF0F1] rounded-[10px] cursor-pointer px-2">
                      Detalle
                    </p>
                  </div>
                  <div className="flex justify-between py-2 xl:text-[18px] md:text-[15px] text-[10px] mb-3 items-center">
                    <p className=" md:w-1/4 text-center">Takiven Perú</p>
                    <p className=" md:w-1/4 text-center">San Miguel</p>
                    <p className=" md:w-1/4 text-center">Recibido</p>
                    <p className=" md:w-1/4 text-center">27/07/23</p>
                    <p className=" md:w-1/4 text-center bg-[#EDF0F1] rounded-[10px] cursor-pointer px-2">
                      Detalle
                    </p>
                  </div>
                  <div className="flex justify-between py-2 xl:text-[18px] md:text-[15px] text-[10px] mb-3 items-center">
                    <p className=" md:w-1/4 text-center">Takiven Perú</p>
                    <p className=" md:w-1/4 text-center">San Miguel</p>
                    <p className=" md:w-1/4 text-center">Recibido</p>
                    <p className=" md:w-1/4 text-center">27/07/23</p>
                    <p className=" md:w-1/4 text-center bg-[#EDF0F1] rounded-[10px] cursor-pointer px-2">
                      Detalle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-5/12 w-full">
            <div className=" py-4 px-4 text-[#3C4A5B] bg-white rounded-[20px] mt-4 mx-4">
              <div className=" flex gap-3 h-[40px] ">
                <div
                  className={`w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-[#D0B03F]`}>
                  <Image src={star} alt="" />
                </div>
                <h3 className="xl:text-[28px] lg:text-[24px] text-[22px]  font-[400]">
                  Productos mas vendidos
                </h3>
              </div>
              <div className="">
                <div className=" flex xl:text-[18px] md:text-[15px] text-[13px]  font-[400] pt-4 ">
                  <p className=" w-1/4 text-center">IMG</p>
                  <p className=" w-1/4 text-center">Nombre</p>
                  <p className=" w-1/4 text-center">SKU</p>
                  <p className=" w-1/4 text-center">Vendidos</p>
                </div>
                <hr className=" border-1 border-black mb-2 " />
                <div className="custom-scroll-container overflow-y-scroll p-2 h-[270px]">
                  <div className="flex py-2 xl:text-[18px] md:text-[15px] text-[13px]  items-center">
                    <div className=" w-1/4 flex justify-center">
                      <div className="w-[68px] h-[74px] border border-black"></div>
                    </div>
                    <p className=" w-1/4 text-center">Iphone 13</p>
                    <p className=" w-1/4 text-center">TK-010001</p>
                    <p className=" w-1/4 text-center">23</p>
                  </div>
                  <div className="flex py-2 xl:text-[18px] md:text-[15px] text-[13px]  items-center">
                    <div className=" w-1/4 flex justify-center">
                      <div className="w-[68px] h-[74px] border border-black"></div>
                    </div>
                    <p className=" w-1/4 text-center">Iphone 13</p>
                    <p className=" w-1/4 text-center">TK-010001</p>
                    <p className=" w-1/4 text-center">23</p>
                  </div>
                  <div className="flex py-2 xl:text-[18px] md:text-[15px] text-[13px]  items-center">
                    <div className=" w-1/4 flex justify-center">
                      <div className="w-[68px] h-[74px] border border-black"></div>
                    </div>
                    <p className=" w-1/4 text-center">Iphone 13</p>
                    <p className=" w-1/4 text-center">TK-010001</p>
                    <p className=" w-1/4 text-center">23</p>
                  </div>
                  <div className="flex py-2 xl:text-[18px] md:text-[15px] text-[13px]  items-center">
                    <div className=" w-1/4 flex justify-center">
                      <div className="w-[68px] h-[74px] border border-black"></div>
                    </div>
                    <p className=" w-1/4 text-center">Iphone 13</p>
                    <p className=" w-1/4 text-center">TK-010001</p>
                    <p className=" w-1/4 text-center">23</p>
                  </div>
                  <div className="flex py-2 xl:text-[18px] md:text-[15px] text-[13px]  items-center">
                    <div className=" w-1/4 flex justify-center">
                      <div className="w-[68px] h-[74px] border border-black"></div>
                    </div>
                    <p className=" w-1/4 text-center">Iphone 13</p>
                    <p className=" w-1/4 text-center">TK-010001</p>
                    <p className=" w-1/4 text-center">23</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" py-4 px-4 text-[#3C4A5B] bg-white rounded-[20px] mt-4 mx-4">
              <div className=" flex gap-3 ">
                <div
                  className={`w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-[#D0B03F]`}>
                  <Image src={user} alt="" />
                </div>
                <h3 className="xl:text-[28px] lg:text-[26px] font-[400] text-[22px] ">Usuarios</h3>
              </div>
              <div className="">
                <div className=" flex xl:text-[18px] md:text-[15px] text-[12px] font-[400] pt-4  ">
                  <p className=" w-1/4 text-center">Nombre</p>
                  <p className=" w-1/4 text-center">Email</p>
                  <p className=" w-1/4 text-center">Rol</p>
                  <p className=" w-1/4 text-center">Status</p>
                </div>
                <hr className=" border-1 border-black mb-3" />

                <div className="custom-scroll-container overflow-y-scroll p-2 h-[200px]">
                  <div className="flex py-2 xl:text-[18px] md:text-[15px] text-[12px]  items-center mb-3">
                    <p className=" w-1/4 text-center">Paulo Abad</p>
                    <p className=" w-1/4 text-center">paulo@.com</p>
                    <p className=" w-1/4 text-center">Admin</p>
                    <div className=" w-1/4 flex justify-center">
                      <p className="w-[20px] h-[20px] bg-[#29E197] rounded-full"></p>
                    </div>
                  </div>
                  <div className="flex py-2 xl:text-[18px] md:text-[15px] text-[12px] items-center mb-3">
                    <p className=" w-1/4 text-center">Brajhan Lopez</p>
                    <p className=" w-1/4 text-center">brajhan@.com</p>
                    <p className=" w-1/4 text-center">Editor</p>
                    <div className=" w-1/4 flex justify-center">
                      <p className="w-[20px] h-[20px] bg-[#29E197] rounded-full"></p>
                    </div>
                  </div>
                  <div className="flex py-2 xl:text-[18px] md:text-[15px] text-[12px]   items-center mb-3">
                    <p className=" w-1/4 text-center">Juan Velazco</p>
                    <p className=" w-1/4 text-center">juan@.com</p>
                    <p className=" w-1/4 text-center">Editor</p>
                    <div className=" w-1/4 flex justify-center">
                      <p className="w-[20px] h-[20px] bg-[#E12929] rounded-full"></p>
                    </div>
                  </div>
                  <div className="flex py-2 xl:text-[18px] md:text-[15px] text-[12px]   items-center mb-3">
                    <p className=" w-1/4 text-center">Juan Velazco</p>
                    <p className=" w-1/4 text-center">juan@.com</p>
                    <p className=" w-1/4 text-center">Editor</p>
                    <div className=" w-1/4 flex justify-center">
                      <p className="w-[20px] h-[20px] bg-[#E12929] rounded-full"></p>
                    </div>
                  </div>
                  <div className="flex py-2 xl:text-[18px] md:text-[15px] text-[12px]   items-center mb-3">
                    <p className=" w-1/4 text-center">Juan Velazco</p>
                    <p className=" w-1/4 text-center">juan@.com</p>
                    <p className=" w-1/4 text-center">Editor</p>
                    <div className=" w-1/4 flex justify-center">
                      <p className="w-[20px] h-[20px] bg-[#E12929] rounded-full"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
