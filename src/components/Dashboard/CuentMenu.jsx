import puser from "../../assets/img/icons/puser.png";
import icono from '../../assets/img/svg/icono.svg'
import icono2 from '../../assets/img/svg/icono2.svg'
import icono3 from '../../assets/img/svg/icono3.svg'
import extend from "../../assets/img/icons/extend.png";
import obs from "../../assets/img/icons/obs.png";
import Image from "next/image";
import Link from "next/link";
const CuentMenu = ({ catRef, isFalse }) => {
  return (
    <div
      ref={catRef}
      className=" bg-[#3FD077] absolute  top-[4rem] right-0 rounded rounded-b-[20px] w-[228px] h-[160px] text-white"
    >
      <div>
        <p className=" text-[20px] font-[500] text-center bg-[#30F27B] py-4">
          Hola, Paulo Abad
        </p>
      </div>
      <div className=" h-[98px] ">
        <div className="flex justify-center items-center gap-4 text-[20px] h-1/2 font-[500]">
          <Image src={icono} alt="user" className="w-[30px] cursor-pointer" />
          <Link href="/dashboard/datos" onClick={isFalse}>
            <p className="w-[111px]">Mi Cuenta</p>
          </Link>
          <Image src={icono3} alt="link" className="w-[20px] cursor-pointer" />
        </div>
        <div className="flex justify-center items-center gap-4 text-[20px] h-1/2 font-[500]">
          <Image src={icono2} alt="user" className="w-[30px] cursor-pointer" />
          <Link href="/dashboard/pedido" onClick={isFalse}>
            <p className="w-[111px]">Mis Pedidos</p>
          </Link>
          <Image src={icono3} alt="link" className="w-[20px] cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default CuentMenu;
