import logo from "../../assets/img/logo/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="flex py-5 max-w-[1300px] mx-auto justify-center md:justify-start bg-[#f2f6fb] md:bg-transparent">
        <Image src={logo} alt="logo" className="w-[253px]" />
      </div>
    </nav>
  );
};

export default Navbar;
