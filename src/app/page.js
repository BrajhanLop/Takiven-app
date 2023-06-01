import Navbar from "@/components/Header/Navbar";
import HeroSection from "@/components/Hero/HeroSection";
import FormLogin from "@/components/Login/FormLogin";

export default function Home() {
  return (
    <main className=" min-h-screen max-w-[1200px] mx-auto">
      <Navbar />
      <div className="flex">
        <HeroSection />
        <FormLogin />
      </div>
    </main>
  );
}
