import NavbarAdmin from "@/components/admin/NavbarAdmin";

const page = () => {
  return (
    <div className="flex flex-col max-w-[1350px] w-full">
      <NavbarAdmin />
      <div>
        <p>Pedidos / Detalle de Orden</p>
        <p>N° Orden Universal: TKIN-1002</p>
        <p>N° Orden Tienda: IN-1002</p>
        <p>01/09/20223</p>
      </div>
      <div className="flex gap-2">
        <div className="w-[866px] h-[664px] bg-white">
          <p>Detalle pedido</p>
        </div>
        <div className="flex flex-col gap-2">
            <div className="bg-white w-[437px] h-[459px]">

            </div>
            <div className="bg-white w-[437px] h-[192px] ">

            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
