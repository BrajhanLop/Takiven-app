import CardPedido from "./CardPedido";

const ContentPedidos = () => {
  const pedidos = [
    {
      title: "TAK-03081921",
      fecha: "22 de Febrero de 2023 - S/640.00 - 4 Articulos",
      estado: "En curso",
      items: ["image1", "image2"]
    },
    {
      title: "TAK-03381224",
      fecha: "25 de Enero de 2023 - S/440.00 - 2 Articulos",
      estado: "Entregado",
      items: ["image1", "image2"]
    },
    {
      title: "TAK-03299116",
      fecha: "05 de Enero de 2023 - S/840.00 - 3 Articulos",
      estado: "Entregado",
      items: ["image1", "image2"]
    }
  ];

  return (
    <div className=" max-w-[1200px] w-[1200px] mt-5 md:mt-10 xl:mt-24">
      <div className="w-full">
        <h2 className=" text-[40px] font-[700] pl-5 xl:pl-0 text-green">Tus pedidos</h2>
        <hr className="mb-3" />
        <div>
          {pedidos.length === 0 ? (
            <div className="bg-[#F6F6F6]  py-5 px-16 w-full rounded-[20px]">
              <p className="font-[300] text-[#3C4A5B] text-[20px] ">
                No cuenta con ningun pedido activo, todos los pedidos que esten en curso, entregados
                y cancelados te apareceran dentro de esta seccion.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {pedidos.map(pedido => (
                <CardPedido key={pedido.title} pedido={pedido} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentPedidos;
