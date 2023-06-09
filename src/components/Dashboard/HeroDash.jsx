import React from "react";
import MenuCategories from "./MenuCategories";
import CuentMenu from "./CuentMenu";
import CartMenu from "./CartMenu";

const HeroDash = () => {
  return (
    <div className="bg-[#D9D9D9] w-full rounded-[37px]  max-w-[1200px] h-[569px] flex justify-center items-end pb-10">
      <CartMenu />
      <CuentMenu />
      <MenuCategories />
    </div>
  );
};

export default HeroDash;
