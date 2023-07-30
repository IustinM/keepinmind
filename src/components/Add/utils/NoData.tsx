import React from 'react'

interface Props{
  name:string
}

const NoData:React.FC<Props> = ({name}) => {
  return (
    <div className='w-[85%] mx-auto '>
        <p className='text-[1.2rem] mt-2'>You don't have any {name} added for the moment</p>
    </div>
  )
}

export default NoData