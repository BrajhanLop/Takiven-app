import React from "react";

const Comentarios = () => {
  return (
    <div className="text-[#3C4A5B] xl:w-[1110px] lg:w-[950px] md:w-[700px] w-full px-2 md:px-0">
      <p className="text-[18px] font-[400] bg-[#ECEEF0] py-3 pl-4">Gerardo Dafonseka</p>
      <div className="text-[18px] font-[300] py-3 pl-4">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic.
        </p>
      </div>
      <p className="text-[18px] font-[400] bg-[#ECEEF0] py-3 pl-4">Tu</p>
      <input type="text" className="w-full h-20 border px-3" placeholder="Agrega tu comentario, si compraste este producto." />
      <button className="text-white bg-[#3FD077] px-6 my-2 text-[20px] rounded-lg">Enviar</button>
      {/* <p className="text-[18px] font-[300] py-3 pl-4">
        Agrega tu comentario, si compraste este producto.
      </p> */}
    </div>
  );
};

export default Comentarios;
