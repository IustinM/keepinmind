import React from 'react'

interface Props{
    data:string[];
    label:string,
}

const Select:React.FC<Props> = ({label,data}) => {
  return (
    <div>
        <label htmlFor="select"></label>
        <select id='select' className='w-full bg-white border-[1px] outline-none px-2 py-2 rounded-[0.3rem] mt-[0.5rem]'>
            <option selected value=''>{label}</option>
            {data.map((element:string)=><option value={element.toLowerCase()}>{element}</option>)}
        </select>
    </div>
  )
}

export default Select