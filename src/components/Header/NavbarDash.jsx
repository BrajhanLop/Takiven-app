"use client";
import Image from "next/image";
import logo from "../../assets/img/logo/logo1.png";
import menu from "../../assets/img/icons/Menu.png";
import cart from "../../assets/img/icons/cart.png";
import user from "../../assets/img/icons/user.png";
import CuentMenu from "../Dashboard/CuentMenu";
import useToggle from "@/hooks/useToggle";
import CartMenu from "../Dashboard/CartMenu";

const NavbarDash = () => {
  const { isToggle, toggle } = useToggle();
  const { isToggle: isCart, toggle: toggleCart } = useToggle();

  return (
    <>
      <nav className=" bg-[#29D46B] flex justify-center items-center gap-4">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div>
          <Image src={menu} alt="menu" />
        </div>
        <div className="w-[50%] h-[57px] ">
          <input
            type="text"
            placeholder="¿Que deseas tener en casa?"
            className="w-full h-full rounded-3xl px-5 "
          />
        </div>
        <div className="flex gap-1">
          <div className="flex items-center relative">
            <Image
              src={cart}
              alt="cart"
              onClick={toggleCart}
              className="w-[40px] h-[40px] cursor-pointer"
            />
            {isCart && <CartMenu />}
          </div>
          <span className="text-white text-[40px] font-[300] ">0</span>
        </div>
        <div className="relative">
          <Image
            src={user}
            alt="user"
            onClick={toggle}
            className="w-[40px] h-[40px] cursor-pointer"
          />
          {isToggle && <CuentMenu />}
        </div>
      </nav>
    </>
  );
};

export default NavbarDash;
