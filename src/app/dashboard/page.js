import NavbarDash from "@/components/Header/NavbarDash";
import HeroDash from "@/components/Dashboard/HeroDash";
import React from "react";
import GamerSection from "@/components/Dashboard/GamerSection";

const page = () => {
  return (
    <div>
      <NavbarDash />
      <main className="flex flex-col gap-10 items-center justify-center mt-10">
        <HeroDash />
      </main>

      <GamerSection />
    </div>
  );
};

export default page;
