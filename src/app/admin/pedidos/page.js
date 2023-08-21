import Card from "@/components/admin/Card";
import NavbarAdmin from "@/components/admin/NavbarAdmin";
import alert from "../../../assets/img/admin/alert.png";
import check from "../../../assets/img/admin/check.png";
import edit from "../../../assets/img/admin/svg/bxs-edit.svg";
import despacho from "../../../assets/img/admin/despacho.png";
import Image from "next/image";

const page = () => {
  const data = [
    {
      id: 1,
      producto: "TKIN-1002",
      categoria: "Zapatillas",
      stock: true,
      sku: "01/09/2023",
      precio: "1000.3",
      cntd: "Pendiente",
      cantidad: "10",
      status: "Entregado"
    },
    {
      id: 2,
      producto: "TKIN-1003",
      categoria: "Mascotas",
      stock: false,
      sku: "01/09/2023",
      precio: "200.30",
      cntd: "Cancelado",
      cantidad: "1",
      status: "Cancelado"
    },
    {
      id: 3,
      producto: "TKIN-1052",
      categoria: "Computo",
      stock: true,
      sku: "01/09/2023",
      precio: "500.30",
      cntd: "Pagado",
      cantidad: "8",
      status: "Entregado"
    },
    {
      id: 4,
      producto: "TKIN-1015",
      categoria: "Computo",
      stock: true,
      sku: "01/09/2023",
      precio: "750.50",
      cntd: "Pendiente",
      cantidad: "2",
      status: "Enviado"
    }
  ];
  return (
    <div className="flex flex-col max-w-[1350px] w-full">
      <NavbarAdmin />
      <div className="ml-[90px] flex flex-col gap-2">
        <div className="bg-white rounded-[20px] ">
          <div className="bg-white rounded-[20px] ">
            <div className="flex justify-evenly">
              <Card img={check} title="Ventas pagdas" amount="120" />
              <div className="border-l border-[#3C4A5B] my-4"></div>
              <Card img={check} title="Ventas totales" amount="S/. 40,000.00" />
              <div className="border-l border-[#3C4A5B] my-4"></div>
              <Card img={despacho} title="Pedidos nuevos" amount="+20" />
              <div className="border-l border-[#3C4A5B] my-4"></div>
              <Card img={despacho} title="Entregados" amount="120" />
              <div className="border-l border-[#3C4A5B] my-4"></div>
              <Card img={alert} title="Pedidos Perdidos" amount="10" />
            </div>
          </div>

          <div className="w-full pb-5 bg-white px-10 py-3 rounded-[20px]">
            <h4 className="text-[28px] text-[#3C4A5B] font-[500] ">Filtros</h4>
            <div className="flex justify-between">
              <div className="flex items-end gap-4">
                <select className="w-[375px] h-[45px] text-[24px] text-[#3C4A5B] border border-[#3C4A5B] rounded-[10px] px-2">
                  <option value="">Estatus</option>
                </select>
                <select className="w-[375px] h-[45px] text-[24px] text-[#3C4A5B] border border-[#3C4A5B] rounded-[10px] px-2">
                  <option value="">Pago</option>
                </select>
              </div>

              <div className="flex gap-4">
                <div>
                  <p className="text-[18px] text-[#3C4A5B] font-[300]">Desde:</p>
                  <input
                    className="border border-[#3C4A5B] w-[185px] h-[45px] rounded-[5px]"
                    type="text"
                  />
                </div>

                <div>
                  <p className="text-[18px] text-[#3C4A5B] font-[300]">Hasta:</p>
                  <input
                    className="border border-[#3C4A5B] w-[185px] h-[45px] rounded-[5px]"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Buscar producto"
                className="border border-[#3C4A5B] rounded-[20px] px-2 text-[22px] h-[45px]"
              />
            </div>

            <div className="flex justify-center mt-8 text-[#3C4A5B]">
              <table className="w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-[#F3F3F4]">
                    <th className="px-6 py-3 text-left">
                      <input type="checkbox" />
                    </th>
                    <th className="px-6 py-3 text-left">N° Orden Universal</th>
                    <th className="px-6 py-3 text-left"></th>
                    <th className="px-6 py-3 text-left">N° Orden</th>
                    <th className="px-6 py-3 text-left">Fecha</th>
                    <th className="px-6 py-3 text-left">Pago</th>
                    <th className="px-6 py-3 text-left">Precio</th>
                    <th className="px-6 py-3 text-left">CNTD</th>
                    <th className="px-6 py-3 text-left">Status</th>
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
                        <p className="text-[18px]  font-[500]">{item.producto}</p>
                      </td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4">
                        <p className="text-[18px] font-[400]"> IN-0001</p>
                      </td>
                      <td className="px-6 py-4">{item.sku}</td>
                      <td className="px-6 py-4">
                        {item?.cntd === "Pagado" ? (
                          <div className="flex items-center">
                            <p className="text-[30px] text-[#8BDA4F] ">•</p>
                            <p className="text-[18px] font-[400] text-[#8BDA4F] text-center py-1 px-1  rounded-[5px]">
                              Pagado
                            </p>
                          </div>
                        ) : item?.status === "Enviado" ? (
                          <div className="flex items-center">
                            <p className="text-[30px] text-[#FFB608] ">•</p>
                            <p className="text-[18px] font-[400] text-[#FFB608] text-center py-1 px-2  rounded-[5px]">
                              Enviado
                            </p>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <p className="text-[30px] text-[#FF8084] ">•</p>
                            <p className="text-[18px] font-[400] text-[#FF8084] text-center py-1 px-2  rounded-[5px]">
                              Cancelado
                            </p>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">S/. {item.precio}</td>
                      <td className="px-6 py-4"> {item.cantidad}</td>
                      <td className="px-6 py-4">
                        {item?.status === "Entregado" ? (
                          <p className="bg-[#E6F7D9] text-[#8BDA4F] text-center py-1 px-2  rounded-[5px]">
                            Entregado
                          </p>
                        ) : item?.status === "Enviado" ? (
                          <p className="bg-[#FFF4D9] text-[#FFB608] text-center py-1 px-2  rounded-[5px]">
                            Enviado
                          </p>
                        ) : (
                          <p className="bg-[#FFE4E5] text-[#FF8084] text-center py-1 px-2  rounded-[5px]">
                            Cancelado
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 relative">
                        <Image src={edit} alt="edit" className=" cursor-pointer" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
