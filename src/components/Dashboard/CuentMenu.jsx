import puser from "../../assets/img/icons/puser.png";
import extend from "../../assets/img/icons/extend.png";
import obs from "../../assets/img/icons/obs.png";
import Image from "next/image";
const CuentMenu = ({ catRef }) => {
  return (
    <div
      ref={catRef}
      className=" bg-[#3FD077] absolute  top-[86px] right-0 rounded rounded-b-[20px] w-[228px] h-[160px] text-white"
    >
      <div>
        <p className=" text-[20px] font-[500] text-center bg-[#30F27B] py-4">
          Hola, Paulo Abad
        </p>
      </div>
      <div className=" h-[98px] ">
        <div className="flex justify-center items-center gap-4 text-[20px] h-1/2 font-[500]">
          <Image src={puser} alt="user" />
          <p className="w-[111px]">Mi Cuenta</p>
          <Image src={extend} alt="link" />
        </div>
        <div className="flex justify-center items-center gap-4 text-[20px] h-1/2 font-[500]">
          <Image src={obs} alt="user" />
          <p className="w-[111px]">Mis Pedidos</p>
          <Image src={extend} alt="link" />
        </div>
      </div>
    </div>
  );
};

export default CuentMenu;
