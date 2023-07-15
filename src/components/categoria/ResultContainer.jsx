import React from 'react'
import CardProduct from '../Product/CardProduct'

const ResultContainer = () => {

  const arr = [1,2,3, 4,5,6,7,8,9]
  return (
    <div className=' flex flex-col'>
    <div className='flex flex-wrap gap-2 xl:max-w-[980px] lg:max-w-[700px]'>
        {
          arr.map(ar => (
            <CardProduct key={ar}/>
          ))
        }

      </div>

      <div className="flex mt-5 justify-center">
        <div className="bg-[#3FD077] h-[40px] w-[40px] rounded-full flex justify-center items-center">
          <p className=" text-white"> 1</p>
        </div>
        <div className="text-[#3FD077] h-[40px] w-[40px] rounded-full  flex justify-center items-center">
          <p>2</p>
        </div>
        <div className="text-[#3FD077] h-[40px] w-[40px] rounded-full  flex justify-center items-center">
          <p>3</p>
        </div>
      </div>
      </div>
  )
}

export default ResultContainer