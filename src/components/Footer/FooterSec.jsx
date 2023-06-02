import Link from "next/link";
import React from "react";

const FooterSec = () => {
  return (
    <p className="hidden md:block text-[24px] text-title text-center">
      Takiven 2023 -{" "}
      <Link href="/">Términos y condiciones - Privacidad - Legal</Link>{" "}
    </p>
  );
};

export default FooterSec;
