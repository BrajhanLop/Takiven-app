import FooterSec from "@/components/Footer/FooterSec";
import Navbar from "@/components/Header/Navbar";

export default function RegisterLayout({ children }) {
  return (
    <>
      <Navbar />

      <section className="mx-auto">{children}</section>
      <FooterSec/>
    </>
  );
}
