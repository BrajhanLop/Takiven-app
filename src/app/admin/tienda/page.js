"use client";
import Card from "@/components/admin/Card";
import NavbarAdmin from "@/components/admin/NavbarAdmin";
import edit from "../../../assets/img/admin/svg/bxs-edit.svg";
import packages from "../../../assets/img/admin/svg/bx-package.svg";
import arrow from "../../../assets/img/admin/svg/bx-arrow-to-top.svg";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BiToggleRight } from "react-icons/bi";
import { MdToggleOff } from "react-icons/md";
import Image from "next/image";
import Footer from "@/components/admin/Footer";
import Edit from "@/components/admin/Edit";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const data = [
  {
    id: 1,
    producto: "Producto 1",
    categoria: "Zapatillas",
    stock: true,
    sku: "SKU123",
    precio: 100,
    cntd: 5,
    status: "Publicado"
  },
  {
    id: 2,
    producto: "Producto 1",
    categoria: "Mascotas",
    stock: true,
    sku: "SKU123",
    precio: 100,
    cntd: 5,
    status: "Pendiente"
  },
  {
    id: 3,
    producto: "Producto 1",
    categoria: "Computo",
    stock: false,
    sku: "SKU123",
    precio: 100,
    cntd: 0,
    status: "Agotado"
  },
  {
    id: 4,
    producto: "Producto 1",
    categoria: "Computo",
    stock: false,
    sku: "SKU123",
    precio: 100,
    cntd: 0,
    status: "Pendiente"
  }
];

const Tienda = () => {
  const router = useRouter();
  const [selectedTask, setSelectedTask] = useState(null);
  const [activeStock, setActiveStock] = useState(false);
  const [datos, setDatos] = useState(data);

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

  const handleStock = () => {
    setActiveStock(!activeStock);
  };

  const toggleStock = index => {
    const updatedProducts = [...datos];
    updatedProducts[index].stock = !updatedProducts[index].stock;
    setDatos(updatedProducts);
  };

  return (
    <div className="flex flex-col max-w-[1350px] w-full">
      <NavbarAdmin />
      <div className="ml-[90px] flex flex-col gap-2">
        <div className="bg-white rounded-[20px] ">
          <div className="flex justify-evenly">
            <Card img={arrow} title="Ventas del día" amount="S/. 1,000.00" color="#3FD077" />
            <div className="border-l border-[#3C4A5B] my-4"></div>
            <Card img={arrow} title="Ventas de la semana" amount="S/. 10,000.00" color="#3FD077" />
            <div className="border-l border-[#3C4A5B] my-4"></div>
            <Card img={packages} title="Pedidos nuevos" amount="+20" color="#3FD0D0" />
            <div className="border-l border-[#3C4A5B] my-4"></div>
            <Card img={packages} title="Entregados" amount="120" color="#3FD0D0" />
            <div className="border-l border-[#3C4A5B] my-4"></div>
            <Card img={packages} title="Pedidos Totales" amount="140" color="#3FD0D0" />
          </div>
        </div>

        <div className="w-full pb-5 bg-white px-10 py-3 rounded-[20px]">
          <h4 className="text-[28px] text-[#3C4A5B] font-[500]">Filtros</h4>
          <div className="flex justify-between">
            <select className="w-[375px] h-[45px] text-[24px] text-[#3C4A5B] border border-[#3C4A5B] rounded-[10px] px-2">
              <option value="">Estatus</option>
            </select>
            <select className="w-[375px] h-[45px] text-[24px] text-[#3C4A5B] border border-[#3C4A5B] rounded-[10px] px-2">
              <option value="">Categoria</option>
            </select>
            <select className="w-[375px] h-[45px] text-[24px] text-[#3C4A5B] border border-[#3C4A5B] rounded-[10px] px-2">
              <option value="">Con stock</option>
            </select>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Buscar producto"
              className="border border-[#3C4A5B] rounded-[10px] px-2 text-[22px]"
            />
            <button
              onClick={() => router.push("/admin/tienda/addproduct")}
              className="bg-green h-[45px] text-[24px] text-white   w-[272px]  rounded-[20px]">
              + Agregar Producto
            </button>
          </div>

          <div className="flex justify-center mt-8 text-[#3C4A5B]">
            <table className="w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-[#F3F3F4]">
                  <th className="px-6 py-3 text-left">
                    <input type="checkbox" />
                  </th>
                  <th className="px-6 py-3 text-left">PRODUCTO</th>
                  <th className="px-6 py-3 text-left">CATEGORIA</th>
                  <th className="px-6 py-3 text-left">STOCK</th>
                  <th className="px-6 py-3 text-left">SKU</th>
                  <th className="px-6 py-3 text-left">PRECIO</th>
                  <th className="px-6 py-3 text-left">CNTD</th>
                  <th className="px-6 py-3 text-left">STATUS</th>
                  <th className="px-6 py-3 text-left">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {datos.map((item, index) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4">
                      <input type="checkbox" />
                    </td>
                    <td className="px-6 py-4 flex flex-row items-center gap-2">
                      <div className="w-[45px] h-[45px] border border-black "></div>
                      <div>
                        <p className="text-[18px] font-[400]">{item.producto}</p>
                        <p className="text-[16px]">Nombre del product lorem</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">{item.categoria}</td>
                    <td className="px-6 py-4">
                      {item.stock ? (
                        <div
                          onClick={() => toggleStock(index)}
                          className={`text-[60px] text-green cursor-pointer`}>
                          <BiToggleRight />
                        </div>
                      ) : (
                        <div
                          onClick={() => toggleStock(index)}
                          className=" text-[60px] text-gray-300 cursor-pointer">
                          <MdToggleOff />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">{item.sku}</td>
                    <td className="px-6 py-4">{item.precio}</td>
                    <td className="px-6 py-4">{item.cntd}</td>
                    <td className="px-6 py-4">
                      {item?.status === "Publicado" ? (
                        <p className="bg-[#E6F7D9] text-[#8BDA4F] text-center py-1 px-2  rounded-[5px]">
                          Publicado
                        </p>
                      ) : item?.status === "Pendiente" ? (
                        <p className="bg-[#FFF4D9] text-[#FFB608] text-center py-1 px-2  rounded-[5px]">
                          Pendiente
                        </p>
                      ) : (
                        <p className="bg-[#FFE4E5] text-[#FF8084] text-center py-1 px-2  rounded-[5px]">
                          Agotado
                        </p>
                      )}
                    </td>
                    <td className="px-6 py-4 relative">
                      <Image
                        onClick={() => openModal(item)}
                        src={edit}
                        alt="edit"
                        className=" cursor-pointer"
                      />

                      {selectedTask === item.id && <Edit />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex mt-5 justify-end mr-8">
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
        </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Tienda;
