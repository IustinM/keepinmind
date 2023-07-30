import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faGear} from '@fortawesome/free-solid-svg-icons'
import NavItem from './utils/NavItem';

const Navigation:React.FC = () => {

  const navItems = ['Books','Movies','Days'];

  return (
    <div className='w-[300px] min-h-[100vh] fixed bg-default-red flex flex-col justify-around items-center'>
      <div className="flex text-white w-[70%] mx-auto items-center text-[1.8rem] pt-[2rem]">
        <FontAwesomeIcon className='mr-2' icon={faBrain}/>
        <h2>KeepInMind</h2>
      </div>
      <div className="flex flex-col text-white justify-center flex-1 w-[70%] mx-auto"> 
        <ul className='flex flex-col text-[1.4rem] min-h-[4vh]  justify-around'>
          {navItems.map((item:string,index:number) => <NavItem title={item} key={index} />)}
        </ul>
      </div>
      <div className="flex-1 flex items-end pb-10 w-[70%] mx-auto">
        <div className="w-[100px] h-[50px] bg-white relative rounded-[0.5rem] cursor-pointer">
          <FontAwesomeIcon className='w-[23px] text-default-red h-[23px] absolute top-[60%] translate-y-[-50%] left-[50%]' icon={faGear}/>
          <FontAwesomeIcon className='w-[23px] text-default-red h-[23px] absolute top-[40%] translate-y-[-50%] left-[28%]' icon={faGear}/>
        </div>
      </div>
    </div>
  )
}

export default Navigation