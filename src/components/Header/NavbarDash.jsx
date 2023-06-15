"use client";
import Image from "next/image";
import logo from "../../assets/img/logo/logo2.png";
import menu from "../../assets/img/icons/Menu.png";
import cart from "../../assets/img/icons/cart.png";
import user from "../../assets/img/icons/user.png";
import CuentMenu from "../Dashboard/CuentMenu";
import useToggle from "@/hooks/useToggle";
import CartMenu from "../Dashboard/CartMenu";
import MenuCategories from "../Dashboard/MenuCategories";
import { useEffect, useRef } from "react";

const NavbarDash = () => {
  const { isToggle, toggle, isFalse } = useToggle();
  const {
    isToggle: isCart,
    toggle: toggleCart,
    isFalse: falseCart,
  } = useToggle();
  const { isToggle: isCat, toggle: toggleCat, isFalse: falseCat } = useToggle();
  const catRef = useRef(null);

  const handleClickOutside = (event) => {
    if (catRef.current && !catRef.current.contains(event.target)) {
      falseCat();
      isFalse();
      falseCart();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handlecategory = () => {
    isFalse();
    falseCart();
    toggleCat();
  };

  const handleCart = () => {
    isFalse();
    falseCat();
    toggleCart();
  };

  const handleUser = () => {
    falseCart();
    falseCat();
    toggle();
    console.log(isToggle);
  };

  return (
    <>
      <nav className="fixed  w-full bg-[#3FD077] flex justify-center items-center gap-4">
        <div className="flex">
          <Image src={logo} alt="logo" className="" />
        </div>
        <div className="flex items-center w-[60%] gap-3">
          <div>
            <Image
              src={menu}
              alt="menu"
              onClick={handlecategory}
              className="w-[40px] cursor-pointer "
            />
          </div>
          <div className="w-[900px] h-[48px] ">
            <input
              type="text"
              placeholder="¿Que deseas tener en casa?"
              className="w-full h-full rounded-3xl px-5 text-[20px] font-[400] "
            />
          </div>
          {isCat && <MenuCategories catRef={catRef} />}
        </div>
        <div className="flex gap-1">
          <div className="flex items-center relative">
            <Image
              src={cart}
              alt="cart"
              onClick={handleCart}
              className="w-[40px] h-[40px] cursor-pointer"
            />
            {isCart && <CartMenu catRef={catRef} />}
          </div>
          <span className="text-white text-[35px] font-[300] ">0</span>
        </div>
        <div className="relative">
          <Image
            src={user}
            alt="user"
            onClick={handleUser}
            className="w-[40px] h-[40px] cursor-pointer"
          />
          {isToggle && <CuentMenu catRef={catRef} />}
        </div>
      </nav>
    </>
  );
};

export default NavbarDash;
