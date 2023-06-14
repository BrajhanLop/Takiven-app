import FooterDash from "@/components/Footer/FooterDash";
import NavbarDash from "@/components/Header/NavbarDash";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-white">
      <NavbarDash />
      <section className="flex justify-center mx-auto">{children}</section>
      <FooterDash />
    </div>
  );
}
