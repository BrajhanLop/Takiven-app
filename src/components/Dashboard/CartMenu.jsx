import ProductItemCard from "./ProductItemCard";
const CartMenu = ({ catRef }) => {
  return (
    <div
      ref={catRef}
      className="absolute right-0 top-[71px]  bg-[#30F27B] w-[300px] md:w-[350px] lg:w-[455px] rounded rounded-b-[20px] flex flex-col justify-center p-4"
    >
      <ProductItemCard />
    </div>
  );
};

export default CartMenu;
