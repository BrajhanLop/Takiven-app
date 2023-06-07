import Image from "next/image";
import logo from "../../assets/img/logo/logo1.png";
import menu from "../../assets/img/icons/menu.png";
import cart from "../../assets/img/icons/cart.png";
import user from "../../assets/img/icons/user.png";
const NavbarDash = () => {
  return (
    <nav className=" bg-[#29D46B] flex justify-center items-center gap-4">
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div>
        <Image src={menu} alt="menu" />
      </div>
      <div className="w-[50%] h-[57px] ">
        <input
          type="text"
          placeholder="¿Que deseas tener en casa?"
          className="w-full h-full rounded-3xl px-5 "
        />
      </div>
      <div className="flex">
        <div className="flex items-center">
          <Image src={cart} alt="cart" />
        </div>
        <span className="text-white text-[50px]">0</span>
      </div>
      <div>
        <Image src={user} alt="user" />
      </div>
    </nav>
  );
};

export default NavbarDash;
