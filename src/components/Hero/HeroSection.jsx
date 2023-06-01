import ImgGallery from "./ImgGallery";

const HeroSection = () => {
  return (
    <section className="w-1/2">
      <div>
        <h1 className=" text-title text-[40px] font-bold leading-10 mb-5">La manera mas fácil de comprar</h1>
        <p className="text-[30px]">
          Regístrate, busca y obtenlo. Encuentra el producto que desees a
          precios inimaginables, con ofertas que ayudaran a crecer tus bolsillos
          y con simples maneras de pago.
        </p>
      </div>
      <ImgGallery />
    </section>
  );
};

export default HeroSection;
