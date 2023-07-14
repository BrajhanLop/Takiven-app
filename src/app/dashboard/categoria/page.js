import Filtro from "@/components/categoria/Filtro"
import ResultContainer from "@/components/categoria/ResultContainer"
import Titulo from "@/components/categoria/Titulo"


const page = () => {
  return (
    <div className="flex flex-col">

      <Titulo/>

      <div className="flex">
        <Filtro/>
        <ResultContainer/>
      </div>


    </div>
  )
}

export default page