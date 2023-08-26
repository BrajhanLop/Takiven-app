import Footer from "@/components/admin/Footer";
import NavbarAdmin from "@/components/admin/NavbarAdmin";

const data = [
  {
    id: 1,
    producto: "Producto 1",
    categoria: "S/. 420.00",
    stock: true,
    sku: "2",
    precio: "S/. 840.00",
    cntd: 5,
    status: "Publicado"
  },
  {
    id: 2,
    producto: "Producto 1",
    categoria: "S/. 120.00",
    stock: true,
    sku: "1",
    precio: "S/. 120.00",
    cntd: 5,
    status: "Pendiente"
  },
  {
    id: 3,
    producto: "Producto 1",
    categoria: "S/. 300.00",
    stock: false,
    sku: "4",
    precio: "S/. 1200.00",
    cntd: 0,
    status: "Agotado"
  },
  {
    id: 4,
    producto: "Producto 1",
    categoria: "S/. 100.00",
    stock: false,
    sku: "5",
    precio: "S/. 500.00",
    cntd: 0,
    status: "Pendiente"
  }
];

const page = () => {
  return (
    <div className="flex flex-col max-w-[1350px] w-full text-[#3C4A5B]">
      <NavbarAdmin />
      <div className="ml-[90px]">
        <div className="mb-5">
          <p className="text-[18px] font-[400]">Pedidos / Detalle de Orden</p>
          <p className="text-[22px] font-[500]">N° Orden Universal: TKIN-1002</p>
          <p className="text-[20px] font-[500]">N° Orden Tienda: IN-1002</p>
          <p className="text-[20px] font-[400]">01/09/20223</p>
        </div>

        <div className="flex gap-4">
          <div className="w-[866px] bg-white rounded-[20px] px-5 py-4">
            <p className="text-[28px] font-[500] mb-5">Detalle pedido</p>
            <table className="w-full bg-white mb-3 ">
              <thead>
                <tr className=" border-dashed border-b-[1px] border-[#29E197]">
                  <th className="px-6 py-3 text-left">
                    <input type="checkbox" />
                  </th>
                  <th className="px-6 py-3 text-left">Productos</th>
                  <th className="px-6 py-3 text-left border-dashed border-r-[1px] border-[#29E197]">
                    Precio
                  </th>
                  <th className="px-6 py-3 text-left border-dashed border-r-[1px] border-[#29E197]">
                    Unidades
                  </th>
                  <th className="px-6 py-3 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4">
                      <input type="checkbox" />
                    </td>
                    <td className="px-6 py-4 flex flex-row items-center gap-2">
                      <div className="w-[60px] h-[60px] bg-[#D9D9D9]"></div>
                      <div>
                        <p className="text-[18px] font-[400]">{item.producto}</p>
                        <p className="text-[18px] font-[300]">Nombre del product lorem</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-dashed border-r-[1px] border-[#29E197]">
                      {item.categoria}
                    </td>
                    <td className="px-6 py-4 border-dashed border-r-[1px] border-[#29E197]">
                      {item.sku}
                    </td>
                    <td className="px-6 py-4">{item.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className=" flex justify-end mr-5">
              <div>
                <div className="flex gap-2">
                  <p className="text-[18] font-[400] w-[90px]">Sub - total: </p>
                  <span>S/. 2660.00</span>
                </div>
                <div className="flex gap-2">
                  <p className="text-[18] font-[400] w-[90px]">Comisión: </p>{" "}
                  <span>-S/. 266.00</span>
                </div>
                <div className="flex gap-2">
                  <p className="text-[18] font-[500] w-[90px]">Total: </p>{" "}
                  <span className="text-[18] font-[500]">S/.2926.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="bg-white w-[437px]  rounded-[20px] px-5 py-5">
              <p className="text-[22px] font-[500]">Dirección de Envio</p>
              <p className="text-[22px] font-[300] mb-3">
                Calle Los Jazmines #171 Urb.Valdiviezo San Martin de Porres Lima - Peru{" "}
              </p>
              <div className="w-[380px] h-[282px] bg-[#D9D9D9] flex justify-center items-center rounded-[20px] mx-auto">
                <p>MAPS</p>
              </div>
            </div>
            <div className="bg-white w-[437px]  rounded-[20px] px-5 py-3">
              <p className="text-[22px] font-[500]">Información de pago</p>
              <div className="flex gap-2 justify-between">
                <p className="text-[18px] font-[300]">Pago realizado el: </p>
                <p className="text-[18px] font-[400]">12/09/2023</p>
              </div>
              <div className="flex gap-2 justify-between">
                <p className="text-[18px] font-[300]">Acción: </p>
                <p className="text-[#8BDA4F] bg-[#E6F7D9] rounded-[5px] px-4">Pagado</p>
              </div>
              <p className="border-dashed border-b-[1px] border-[#29E197] w-[80%] mx-auto mt-4"></p>
              <p className="text-[14px] font-[300] text-[#6D6D6D] text-center">
                Para mayor informacion con tus pagos, escribenos:
              </p>
              <p className="text-[18px] font-[400] text-[#6D6D6D] text-center">pagos@taki.pe</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
