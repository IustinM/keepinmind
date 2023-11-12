import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading:React.FC = () => {
  
  return (
    <div className="fixed w-full h-full z-[50]  bg-white flex  items-center justify-center">
        <div className="flex text-default-red animate-pulse mx-auto items-center lg:pt-0 pt-[2rem]">
            <FontAwesomeIcon className='mr-2  text-[5rem]' icon={faBrain}/>
            <h2 className='text-[2rem] ml-[1rem]'>KeepInMind</h2>
        </div>
    </div>
  )
}

export default Loading