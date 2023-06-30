const CardProduct = () => {
  return (
    <div className=" border border-[#30F27B] h-[500px] lg:w-[300px] xl:w-auto rounded-[20px] flex flex-col gap-3 items-center transform hover:scale-[0.98] hover:duration-500">
      <div className="border mt-3 flex justify-center items-center rounded-[20px] w-[292px] mx-3 h-[264px] ">
        IMG
      </div>
      <div>
        <h3 className=" text-[20px] font-[600px]">Marca del Producto</h3>
        <p className=" text-[18px] font-[400px]">Nombre del Producto</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-[#ECEEF0] text-white text-[20px] font-[700px] rounded-[10px]  px-5 py-2 line-through">
          S/. 148.00
        </button>
        <button className="bg-[#29E197] text-white text-[20px] font-[700px] rounded-[10px] px-5 py-2">
          S/. 108.00
        </button>
      </div>
      <button className="bg-white text-[#29E197] border border-[#29E197] text-[20px] font-[700px] rounded-[10px] px-8 py-2 hover:bg-green hover:text-white hover:duration-500">
        Agregar
      </button>
    </div>
  );
};

export default CardProduct;
