import FooterDash from "@/components/Footer/FooterDash";
import NavbarDash from "@/components/Header/NavbarDash";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-white w-full">
      <NavbarDash />
      <section className="flex justify-between md:justify-center mb-20 w-full mt-[73px]">
        {children}
      </section>
      <FooterDash />
    </div>
  );
}
