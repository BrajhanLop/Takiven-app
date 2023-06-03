"use client";

import ConfirmPersonal from "@/components/Register/ConfirmPersonal";
import PersonalInfo from "@/components/Register/PersonalInfo";
import useToggle from "@/hooks/useToggle";
import { useForm } from "react-hook-form";

const page = () => {
  

  return (
    <main className="relative   mx-auto pb-8 px-3 ">
     
        <PersonalInfo  />
  
    </main>
  );
};

export default page;
