import FooterSec from "@/components/Footer/FooterSec";
import Navbar from "@/components/Header/Navbar";
import HeroSection from "@/components/Hero/HeroSection";
import FormLogin from "@/components/Login/FormLogin";

export default function Home() {
  return (
    <>
    <main className=" min-h-[calc(100vh-40px)] max-w-[1200px] mx-auto">
      <Navbar />
      <div className="flex gap-16">
        <HeroSection />
        <FormLogin />
      </div>
      
    </main>
    <FooterSec/>
    </>
  );
}
