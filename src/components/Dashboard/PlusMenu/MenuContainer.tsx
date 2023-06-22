import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import PlusButton from '../../utils/PlusButton'
import Menu from './Menu'

const MenuContainer:React.FC = () => {
  const [viewMenu,setViewMenu] = useState<boolean>(false);

  return (
    <div className='fixed right-[3rem] bottom-[3rem] w-[170px] flex flex-col items-center'>
        <AnimatePresence>{viewMenu ? <Menu/> : ''}</AnimatePresence>
        <PlusButton setViewMenu={setViewMenu} viewMenu={viewMenu}/>
    </div>
  )
}

export default MenuContainer