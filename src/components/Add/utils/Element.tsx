import React from 'react'

interface element{
    [string:string]:string
}
interface Props{
    elements:element[],
    description:string,
    
}

const Element:React.FC<Props> = ({elements,description}) => {
  
  return (
    <div className='mb-4'>
    <h2 className='bold text-[1.2rem] md:text-[1rem]'>{description}:</h2>
    <div className=" flex flex-wrap">
        {elements.map((element:element)=>
        <div className='bg-bookElementBg p-[0.5rem] mr-4 rounded-[0.5rem] text-white md:text-[0.9rem] my-[0.4rem] ' key={element.index}>{element.text}</div>)
        }
    </div>
</div>
  )
}

export default Element