import Image from "next/image";


const Card = ({img, title, amount, color}) => {
  return (
    <div className="w-[220px] h-[126px] text-[#3C4A5B] bg-white p-2 rounded-[20px] flex flex-col justify-center items-center gap-1">
      <div className="flex justify-center items-center gap-3">
        <div className={`w-[40px] h-[40px] rounded-[10px] flex justify-center items-center`} style={{backgroundColor: color}}>

        <Image src={img} alt="" />
        </div>
        <p className="text-[17px] font-[400]">{title}</p>
      </div>
      <p className=" text-[28px] font-[500] text-center">{amount}</p>
    </div>
  );
};

export default Card;
