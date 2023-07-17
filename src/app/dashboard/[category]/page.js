import Filtro from '@/components/categoria/Filtro';
import ResultContainer from '@/components/categoria/ResultContainer';
import Titulo from '@/components/categoria/Titulo';
import React from 'react'

const page = ({params}) => {
    const {category} = params;
    
  return (
    <div className="flex flex-col items-center">
    <Titulo category={category} />

    <div className="flex lg:gap-5 gap-2 justify-center mx-1">
      <Filtro />
      <ResultContainer />
    </div>

  </div>
  )
}

export default page