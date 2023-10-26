import { faBook, faCalendarDay, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props{
  name:string
}

const NoData:React.FC<Props> = ({name}) => {
  
  console.log(name);
  
  const returnIcon = () =>{
    switch(name){
      case 'movies':
        return <FontAwesomeIcon className='text-default-red  w-[120px] h-[120px]' icon={faVideo}/>
      case 'books':
        return <FontAwesomeIcon className='text-default-red  w-[120px] h-[120px]' icon={faBook}/>
      case 'days':
        return <FontAwesomeIcon className='text-default-red  w-[120px] h-[120px]' icon={faCalendarDay}/>
    }
  }
  return (
    <div className='w-[85%] mx-auto h-[70vh] '>
        <p className='text-[1.2rem] mt-2'>You don't have any {name} added for the moment</p>
        <div className="h-full flex justify-center items-center">
          {returnIcon()}
        </div>
    </div>
  )
}

export default NoData