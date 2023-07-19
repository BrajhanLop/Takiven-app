import React from "react";

const Garantias = () => {
  return (
    <div className="text-[#3C4A5B] w-[1130px] ">
      <p className="text-[18px] font-[400] bg-[#ECEEF0] py-3 pl-4">Casos en los que se puede devolver el producto</p>
      <div className="text-[18px] font-[300] py-3 pl-4">
        <p>Cambio de opinión: NO</p>
        <p>Cambio de talla: NO</p>
        <p>Falla de fabrica: SI</p>
      </div>
      <p className="text-[18px] font-[400] bg-[#ECEEF0] py-3 pl-4">¿Cuantos días tengo para devolver el producto?</p>
      <p className="text-[18px] font-[300] py-3 pl-4">Todo cambio o devolucion se realizará hasta siete(7) dias calendarios despues de la entrega del producto. Para mayor detalle consultar las Politicas de <span>Cambios y Devoluciones</span></p>
    </div>
  );
};

export default Garantias;
