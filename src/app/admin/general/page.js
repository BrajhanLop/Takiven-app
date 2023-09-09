"use client";
import EditPedidos from "@/components/admin/EditPedidos";
import NavbarAdmin from "@/components/admin/NavbarAdmin";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import checkdouble from "../../../assets/img/admin/svg/bx-check-double.svg";
import packages from "../../../assets/img/admin/svg/bx-package.svg";
import edit from "../../../assets/img/admin/svg/bxs-edit.svg";
import alarm from "../../../assets/img/admin/svg/bxs-alarm-exclamation.svg";
import candado from "../../../assets/img/admin/bxs-lock-alt.svg"
import radio from "../../../assets/img/admin/bx-radio-circle-marked.svg"
import Image from "next/image";
import { useEffect, useState } from "react";

const General = () => {
  const data = [
    {
      id: 1,
      producto: "TKIN-1002",
      categoria: "Zapatillas",
      stock: true,
      sku: "01/09/2023",
      precio: "1000.3",
      pago: "Pendiente",
      cantidad: "10",
      status: "Entregado"
    },
    {
      id: 2,
      producto: "TKIN-1003",
      categoria: "Mascotas",
      stock: false,
      sku: "01/09/2023",
      precio: "200.30",
      pago: "Cancelado",
      cantidad: "1",
      status: "Cancelado"
    },
    {
      id: 3,
      producto: "TKIN-1052",
      categoria: "Computo",
      stock: true,
      sku: "01/09/2023",
      precio: "500.30",
      pago: "Pagado",
      cantidad: "8",
      status: "Entregado"
    },
    {
      id: 4,
      producto: "TKIN-1015",
      categoria: "Computo",
      stock: true,
      sku: "01/09/2023",
      precio: "750.50",
      pago: "Pendiente",
      cantidad: "2",
      status: "Enviado"
    },
    {
      id: 5,
      producto: "TKIN-1002",
      categoria: "Zapatillas",
      stock: true,
      sku: "01/09/2023",
      precio: "1000.3",
      pago: "Pendiente",
      cantidad: "10",
      status: "Entregado"
    },
    {
      id: 6,
      producto: "TKIN-1003",
      categoria: "Mascotas",
      stock: false,
      sku: "01/09/2023",
      precio: "200.30",
      pago: "Cancelado",
      cantidad: "1",
      status: "Cancelado"
    },
    {
      id: 7,
      producto: "TKIN-1052",
      categoria: "Computo",
      stock: true,
      sku: "01/09/2023",
      precio: "500.30",
      pago: "Pagado",
      cantidad: "8",
      status: "Entregado"
    }
  ];

  const [selectedTask, setSelectedTask] = useState(null);

  const closeOnOutsideClick = e => {
    if (selectedTask && e.target.closest(".modal-container") === null) {
      closeModal();
    }
  };

  const openModal = task => {
    setSelectedTask(task.id);
    console.log(task.id);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  useEffect(() => {
    document.addEventListener("click", closeOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
    };
  }, [selectedTask]);
  return (
    <div className="flex flex-col max-w-[1350px] w-full">
      <NavbarAdmin />

      <div className="ml-[90px] flex flex-col gap-2">
        <div className="flex items-center relative w-[240px]">
          <select
            name=""
            id=""
            className="appearance-none w-full  h-[55px] rounded-[10px] border font-[500] text-[28px] pl-3">
            <option value="">Setiembre</option>
          </select>
          <div className="text-[30px] absolute right-2 pointer-events-none ">
            <TiArrowSortedDown />
          </div>
        </div>

        <div className="flex gap-2">
          <div className=" w-1/2 hidden md:block pb-5 bg-white px-5 lg:px-4 py-3 rounded-[20px]">
            <div className="flex justify-between">
              <div className="flex items-end gap-4">
                <p className="font-[500] text-[28px]">Dia:</p>
                <input className="text-[24px] text-[400] border rounded p-1 h-[45px]" type="date" />
              </div>
            </div>
            {/* <hr className="my-3" /> */}

            <div className="flex justify-center mt-8 text-[#3C4A5B]">
              <table className="w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-[#F3F3F4] ">
                    <th className="py-2 px-3">
                      <input type="checkbox" />
                    </th>
                    <th className="py-2 px-2 text-[18px]">N° Universal</th>
                    <th className="py-2 px-2 text-[18px] font-[400]">Pago</th>
                    <th className="py-2 px-2 text-[18px] font-[400]">Status</th>
                    <th className="py-2 px-2 text-[18px] font-[400]">Precio</th>
                    <th className="py-2 px-2 text-[18px] ">+</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.id}>
                      <td className="px-3 ">
                        <input type="checkbox" />
                      </td>
                      <td className="px-2">
                        <p className="">{item.producto}</p>
                      </td>
                      <td className="px-2">
                        {item?.pago === "Pagado" ? (
                          <div className="flex items-center">
                            <p className="text-[30px] text-[#8BDA4F] ">•</p>
                            <p className="text-[#8BDA4F]">Pagado</p>
                          </div>
                        ) : item?.status === "Enviado" ? (
                          <div className="flex items-center">
                            <p className="text-[30px] text-[#FFB608] ">•</p>
                            <p className="font-[400] text-[#FFB608] text-center rounded-[5px]">
                              Enviado
                            </p>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <p className="text-[30px] text-[#FF8084] ">•</p>
                            <p className="font-[400] text-[#FF8084] text-center rounded-[5px]">
                              Cancelado
                            </p>
                          </div>
                        )}
                      </td>

                      <td className="text-[14px] px-2">
                        {item?.status === "Entregado" ? (
                          <p className="bg-[#E6F7D9] text-[#8BDA4F] text-center py-1 px-2  rounded-[5px]">
                            Entregado
                          </p>
                        ) : item?.status === "Enviado" ? (
                          <p className="bg-[#FFF4D9] text-[#FFB608] text-center py-1 px-2  rounded-[5px]">
                            Enviado
                          </p>
                        ) : (
                          <p className="bg-[#FFE4E5] text-[#FF8084] text-center py-1 px-2  rounded-[5px]">
                            Cancelado
                          </p>
                        )}
                      </td>
                      <td className="text-[14px] lg:text-[18px] lg:px-3 lg:py-1 xl:px-6 xl:py-4">
                        S/. {item.precio}
                      </td>
                      <td className="px-2 py-1 relative">
                        <Image
                          onClick={() => openModal(item)}
                          src={edit}
                          alt="edit"
                          className=" cursor-pointer"
                        />
                        {selectedTask === item.id && <EditPedidos />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* <div className="flex mt-5 justify-end ">
            <div className="text-[#3C4A5B] flex items-center text-[20px] mr-2">
              <AiFillCaretLeft />
            </div>
            <div className="bg-[#3C4A5B] h-[36px] w-[36px] rounded-full flex justify-center items-center">
              <p className=" text-white"> 1</p>
            </div>
            <div className="text-[#3C4A5B] h-[36px] w-[36px] rounded-full  flex justify-center items-center">
              <p>2</p>
            </div>
            <div className="text-[#3C4A5B] h-[36px] w-[36px] rounded-full  flex justify-center items-center">
              <p>3</p>
            </div>
            <div className="text-[#3C4A5B] flex items-center text-[20px]">
              <AiFillCaretRight />
            </div>
          </div> */}
          </div>

          <div className="  w-1/2 h-full flex flex-col justify-between">
            <div className="flex gap-2 ">

              <div className="w-[55%] h-[180px] text-[#3C4A5B] bg-white py-4 px-5 rounded-[20px] flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center self-start items-center gap-3">
                  <div
                    className={`w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-[#29E197]`}>
                    <Image src={checkdouble} alt="" />
                  </div>
                  <p className="text-[22px] font-[500]">Pago bruto del dia</p>
                </div>
                <p className=" text-[28px] font-[500] text-center">S/ 4,138.60</p>
                <p className="text-[14px]">
                  *Solo se visualizan los pagos con status “Entregado / Enviado” y pago “Pagado /
                  Pend”.
                </p>
              </div>

              <div className="w-[45%] h-[180px] text-[#3C4A5B] bg-white  py-4 px-5 rounded-[20px] flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center items-center gap-3">
                  <div
                    className={`w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-[#3FD0D0]`}>
                    <Image src={packages} alt="" />
                  </div>
                  <p className="text-[22px] font-[500]">Pedidos Totales:</p>
                </div>
                <p className=" text-[28px] font-[500] text-center">18</p>
                <p className="text-[14px]">
                  *Se contabilizan todos los pedidos realizados durante el dia seleccionado.
                </p>
              </div>
            </div>

            <div className="flex gap-2 ">
              <div className="w-[55%] h-[180px] text-[#3C4A5B] bg-white py-4 px-5 rounded-[20px] flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center self-start items-center gap-3">
                  <div
                    className={`w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-[#FFB608]`}>
                    <Image src={radio} alt="" />
                  </div>
                  <p className="text-[22px] font-[500]">Descuento de comision:</p>
                </div>
                <p className=" text-[28px] font-[500] text-center">S/ 413.86</p>
                <p className="text-[14px]">
                  *El descuento de comision es del 10% sobre cada venta realizada
                </p>
              </div>

              <div className="w-[45%] h-[180px] text-[#3C4A5B] bg-white  py-4 px-5 rounded-[20px] flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center self-start items-center gap-3">
                  <div
                    className={`w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-[#FF8084]`}>
                    <Image src={alarm} alt="" />
                  </div>
                  <p className="text-[22px] font-[500]">Pedidos Perdidos:</p>
                </div>
                <p className=" text-[28px] font-[500] text-center">S/ 1,560.9</p>
                <p className="text-[14px]">
                  *Este es el monto perdido, por pedidos no entregados o cancelados.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-[55%] h-[180px] text-[#3C4A5B] bg-white py-4 px-5 rounded-[20px] flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center self-start items-center gap-3">
                  <div
                    className={`w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-[#FFB608]`}>
                    <Image src={candado} alt="" />
                  </div>
                  <p className="text-[22px] font-[500]">Pagos Pendientes:</p>
                </div>
                <p className=" text-[28px] font-[500] text-center">S/ 1,350.09</p>
                <p className="text-[14px]">
                  *Son pagos retenidos por entrega no realizada u otro reclamo. En este monto ya se
                  encuentra aplicada la comision correspondiente.
                </p>
              </div>

              <div className="w-[45%] h-[180px]  bg-[#29E197] text-white  py-4 px-5 rounded-[20px] flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center self-start items-center gap-3">
                  <div
                    className={`w-[40px] h-[40px] rounded-[10px] flex justify-center items-center bg-[#29E197] border border-white`}>
                    <Image src={checkdouble} alt="" />
                  </div>
                  <p className="text-[21px] font-[500]">Deposito realizado:</p>
                </div>
                <p className=" text-[28px] font-[500] text-center">S/ 2,374.65</p>
                <p className="text-[14px]">*El deposito se realiza a los 5 dias habiles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
