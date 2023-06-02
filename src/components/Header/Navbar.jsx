import logo from "../../assets/img/logo/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="flex py-5 max-w-[1300px] mx-auto justify-center md:justify-start bg-white md:bg-transparent">
        <Image src={logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
