import { faFilter, faPen, faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { useContext } from 'react';
import {BookContext} from '../../context/BookContext';
import { PageContext } from '../../context/PageContainer';

const Menu = () => {
    const {setHideAddModal,setEditMode,editMode} = useContext(PageContext);
    const variants = {
        hidden: { 
            y:'50%',
            opacity: 0 
        },
        exit: { 
            y:'10%',
            opacity: 0 
        },
        show: {
          opacity: 1,
          y:'0%',
          transition: {
            delayChildren: 0.5
          }
        }
      }
      
  return (
        <motion.div variants={variants} animate={'show'} initial='hidden' exit='exit' className='bg-[#0000005f] text-[#ffffff] rounded-[0.5rem] mb-2 text-[1.2rem] w-[170px] flex flex-col justify-around '>
            <div className=" border-b-[1px] cursor-pointer flex justify-between transition-all hover:bg-[#ffffffc8] rounded-t-[0.5rem]  hover:text-[#0000004f] border-[#ffffff50] py-3">
                <span className='px-3'>Sort</span>
                <FontAwesomeIcon className='px-3 mr-2' icon={faFilter}/>
            </div>
            <div onClick={()=> setEditMode(!editMode)} className=" border-b-[1px] cursor-pointer flex justify-between transition-all hover:bg-[#ffffffc8]  hover:text-[#0000004f] border-[#ffffff50] py-3">
                <span className='px-3'>Edit page</span>
                <FontAwesomeIcon className='px-3 mr-2' icon={faPen}/>
            </div>
            <div onClick={()=> setHideAddModal(true)} className="py-3 cursor-pointer flex justify-between hover:bg-[#ffffffc8]  transition-all rounded-b-[0.5rem] hover:text-[#0000004f]">
                <span className='px-3'>Add item</span>
                <FontAwesomeIcon className='px-3 mr-2' icon={faSort}/>
            </div>
        </motion.div>
  )
}

export default Menu