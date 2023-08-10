'use client'
import Card from "@/components/admin/Card";
import NavbarAdmin from "@/components/admin/NavbarAdmin";
import card1 from "../../../assets/img/admin/card1.svg";
import despacho from "../../../assets/img/admin/despacho.png";
import edit from '../../../assets/img/admin/svg/bxs-edit.svg'
import { BiToggleRight } from "react-icons/bi";
import { MdToggleOff } from "react-icons/md";
import Image from "next/image";
// import { useRouter, usePathname } from "next/navigation";


const page = () => {
  // const router = useRouter();
 
  // console.log(usePathname());


  const data = [
    {
      id: 1,
      producto: "Producto 1",
      categoria: "Zapatillas",
      stock: true,
      sku: "SKU123",
      precio: 100,
      cntd: 5,
      status: 'Publicado'
    },
    {
      id: 2,
      producto: "Producto 1",
      categoria: "Mascotas",
      stock: false,
      sku: "SKU123",
      precio: 100,
      cntd: 5,
      status: 'Pendiente'
    },
    {
      id: 3,
      producto: "Producto 1",
      categoria: "Computo",
      stock: true,
      sku: "SKU123",
      precio: 100,
      cntd: 5,
      status: 'Agotado'
    },
    {
      id: 4,
      producto: "Producto 1",
      categoria: "Computo",
      stock: true,
      sku: "SKU123",
      precio: 100,
      cntd: 5,
      status: "Pendiente"
    }
    // Agrega más datos ficticios aquí
  ];

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

        <div className="w-full h-[630px] bg-white px-10 py-3 rounded-[20px]">
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
            <input
              type="text"
              placeholder="Buscar producto"
              className="border border-[#3C4A5B] rounded-[10px] px-2 text-[22px]"
            />
            <button className="bg-green h-[45px] text-[24px] text-white   w-[272px]  rounded-[20px]">
              + Agregar Producto
            </button>
          </div>

          <div className="flex justify-center mt-8 text-[#3C4A5B]">
            <table className="w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-[#F3F3F4]">
                  <th className="px-6 py-3 text-left">
                    <input type="checkbox" />
                  </th>
                  <th className="px-6 py-3 text-left">PRODUCTO</th>
                  <th className="px-6 py-3 text-left">CATEGORIA</th>
                  <th className="px-6 py-3 text-left">STOCK</th>
                  <th className="px-6 py-3 text-left">SKU</th>
                  <th className="px-6 py-3 text-left">PRECIO</th>
                  <th className="px-6 py-3 text-left">CNTD</th>
                  <th className="px-6 py-3 text-left">STATUS</th>
                  <th className="px-6 py-3 text-left">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td className="px-6 py-4">
                      <input type="checkbox" />
                    </td>
                    <td className="px-6 py-4 flex flex-row items-center gap-2">
                      <div className="w-[45px] h-[45px] border border-black "></div>
                      <div>
                        <p className="text-[18px] font-[400]">{item.producto}</p>
                        <p className="text-[16px]">Nombre del product lorem</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">{item.categoria}</td>
                    <td className="px-6 py-4">
                      {item?.stock === true ? (
                        <div className=" text-[60px] text-green">
                          <BiToggleRight />
                        </div>
                      ) : (
                        <div className=" text-[60px] text-gray-300">
                          <MdToggleOff />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">{item.sku}</td>
                    <td className="px-6 py-4">{item.precio}</td>
                    <td className="px-6 py-4">{item.cntd}</td>
                    <td className="px-6 py-4">
                      {item?.status === 'Publicado' ? (
                        <p className="bg-[#E6F7D9] text-[#8BDA4F] text-center py-1 px-2  rounded-[5px]">Publicado</p>
                      ) : 
                      item?.status === 'Pendiente' ?
                      (
                        <p className="bg-[#FFF4D9] text-[#FFB608] text-center py-1 px-2  rounded-[5px]">Pendiente</p>
                      ):
                      (
                        <p className="bg-[#FFE4E5] text-[#FF8084] text-center py-1 px-2  rounded-[5px]">Agotado</p>
                      )
                      }
                    </td>
                    <td className="px-6 py-4">

                        <Image src={edit} alt="edit" className="" />

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
