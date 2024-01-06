import { AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react'
import { PageContext } from '../../context/PageContainer';
import PlusButton from '../utils/PlusButton'
import Menu from './Menu'

const MenuContainer:React.FC = () => {
  
  const {viewMenu,setViewMenu} = useContext(PageContext);
  
  return (
    <div className='fixed z-[60] right-[3rem] bottom-[3rem] vsm:right-[0rem] md:bottom-[1rem] w-[170px] vsm:w-[90%] sm:x-[50%] vsm:translate-x-[-5.5%] flex flex-col items-end'>
        <AnimatePresence>{viewMenu ? <Menu/> : ''}</AnimatePresence>
        <PlusButton setViewMenu={setViewMenu} viewMenu={viewMenu}/>
    </div>
  )
}

export default MenuContainer