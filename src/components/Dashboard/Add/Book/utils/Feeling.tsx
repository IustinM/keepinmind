import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Input from '../../../../utils/Input'

interface Props{
    title:string,
}

const Feeling:React.FC<Props> = ({title}) => {

  const colors = ['#525FE1','#F86F03','#FFA41B','#43C0AC','#A93199','#FA0559']
  const [activeColor,setActiveColor] = useState<number>(0);

  const [colorIndex,setColorIndex] = useState<number>(0)

  return (
    <div className="flex flex-col justify-center mt-3 ">
      <div className="w-[400px]">
  
      </div>
      <div className="mt-2">
        <div className="flex">
          {colors.map((color:string,index:number) =>
           <div style={{backgroundColor:color}} onClick={() => setColorIndex(index)} className={`w-[25px] cursor-pointer ${index === colorIndex  ? 'opacity-[40%]' : ''} rounded-[0.2rem] flex justify-center items-center text-white h-[25px] mx-[0.1rem]`}>
            {index === colorIndex && <FontAwesomeIcon className='w-[12px]' icon={faCircleCheck}/>}
           </div>
           )}
        </div>
      </div>
    </div>
  )
}

export default Feeling