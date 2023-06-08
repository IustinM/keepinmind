import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { faPlus} from '@fortawesome/free-solid-svg-icons'

const PlusButton = () => {
  return (
    <button className='bg-default-red w-[50px] flex items-center right-[3rem] bottom-[3rem] fixed justify-center h-[50px] rounded-full ' >
        <FontAwesomeIcon className='text-white w-[23px] h-[23px]' icon={faPlus}/>
    </button>
  )
}

export default PlusButton