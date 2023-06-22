import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props{
    title:string,
    active?:boolean
}
const NavItem:React.FC<Props> = ({title,active}) => {
  return (
    <li className='flex my-2s items-center cursor-pointer'>
        <span>{title}</span>
        {title === 'Books' && <FontAwesomeIcon className='w-[18px] h-[18px] mx-2 mt-[0.1rem]' icon={faCircle}/>}
    </li>
  )
}

export default NavItem