import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const PageNavigation = () => {

  const {setEmail,setUsername,setIsAdmin,setUserLogged} = useContext(UserContext);
  const navigate = useNavigate();

  const navigateDemoHandler = () => {
    setEmail('admin');
    setUsername('admin');
    localStorage.setItem('admin',JSON.stringify('true'));
    localStorage.setItem('userInfo',JSON.stringify('logged'));
    setUserLogged(true);
    setIsAdmin(true);
    navigate('/books');
  }

  return (
    <div className='mdx:py-[1rem] flex items-center'>
        <div className="flex  items-center text-[1.8rem] ">
        <FontAwesomeIcon className='mr-2 text-default-red ' icon={faBrain}/>
        <h2>KeepInMind</h2>
      </div>
      <div className="w-[100px] ml-[2rem]">
          <button  onClick={navigateDemoHandler}  className='w-full bg-default-red h-[50px] hover:bg-metal-red transition-all text-white rounded-[0.5rem]'>Demo</button>
      </div>
    </div>
  )
}

export default PageNavigation