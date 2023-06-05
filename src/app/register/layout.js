import Navbar from "@/components/Header/Navbar";

export default function RegisterLayout({ children }) {
  return (
    <section className="mx-auto">
      <Navbar />
      {children}
    </section>
  );
}
