import ProductItemCard from "./ProductItemCard";
const CartMenu = ({ catRef }) => {
  return (
    <div
      ref={catRef}
      className="absolute right-0 top-24  bg-[#30F27B] w-[455px] rounded rounded-b-[20px] flex flex-col justify-center p-4"
    >
      <ProductItemCard />
    </div>
  );
};

export default CartMenu;
