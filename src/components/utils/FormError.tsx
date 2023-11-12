import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FormError:React.FC<{text:string}> = ({text}) => {
  return (
    <div className="text-removeRed h-[30px] text-[0.9rem] flex items-center">
        <FontAwesomeIcon className='text-[1.2rem]' icon={faExclamationCircle}/>
        <p className='mx-1'>{text}</p>
    </div>
  )
}

export default FormError