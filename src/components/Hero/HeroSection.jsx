import ImgGallery from "./ImgGallery";

const HeroSection = () => {
  return (
    <section className="hidden lg:block md:w-[80%]  lg:w-1/2">
      <div className=" md:mb-5 lg:mb-0">
        <h1 className=" text-title md:text-[34px] xl:text-[40px] font-bold leading-10 lg:mb-2 xl:mb-5">
          La manera mas fácil de comprar
        </h1>
        <p className="md:text-[28px]  lg:text-[24px] xl:text-[26px] lg:pb-[3%] xl:pb-[5%] leading-9">
          Regístrate, busca y obtenlo. Encuentra el producto que desees a precios inimaginables, con
          ofertas que ayudaran a crecer tus bolsillos y con simples maneras de pago.
        </p>
      </div>
      <ImgGallery />
    </section>
  );
};

export default HeroSection;
