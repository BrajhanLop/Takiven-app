"use client";
import FooterSec from "@/components/Footer/FooterSec";
import Navbar from "@/components/Header/Navbar";
import HeroSection from "@/components/Hero/HeroSection";
import FormLogin from "@/components/Login/FormLogin";
import Register from "@/components/Register/Register";
import useToggle from "@/hooks/useToggle";

export default function Home() {
  const { isToggle, toggle } = useToggle();

  return (
    <>
      <Navbar />
      <main className=" max-w-[1200px] mx-auto pb-8">
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:mx-5 xl:mx-0 lg:gap-10 xl:gap-16 ">
          <HeroSection />
          {isToggle ? (
            <Register toggle={toggle} />
          ) : (
            <FormLogin toggle={toggle} />
          )}
          {/* <FormLogin /> */}
          {/* <Register/> */}
        </div>
      </main>
      <FooterSec />
    </>
  );
}
