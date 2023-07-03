import Image from "next/image";
import check from "../../assets/img/icons/checkcart.png";
import product1 from "../../assets/img/icons/product1.png";

const ProductItemCard = () => {
  return (
    <>
      <div className="flex">
        <Image src={check} alt="check"></Image>
        <h4 className="text-white text-[20px] lg:text-[24px] font-[700]">
          Agregago al carrito
        </h4>
      </div>
      <div className="mt-4">
        <div className="flex gap-5">
          <div>
            <Image src={product1} alt="check" className=" w-[100px] lg:w-[144px]"></Image>
          </div>
          <div className="md:text-[20px] lg:text-[22px]">
            <p className=" font-[500] text-white">
              Nombre del Producto
            </p>
            <p className=" font-[400] text-[#6D6D6D]">Categoria</p>
            <p className="font-[400] text-[#6D6D6D]">Detalles</p>
            <p className=" font-[500] text-white">S/450.00</p>
          </div>
        </div>
        <button className="bg-[#3FD077] px-5 py-2 rounded rounded-b-[20px] lg:text-[22px] font-[500] text-white flex ml-auto">
          Ir a Pagar
        </button>
      </div>
    </>
  );
};

export default ProductItemCard;
