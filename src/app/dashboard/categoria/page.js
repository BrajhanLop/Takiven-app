import Filtro from "@/components/categoria/Filtro";
import ResultContainer from "@/components/categoria/ResultContainer";
import Titulo from "@/components/categoria/Titulo";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <Titulo />

      <div className="flex gap-5 justify-center">
        <Filtro />
        <ResultContainer />
      </div>

    </div>
  );
};

export default page;
