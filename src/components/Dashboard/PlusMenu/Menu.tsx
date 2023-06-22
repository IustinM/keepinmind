import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

const Menu = () => {
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
        <motion.div variants={variants} animate={'show'} initial='hidden' exit='exit' className='bg-[#0000004f] text-[#ffffff] rounded-[0.5rem] mb-2 text-[1.2rem] w-[170px] flex flex-col justify-around '>
            <div className=" py-3 cursor-pointer flex justify-between transition-all hover:bg-[#ffffffc8] rounded-t-[0.5rem] hover:text-[#0000004f]">
                <span className='px-3'>Filter</span> 
                <FontAwesomeIcon className='mr-2 px-3' icon={faSort}/>
            </div>
            <div className=" border-y-[1px] cursor-pointer flex justify-between transition-all hover:bg-[#ffffffc8]  hover:text-[#0000004f] border-[#ffffff50] py-3">
                <span className='px-3'>Sort</span>
                <FontAwesomeIcon className='px-3 mr-2' icon={faFilter}/>
            </div>
            <div className="py-3 cursor-pointer flex justify-between hover:bg-[#ffffffc8]  transition-all rounded-b-[0.5rem] hover:text-[#0000004f]">
                <span className='px-3'>Add item</span>
                <FontAwesomeIcon className='px-3 mr-2' icon={faSort}/>
            </div>
        </motion.div>
  )
}

export default Menu