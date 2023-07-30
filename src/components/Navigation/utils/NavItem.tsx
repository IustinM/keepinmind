import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PageContext } from '../../../context/PageContainer'

interface Props{
    title:string,
    active?:boolean
}
const NavItem:React.FC<Props> = ({title,active}) => {
  const {currentNavItem,setCurrentNavItem,setHideAddModal,setViewMenu,setEditMode} = useContext(PageContext);

  const navElementHandler = () =>{
    setCurrentNavItem(title.toLowerCase());
    setHideAddModal(false);
    setViewMenu(false);
    setEditMode(false);
  }

  return (
    <Link to={`/${title.toLowerCase()}`}>
      <li onClick={navElementHandler} className='flex my-2s items-center cursor-pointer mb-3'>
          <span>{title}</span>
          {title.toLowerCase() === currentNavItem && <FontAwesomeIcon className='w-[18px] h-[18px] mx-2 mt-[0.1rem]' icon={faCircle}/>}
      </li>
    </Link>
  )
}

export default NavItem