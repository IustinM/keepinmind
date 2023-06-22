import React from 'react'

interface Props{
    title:string,
}

const Feeling:React.FC<Props> = ({title}) => {
  return (
    <div className="flex w-[130px] bg-gradient-to-r text-white justify-center from-glow-red to-metal-red items-center rounded-[0.5rem] m-5 h-[40px]">
        <input className='ml-3' type='checkbox'/>
        <div className="mx-1"></div>
        <p>{title}</p>
    </div>
  )
}

export default Feeling