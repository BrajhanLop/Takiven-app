import Image from "next/image";


const Card = ({img, title, amount}) => {
  return (
    <div className="w-[220px] h-[126px] bg-white p-2 rounded-[20px] flex flex-col justify-center items-center gap-1">
      <div className="flex justify-center items-center gap-3">
        <Image src={img} alt="" />
        <p className="text-[17px] font-[400]">{title}</p>
      </div>
      <p className=" text-[28px] font-[500] text-center">{amount}</p>
    </div>
  );
};

export default Card;
