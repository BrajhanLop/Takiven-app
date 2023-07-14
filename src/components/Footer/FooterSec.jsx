import Link from "next/link";
import React from "react";

const FooterSec = () => {
  return (
    <p className="hidden md:block text-[20px] text-title text-center mb-2 mt-5">
      Takiven 2023 -{" "}
      <Link href="/" className=" font-[500]">
        Términos y condiciones
      </Link>{" "}
      -{" "}
      <Link href="/" className=" font-[500]">
        Privacidad
      </Link>{" "}
      -{" "}
      <Link href="/" className=" font-[500]">
        Legal
      </Link>{" "}
    </p>
  );
};

export default FooterSec;
