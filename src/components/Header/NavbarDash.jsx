"use client";
import Image from "next/image";
import logo from "../../assets/img/logo/logo2.png";
import menu from "../../assets/img/svg/menu.svg";
import cart from "../../assets/img/svg/cart.svg";
import user from "../../assets/img/svg/user.svg";
import CuentMenu from "../Dashboard/CuentMenu";
import useToggle from "@/hooks/useToggle";
import CartMenu from "../Dashboard/CartMenu";
import MenuCategories from "../Dashboard/MenuCategories";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const NavbarDash = () => {
  const { isToggle, toggle, isFalse, isTrue } = useToggle();
  const { isToggle: isCart, toggle: toggleCart, isFalse: falseCart } = useToggle();
  const { isToggle: isCat, toggle: toggleCat, isFalse: falseCat } = useToggle();
  const catRef = useRef(null);
  const router = useRouter();

  const handleClickOutside = event => {
    if (
      catRef.current &&
      !catRef.current.contains(event.target) &&
      !event.target.classList.contains("menu-option")
    ) {
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
  };

  return (
    <>
      <nav className="h-[87px] md:h-auto fixed z-20  w-full bg-[#3FD077] flex justify-between md:justify-center  items-center px-2 lg:gap-4 gap-3 md:py-1 lg:py-0 md:pr-2">
        <div className="md:flex cursor-pointer hidden " onClick={() => router.push("/dashboard")}>
          <Image src={logo} alt="logo" className="md:w-[180px] lg:w-[232px]" />
        </div>
        <div className="flex items-center w-[60%] xl:max-w-[800px]  md:gap-3">
          <div>
            <Image
              src={menu}
              alt="menu"
              onClick={handlecategory}
              className="menu-option cursor-pointer w-[40px]"
            />
          </div>
          <div className="md:hidden  cursor-pointer " onClick={() => router.push("/dashboard")}>
            <Image src={logo} alt="logo" className="w-[162px]" />
          </div>
          <div className="hidden xl:w-[800px] lg:w-[600px]   md:block  md:w-full h-[48px] ">
            <input
              type="text"
              placeholder="¿Que deseas tener en casa?"
              className="w-full h-full rounded-3xl px-5 text-[20px] font-[400] "
            />
          </div>
          {isCat && <MenuCategories catRef={catRef} />}
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex gap-1">
            <div className="flex items-center relative">
              <Image
                src={cart}
                alt="cart"
                onClick={handleCart}
                className="menu-option w-[40px] h-[40px] cursor-pointer"
              />
              {isCart && <CartMenu catRef={catRef} />}
            </div>
            <span className="hidden md:block text-white text-[35px] font-[300] ">0</span>
          </div>
          <div className="relative">
            <Image
              src={user}
              alt="user"
              onClick={handleUser}
              className="menu-option w-[40px] h-[40px] cursor-pointer"
            />
            {isToggle && <CuentMenu catRef={catRef} isFalse={isFalse} />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarDash;
