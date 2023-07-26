import Card from "@/components/admin/Card";
import React from "react";
import card1 from "../../assets/img/admin/card1.svg";
import card2 from "../../assets/img/admin/card2.svg";
import Image from "next/image";
import Sidebar from "@/components/admin/Sidebar";
const page = () => {
  return (
    <div className=" bg-[#EDF0F1]  flex">
      <div className="flex max-w-[1200px]">
        <Sidebar />
        <div className="w-full flex">
          <div className="flex flex-wrap gap-2 p-4 w-4/6">
            <Card img={card1} title="Ventas del lunes" amount="S/. 1,000.00" />
            <Card img={card1} title="Ventas de la semana" amount="S/. 2,000.00" />
            <Card img={card1} title="Ventas total del mes" amount="S/. 8,000.00" />
            <Card img={card2} title="Usuarios Online" amount="100" />
            <Card img={card2} title="Usuarios Registrados" amount="1500" />
            <Card img={card2} title="Nuevos Usuarios" amount="120" />
          </div>
          <div className="w-2/6">
              <h3>Productos mas vendidos</h3>
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
