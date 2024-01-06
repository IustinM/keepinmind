import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../context/UserContext';
import { useContext, useState } from 'react';
import Links from './utils/Links';
import UserNav from './utils/UserNav';
import Burger from './utils/Burger';
import { AnimatePresence, motion } from 'framer-motion';
import { hiddenTranslateVariant } from '../utils/variants';

const Navigation:React.FC = () => {
 
  const {username} = useContext(UserContext);
  const [hideBurgerNav,setHideBurgerNav] = useState<boolean>(false);

  return (
    <div className='w-[300px] min-h-[100vh] lg:min-h-[10vh] z-[150] lg:flex-row lg:w-full fixed lg:relative bg-default-red flex flex-col items-center'>
      <div className="flex text-white w-[70%] mx-auto items-center text-[1.8rem] mdx:text-[1.4rem] md:text-[1.2rem] ml-[0.5rem] mdx:ml-[1rem]  lg:pt-0 pt-[2rem]">
        <FontAwesomeIcon className='mr-2 sm:hidden' icon={faBrain}/>
        <h2 className=''>KeepInMind</h2>
      </div>
      <Burger hideBurgerNav={hideBurgerNav} setHideBurgerNav={setHideBurgerNav}/>
      <div className="lg:absolute flex flex-col justify-around min-h-[90vh]  lg:hidden lg:bottom-0 lg:translate-y-[100%] lg:bg-default-red lg:w-full lg:flex-col lg:justify-center lg:items-center">
        <Links/>
        <UserNav username={username}/>
      </div>
      
      <AnimatePresence>
        {
          !hideBurgerNav &&
          <motion.div variants={hiddenTranslateVariant(100)} animate={'show'} initial='hidden' exit='exit'  className="lg:absolute lg:bottom-0 lg:translate-y-[100%] lg:bg-default-red lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center">
          <Links/>
          <UserNav username={username}/>
        </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default Navigation