"use client";
import Footer from "@/components/admin/Footer";
import NavbarAdmin from "@/components/admin/NavbarAdmin";
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const AddProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = event => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    }
  };

  const handleImageDrop = event => {
    event.preventDefault();
    const imageFile = event.dataTransfer.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    }
  };

  const handleDragOver = event => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col max-w-[1350px] w-full">
      <NavbarAdmin />
      <div className="ml-[70px] text-[#3C4A5B]">
        <p className="text-[18px] font-[400] mb-3">Tienda / Agregar Producto</p>
        <div className="flex gap-5 text-[18px]">
          <div className="flex flex-col gap-4">
            <div className="  w-[839px] bg-white rounded-[20px] p-4 flex flex-col gap-2">
              <p className="text-[#3C4A5B] font-[400]">Informacion</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Marca"
                  className="w-[191px] h-[44px] rounded-[10px] border font-[300] text-[16px] pl-3"
                />
                <input
                  type="text"
                  placeholder="Nombre del Producto"
                  className="w-[605px] h-[44px]  rounded-[10px] border text-[16px] font-[300] pl-3"
                />
              </div>
              <div className="flex items-center gap-2">
                <p>SKU:</p>
                <input
                  type="text"
                  placeholder="TK"
                  className="w-[43px] h-[44px] rounded-[10px] border font-[300] text-[16px] pl-3 "
                />
                <p> - </p>
                <input
                  type="text"
                  placeholder=""
                  className="w-[43px] h-[44px] rounded-[10px] border font-[300] text-[16px] pl-3"
                />
                <p> - </p>
                <input
                  type="text"
                  placeholder=""
                  className="w-[157px] h-[44px] rounded-[10px] border font-[300] text-[16px] pl-3"
                />
                <p>Cantidad/Stock:</p>
                <input
                  type="text"
                  placeholder=""
                  className="w-[60px] h-[44px] rounded-[10px] border font-[300] text-[16px] pl-3"
                />
                <p>Categoria:</p>
                <select
                  name=""
                  id=""
                  className="w-[171px] h-[44px] rounded-[10px] border font-[300] text-[16px] pl-3">
                  <option value=""></option>
                </select>
              </div>
              <p>Politicas y Garantías</p>
              <div className="flex gap-2 items-center">
                <p className="text-[#3C4A5B80] font-[300] text-[16px] w-[135px]">
                  Cambio de opinión:
                </p>
                <div className="relative">
                  <select
                    name=""
                    id=""
                    className="appearance-none w-[61px] h-[30px] rounded-[10px] border font-[300] text-[16px] pl-3">
                    <option value="">Si</option>
                    <option value="">No</option>
                  </select>
                  <div className=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <TiArrowSortedDown />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-[#3C4A5B80] font-[300] text-[16px] w-[135px]">
                  Cambio de Talla:
                </p>
                <select
                  name=""
                  id=""
                  className="w-[61px] h-[30px] rounded-[10px] border font-[300] text-[16px] pl-3">
                  <option value="">Si</option>
                  <option value="">No</option>
                </select>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-[#3C4A5B80] font-[300] text-[16px] w-[135px]">
                  Falla de Fábrica:
                </p>
                <select
                  name=""
                  id=""
                  className="w-[61px] h-[30px] rounded-[10px] border font-[300] text-[16px] pl-3">
                  <option value="">Si</option>
                  <option value="">No</option>
                </select>
              </div>
              <p className="text-[#3C4A5B80] font-[300] text-[16px]">
                ¿Cuantos días tengo para devolver el producto?
              </p>
              <textarea
                name=""
                id=""
                cols="30"
                placeholder="Todo cambio o devolucion se realizará hasta siete (7) dias calendarios despues de la entrega del producto. 
           Para mayor detalle consultar las Politicas de Cambios y Devoluciones"
                className="h-[78px] rounded-[10px] border font-[300] text-[16px] pl-3 pr-3 pt-3"></textarea>
              <p className="font-[400]">Descripción del producto</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Agrega una descripcion del producto que vas ofrecer, maximo 1000 caracteres."
                className="h-[194px] rounded-[10px] border font-[300] text-[16px] pl-3 pr-3 pt-3"></textarea>
            </div>
            <div className="  w-[839px] bg-white rounded-[20px] p-4">
              <p>Multimedia</p>
              <div className="w-[807px] h-[351px] border-2 rounded-[10px] flex items-center justify-center">
                <div
                  className=" flex flex-col items-center"
                  onDrop={handleImageDrop}
                  onDragOver={handleDragOver}>
                  {/* <button
                    onClick={handleImageUpload}
                    className="w-[247px] h-[65px] text-[22px] border border-[#3FD077] text-[#3FD077] rounded-[20px] hover:text-white hover:bg-[#3FD077]">
                    Subir Imagen
                  </button>
                  {selectedImage && (
                    <div className="max-w-xs mx-auto border rounded-lg overflow-hidden shadow-lg">
                      <img src={selectedImage} alt="Selected" className="w-full h-auto" />
                    </div>
                  )} */}

                  {selectedImage ? (
                    <div className="flex items-center gap-2">
                      <div className="w-[184px] h-[266px] border-dashed border-2 border-gray-300 flex justify-between items-center rounded-[20px] flex-col">
                        <div className="h-[70%] flex justify-center items-center">
                          <img src={selectedImage} alt="Selected" className="w-full h-auto py-1 px-2" />
                        </div>
                        <div>
                          <div className="border-dashed border-t border-b border-gray-300 w-full">
                            <p className="text-[14px] text-gray-300 font-[300]">
                              Nombre del Archivo subido
                            </p>
                            <p className="text-[10px] font-[500] text-gray-300">0.5MB</p>
                          </div>
                          <p className="text-[14px] text-gray-300 font-[500] text-center">Eliminar Foto</p>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="imageInput"
                          className="cursor-pointer flex justify-center items-center w-[66px] h-[66px] text-[22px] border border-[#3FD077] text-[#3FD077] rounded-full hover:text-white hover:bg-[#3FD077]">
                          +
                        </label>
                        <input
                          type="file"
                          id="imageInput"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-[22px] font-[500] text-[#9DA4AD] text-center">
                        Arrastra y suelta tu imagen aqui
                      </p>
                      <p className="text-[22px] font-[500] text-[#9DA4AD] text-center">o</p>
                      <label
                        htmlFor="imageInput"
                        className="cursor-pointer flex justify-center items-center w-[247px] h-[65px] text-[22px] border border-[#3FD077] text-[#3FD077] rounded-[20px] hover:text-white hover:bg-[#3FD077]">
                        Subir Imagen
                      </label>
                      <input
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-4">
            <div className="  w-[436px] bg-white rounded-[20px] px-4 py-4">
              <p>Precios</p>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Precio de Lista"
                  className="w-full h-[44px] rounded-[10px] border font-[300] text-[16px] pl-3"
                />
                <input
                  type="text"
                  placeholder="Precio de Oferta"
                  className="w-full h-[44px] rounded-[10px] border font-[300] text-[16px] pl-3"
                />
              </div>
            </div>
            <div className="  w-[436px] bg-white rounded-[20px] p-4">
              <p>Variantes</p>
              <div className="flex gap-2 w-full">
                <select
                  name=""
                  id=""
                  className="w-1/2 rounded-[10px] border font-[300] text-[16px] px-3">
                  <option value="">Talla</option>
                </select>
                <input
                  type="text"
                  placeholder="45"
                  className=" h-[44px] rounded-[10px] border font-[300] text-[16px] text-[#3C4A5B80] pl-3"
                />
              </div>
              <div className="flex gap-2 w-full mt-2">
                <select
                  name=""
                  id=""
                  className="w-1/2 rounded-[10px] border font-[300] text-[16px] px-3">
                  <option value="">Talla</option>
                </select>
                <input
                  type="text"
                  placeholder="40"
                  className=" h-[44px] rounded-[10px] border font-[300] text-[16px] text-[#3C4A5B80] pl-3"
                />
              </div>

              <button className=" mt-2 w-[170px] h-[44px] text-[16px] border border-[#3FD077] text-[#3FD077] rounded-[10px] hover:text-white hover:bg-[#3FD077]">
                Añadir otra opción
              </button>
              <div className="flex gap-2 mt-2">
                <input type="checkbox" />
                <p className="font-[300] text-[16px]">Este producto no necesita de variantes</p>
              </div>
            </div>
            <div className=" w-[436px] bg-white rounded-[20px] p-4">
              <p>Especificaciones</p>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Genero"
                  className="w-1/2 h-[44px] rounded-[10px] border font-[300] text-[16px] text-[#3C4A5B80] pl-3"
                />
                <input
                  type="text"
                  placeholder="Unisex"
                  className=" h-[44px] rounded-[10px] border font-[300] text-[16px] text-[#3C4A5B80] pl-3"
                />
              </div>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Color"
                  className="w-1/2 h-[44px] rounded-[10px] border font-[300] text-[16px] text-[#3C4A5B80] pl-3"
                />
                <input
                  type="text"
                  placeholder="Verde"
                  className=" h-[44px] rounded-[10px] border font-[300] text-[16px] text-[#3C4A5B80] pl-3"
                />
              </div>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Estado"
                  className="w-1/2 h-[44px] rounded-[10px] border font-[300] text-[16px] text-[#3C4A5B80] pl-3"
                />
                <input
                  type="text"
                  placeholder="Nuevo"
                  className=" h-[44px] rounded-[10px] border font-[300] text-[16px] text-[#3C4A5B80] pl-3"
                />
              </div>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Medidas"
                  className="w-1/2 h-[44px] rounded-[10px] border font-[300] text-[16px] text-[#3C4A5B80] pl-3"
                />
                <input
                  type="text"
                  placeholder="50x100x41"
                  className=" h-[44px] rounded-[10px] border font-[300] text-[16px] text-[#3C4A5B80] pl-3"
                />
              </div>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Marca"
                  className="w-1/2 h-[44px] rounded-[10px] border font-[300] text-[16px] text-[#3C4A5B80] pl-3"
                />
                <input
                  type="text"
                  placeholder="Apple"
                  className=" h-[44px] rounded-[10px] border font-[300] text-[16px] text-[#3C4A5B80] pl-3"
                />
              </div>
              <button className=" mt-2 w-[170px] h-[44px] text-[16px] border border-[#3FD077] text-[#3FD077] rounded-[10px] hover:text-white hover:bg-[#3FD077]">
                Añadir otra opción
              </button>
              <p className="font-[300] text-[16px] mt-2">
                El producto debe contar con 5 especificaciones basicas.
              </p>
            </div>
            <div className="flex justify-end h-full items-end cursor-pointer">
              <button className="bg-[#29E197] text-white w-[247px] h-[65px] rounded-[20px]">
                Publicar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddProduct;
