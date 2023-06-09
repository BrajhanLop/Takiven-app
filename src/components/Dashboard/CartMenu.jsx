import Image from "next/image";
import check from "../../assets/img/icons/checkcart.png";
import product1 from "../../assets/img/icons/product1.png";
const CartMenu = () => {
  return (
    <div className="absolute top-36 left-40 bg-[#30F27B] w-[455px] rounded rounded-b-[20px] flex flex-col justify-center p-4">
      <div className="flex">
        <Image src={check} alt="check"></Image>
        <h4 className="text-white text-[24px] font-[700]">
          Agregago al carrito
        </h4>
      </div>
      <div className="mt-4">
        <div className="flex gap-5">
          <div>
            <Image src={product1} alt="check"></Image>
          </div>
          <div>
            <p className="text-[22px] font-[500] text-white">
              Nombre del Producto
            </p>
            <p className="text-[22px] font-[400] text-[#6D6D6D]">Categoria</p>
            <p className="text-[22px] font-[400] text-[#6D6D6D]">Detalles</p>
            <p className="text-[22px] font-[500] text-white">S/450.00</p>
          </div>
        </div>
        <button className="bg-[#3FD077] px-5 py-2 rounded rounded-b-[20px] text-[22px] font-[500] text-white flex ml-auto">
          Ir a Pagar
        </button>
      </div>
    </div>
  );
};

export default CartMenu;
