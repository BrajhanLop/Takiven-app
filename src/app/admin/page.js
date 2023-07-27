import Card from "@/components/admin/Card";
import React from "react";
import card1 from "../../assets/img/admin/card1.svg";
import card2 from "../../assets/img/admin/card2.svg";
import start from "../../assets/img/admin/start.png";
import uservend from "../../assets/img/admin/uservend.png";
import despacho from "../../assets/img/admin/despacho.png";
import Image from "next/image";
import Sidebar from "@/components/admin/Sidebar";
const page = () => {
  return (
    <div className=" bg-[#EDF0F1]  flex">
      <div className="flex gap-1 max-w-[1350px]">
        <Sidebar />
        <div className="w-full flex">
          <div className="w-7/12">
            <div className="flex justify-between flex-wrap gap-2 p-4 ">
              <Card img={card1} title="Ventas del lunes" amount="S/. 1,000.00" />
              <Card img={card1} title="Ventas de la semana" amount="S/. 2,000.00" />
              <Card img={card1} title="Ventas total del mes" amount="S/. 8,000.00" />
              <Card img={card2} title="Usuarios Online" amount="100" />
              <Card img={card2} title="Usuarios Registrados" amount="1500" />
              <Card img={card2} title="Nuevos Usuarios" amount="120" />
            </div>
            <div className="bg-white rounded-[20px] p-4 mx-4 ">
              <div className="flex gap-3">
                <Image src={despacho} alt="" />
                <p className=" text-[28px] font-[400]">Despacho</p>
              </div>
              <div className="">
                <div className=" flex text-[18px] font-[400] pt-4 ">
                  <p className=" w-1/4 text-center">Repartidor</p>
                  <p className=" w-1/4 text-center">Distrito</p>
                  <p className=" w-1/4 text-center">Status</p>
                  <p className=" w-1/4 text-center">Fecha</p>
                  <p className=" w-1/4 text-center"></p>
                </div>
                <hr className=" border-1 border-black mb-3" />
                <div className="flex py-2 text-[18px] mb-3  items-center">
                  <p className=" w-1/4 text-center">Paulo Abad</p>
                  <p className=" w-1/4 text-center">Jesus Maria</p>
                  <p className=" w-1/4 text-center">En camino</p>
                  <p className=" w-1/4 text-center">25/07/23</p>
                  <p className=" w-1/4 text-center bg-[#EDF0F1] rounded-[10px] cursor-pointer">
                    Detalle
                  </p>
                </div>

                <div className="flex py-2 text-[18px] mb-3  items-center">
                  <p className=" w-1/4 text-center">Takiven Perú</p>
                  <p className=" w-1/4 text-center">San Martin de Porres</p>
                  <p className=" w-1/4 text-center">Recibido</p>
                  <p className=" w-1/4 text-center">22/07/23</p>
                  <p className=" w-1/4 text-center bg-[#EDF0F1] rounded-[10px] cursor-pointer">
                    Detalle
                  </p>
                </div>
                <div className="flex py-2 text-[18px] mb-3 items-center">
                  <p className=" w-1/4 text-center">Juan Peña</p>
                  <p className=" w-1/4 text-center">Independencia</p>
                  <p className=" w-1/4 text-center">Entregado</p>
                  <p className=" w-1/4 text-center">28/07/23</p>
                  <p className=" w-1/4 text-center bg-[#EDF0F1] rounded-[10px] cursor-pointer">
                    Detalle
                  </p>
                </div>
                <div className="flex py-2 text-[18px] mb-3 items-center">
                  <p className=" w-1/4 text-center">Takiven Perú</p>
                  <p className=" w-1/4 text-center">San Miguel</p>
                  <p className=" w-1/4 text-center">Recibido</p>
                  <p className=" w-1/4 text-center">27/07/23</p>
                  <p className=" w-1/4 text-center bg-[#EDF0F1] rounded-[10px] cursor-pointer">
                    Detalle
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-5/12">
            <div className=" py-4 px-4 text-[#3C4A5B] bg-white rounded-[20px] mt-4">
              <div className=" flex gap-3 ">
                <Image src={start} alt="" />
                <h3 className="text-[28px] font-[400]">Productos mas vendidos</h3>
              </div>
              <div className="">
                <div className=" flex text-[18px] font-[400] pt-4 ">
                  <p className=" w-1/4 text-center">IMG</p>
                  <p className=" w-1/4 text-center">Nombre</p>
                  <p className=" w-1/4 text-center">SKU</p>
                  <p className=" w-1/4 text-center">Vendidos</p>
                </div>
                <hr className=" border-1 border-black " />
                <div className="flex py-2 text-[18px]  items-center">
                  <div className=" w-1/4 flex justify-center">
                    <div className="w-[68px] h-[74px] border border-black"></div>
                  </div>
                  <p className=" w-1/4 text-center">Iphone 13</p>
                  <p className=" w-1/4 text-center">TK-010001</p>
                  <p className=" w-1/4 text-center">23</p>
                </div>
                <div className="flex py-2 text-[18px]  items-center">
                  <div className=" w-1/4 flex justify-center">
                    <div className="w-[68px] h-[74px] border border-black"></div>
                  </div>
                  <p className=" w-1/4 text-center">Iphone 13</p>
                  <p className=" w-1/4 text-center">TK-010001</p>
                  <p className=" w-1/4 text-center">23</p>
                </div>
                <div className="flex py-2 text-[18px]  items-center">
                  <div className=" w-1/4 flex justify-center">
                    <div className="w-[68px] h-[74px] border border-black"></div>
                  </div>
                  <p className=" w-1/4 text-center">Iphone 13</p>
                  <p className=" w-1/4 text-center">TK-010001</p>
                  <p className=" w-1/4 text-center">23</p>
                </div>
              </div>
            </div>

            <div className=" py-4 px-4 text-[#3C4A5B] bg-white rounded-[20px] mt-4">
              <div className=" flex gap-3 ">
                <Image src={uservend} alt="" />
                <h3 className="text-[28px] font-[400] ">Usuarios</h3>
              </div>
              <div className="">
                <div className=" flex text-[18px] font-[400] pt-4  ">
                  <p className=" w-1/4 text-center">Nombre</p>
                  <p className=" w-1/4 text-center">Email</p>
                  <p className=" w-1/4 text-center">Rol</p>
                  <p className=" w-1/4 text-center">Status</p>
                </div>
                <hr className=" border-1 border-black mb-3" />
                <div className="flex py-2 text-[18px]  items-center mb-3">
                  <p className=" w-1/4 text-center">Paulo Abad</p>
                  <p className=" w-1/4 text-center">paulo@.com</p>
                  <p className=" w-1/4 text-center">Admin</p>
                  <div className=" w-1/4 flex justify-center">
                    <p className="w-[20px] h-[20px] bg-[#29E197] rounded-full"></p>
                  </div>
                </div>
                <div className="flex py-2 text-[18px]  items-center mb-3">
                  <p className=" w-1/4 text-center">Brajhan Lopez</p>
                  <p className=" w-1/4 text-center">brajhan@.com</p>
                  <p className=" w-1/4 text-center">Editor</p>
                  <div className=" w-1/4 flex justify-center">
                    <p className="w-[20px] h-[20px] bg-[#29E197] rounded-full"></p>
                  </div>
                </div>
                <div className="flex py-2 text-[18px]  items-center mb-3">
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

      {/* <div className='flex flex-wrap gap-2'>
            <Card img={card1} title = "Ventas del lunes" amount="S/. 1,000.00"  />
            <Card img={card1} title = "Ventas de la semana" amount="S/. 2,000.00"  />
            <Card img={card1} title = "Ventas total del mes" amount="S/. 8,000.00"  />
            <Card img={card2} title = "Usuarios Online" amount="100"  />
            <Card img={card2} title = "Usuarios Registrados" amount="1500"  />
            <Card img={card2} title = "Nuevos Usuarios" amount="120"  />
        </div>
        <div>
          <div>
          <Image src="" alt="" />
          <p>Despacho</p>
          </div>
        </div> */}
    </div>
  );
};

export default page;
