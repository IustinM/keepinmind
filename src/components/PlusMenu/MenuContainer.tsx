import { AnimatePresence } from 'framer-motion';
import React, { useContext, useState } from 'react'
import { PageContext } from '../../context/PageContainer';
import PlusButton from '../utils/PlusButton'
import Menu from './Menu'

const MenuContainer:React.FC = () => {
  
  const {viewMenu,setViewMenu} = useContext(PageContext);
  
  return (
    <div className='fixed z-[60] right-[3rem] bottom-[3rem] w-[170px] flex flex-col items-center'>
        <AnimatePresence>{viewMenu ? <Menu/> : ''}</AnimatePresence>
        <PlusButton setViewMenu={setViewMenu} viewMenu={viewMenu}/>
    </div>
  )
}

export default MenuContainer