import Card from "@/components/admin/Card";
import NavbarAdmin from "@/components/admin/NavbarAdmin";
import card1 from "../../../assets/img/admin/card1.svg";
import despacho from "../../../assets/img/admin/despacho.png";

const page = () => {
  return (
    <div className="flex flex-col max-w-[1350px] w-full">
      <NavbarAdmin />
      <div className="ml-[90px] flex flex-col gap-2">
        <div className="bg-white rounded-[20px] ">
          <div className="flex justify-evenly">
            <Card img={card1} title="Ventas del día" amount="S/. 1,000.00" />
            <div className="border-l border-[#3C4A5B] my-4"></div>
            <Card img={card1} title="Ventas de la semana" amount="S/. 10,000.00" />
            <div className="border-l border-[#3C4A5B] my-4"></div>
            <Card img={despacho} title="Pedidos nuevos" amount="+20" />
            <div className="border-l border-[#3C4A5B] my-4"></div>
            <Card img={despacho} title="Entregados" amount="120" />
            <div className="border-l border-[#3C4A5B] my-4"></div>
            <Card img={despacho} title="Pedidos Totales" amount="140" />
          </div>
        </div>

        <div className="w-[1292px] h-[630px] bg-white px-10 py-3">
          <h4 className="text-[28px] text-[#3C4A5B] font-[500]">Filtros</h4>
          <div className="flex justify-between">
            <select className="w-[375px] h-[45px] text-[24px] text-[#3C4A5B] border border-[#3C4A5B] rounded-[10px] px-2">
              <option value="">Estatus</option>
            </select>
            <select className="w-[375px] h-[45px] text-[24px] text-[#3C4A5B] border border-[#3C4A5B] rounded-[10px] px-2">
              <option value="">Categoria</option>
            </select>
            <select className="w-[375px] h-[45px] text-[24px] text-[#3C4A5B] border border-[#3C4A5B] rounded-[10px] px-2">
              <option value="">Con stock</option>
            </select>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between">
            <input type="text" placeholder="Buscar producto" className="border border-[#3C4A5B] rounded-[10px] px-2 text-[22px]" />
            <button className="bg-green h-[45px] text-[24px] text-white   w-[272px]  rounded-lg">+ Agregar Producto</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
