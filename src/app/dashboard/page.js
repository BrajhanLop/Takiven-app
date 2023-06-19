"use client";
import NavbarDash from "@/components/Header/NavbarDash";
import HeroDash from "@/components/Dashboard/HeroDash";
import React from "react";
import GamerSection from "@/components/Dashboard/GamerSection";
import { arrayCategorias } from "@/helpers/categories";
import FooterDash from "@/components/Footer/FooterDash";

const page = () => {
  return (
    <div className="flex flex-col">
      <main className="py-5 lg:pt-10 w-full px-3 md:px-7 lg:max-w-[1000px] xl:max-w-[1200px] lg:px-0 mx-auto">
        <HeroDash />
      </main>
      <div>
        {arrayCategorias.map((category) => (
          <GamerSection key={category.categoria} category={category} />
        ))}
      </div>
    </div>
  );
};

export default page;
