const CardProduct = () => {
  return (
    <div className="border border-[#30F27B] h-[500px] w-[320px] rounded-[20px] flex flex-col gap-3 items-center">
      <div className="border mt-3 flex justify-center items-center rounded-[20px] w-[293px] h-[264px]">
        IMG
      </div>
      <div>
        <h3 className=" text-[20px] font-[600px]">Marca del Producto</h3>
        <p className=" text-[18px] font-[400px]">Nombre del Producto</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-[#ECEEF0] text-white text-[20px] font-[700px] rounded-[10px]  px-5 py-2">
          S/. 148.00
        </button>
        <button className="bg-[#30F27B] text-white text-[20px] font-[700px] rounded-[10px] px-5 py-2">
          S/. 108.00
        </button>
      </div>
      <button className="bg-white text-[#30F27B] border border-[#30F27B] text-[20px] font-[700px] rounded-[10px] px-8 py-2">
        Agregar
      </button>
    </div>
  );
};

export default CardProduct;