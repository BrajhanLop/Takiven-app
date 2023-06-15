import FooterDash from "@/components/Footer/FooterDash";
import NavbarDash from "@/components/Header/NavbarDash";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-white w-full">
      <NavbarDash />
      <section className="flex justify-center mx-auto mb-20">
        {children}
      </section>
      <FooterDash />
    </div>
  );
}
