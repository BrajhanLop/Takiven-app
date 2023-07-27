import Image from "next/image";
import takivn from "../../assets/img/admin/takiven.png";
import user from "../../assets/img/admin/usergen.png";

const NavbarAdmin = () => {
  return (
    <div className=" max-w-[1350px] w-full flex justify-between px-3 py-3">
      <div>
        <Image src={takivn} alt="" />
      </div>
      <div>
        <Image src={user} alt="" />
      </div>
    </div>
  );
};

export default NavbarAdmin;
