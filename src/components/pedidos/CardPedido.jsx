const CardPedido = ({ pedido }) => {
  return (
    <div className="bg-[#F6F6F6] text-[#3C4A5B] py-5 px-16 w-full rounded-[20px]">
      <div>
        <h2 className="text-[#3C4A5B] font-[700] text-20px">
          TU PEDIDO: {pedido.title}
        </h2>
        <p className="text-[20px] font-[300] text-[#3C4A5B]">{pedido.fecha}</p>
        <p className="text-[20px] font-[300] text-[#3C4A5B]">
          Estado: {pedido.estado}
        </p>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex gap-2">
          {pedido.items.map((item) => (
            <div
              key={item}
              className="w-[123px] h-[118px] bg-[#D9D9D9] rounded-[20px]"
            >
              <img src="" alt="" className="" />
            </div>
          ))}
        </div>
        <div className="flex items-end">
          <button className=" border border-[#3C4A5B] rounded-[20px] px-8 py-3 text-[#3C4A5B] text-[20px] font-[700] hover:bg-[#3C4A5B] hover:text-white hover:duration-500">
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPedido;
