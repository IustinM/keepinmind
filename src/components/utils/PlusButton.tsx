import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { faPlus} from '@fortawesome/free-solid-svg-icons'

interface Props{
    viewMenu:boolean,
    setViewMenu:React.Dispatch<React.SetStateAction<boolean>>
}

const PlusButton:React.FC<Props> = ({viewMenu,setViewMenu}) => {
  return (
    <button onClick={() => setViewMenu(!viewMenu)} className='bg-default-red w-[50px] flex items-center justify-center h-[50px] rounded-full ' >
        <FontAwesomeIcon className='text-white w-[23px] h-[23px]' icon={faPlus}/>
    </button>
  )
}

export default PlusButton