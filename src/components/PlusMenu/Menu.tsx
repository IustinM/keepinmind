import {faPen, faPlus, faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { useContext } from 'react';
import { PageContext } from '../../context/PageContainer';
import { hiddenTranslateVariant } from '../utils/variants';

const Menu = () => {
    const {setHideAddModal,setEditMode,editMode,setSorted,sorted,} = useContext(PageContext);
  
      const sortItemsHandler = () =>{
        setSorted(!sorted)
      }
      
  return (
        <motion.div variants={hiddenTranslateVariant(0)} animate={'show'} initial='hidden' exit='exit' className='bg-[#0000005f] text-[#ffffff] rounded-[0.5rem] mb-2 text-[1.2rem] w-[170px] flex flex-col justify-around '>
            <div onClick={sortItemsHandler} className={`border-b-[1px] ${sorted ? 'text-sky-blue bg-[#ffffffc8]' : 'text-white hover:bg-[#ffffffc8] hover:text-[#0000004f]'} cursor-pointer flex justify-between transition-all  rounded-t-[0.5rem] border-[#ffffff50] py-3`}>
                <span className='px-3'>Sort items</span>
                <FontAwesomeIcon className='px-3 mr-2' icon={faSort}/>
            </div>
            <div onClick={()=> setEditMode(!editMode)} className=" border-b-[1px] cursor-pointer flex justify-between transition-all hover:bg-[#ffffffc8]  hover:text-[#0000004f] border-[#ffffff50] py-3">
                <span className='px-3'>Edit page</span>
                <FontAwesomeIcon className='px-3 mr-2' icon={faPen}/>
            </div>
            <div onClick={()=> setHideAddModal(true)} className="py-3 cursor-pointer flex justify-between hover:bg-[#ffffffc8]  transition-all rounded-b-[0.5rem] hover:text-[#0000004f]">
                <span className='px-3'>Add item</span>
                <FontAwesomeIcon className='px-3 mr-2' icon={faPlus}/>
            </div>
        </motion.div>
  )
}

export default Menu