"use client";
import NavbarDash from "@/components/Header/NavbarDash";
import HeroDash from "@/components/Dashboard/HeroDash";
import React from "react";
import GamerSection from "@/components/Dashboard/GamerSection";
import { arrayCategorias } from "@/helpers/categories";
import FooterDash from "@/components/Footer/FooterDash";

const page = () => {
  return (
    <div className=" ">
      <main className="flex flex-col gap-10 items-center justify-center mt-10">
        <HeroDash />
      </main>
      {arrayCategorias.map((category) => (
        <GamerSection key={category.categoria} category={category} />
      ))}
    </div>
  );
};

export default page;
