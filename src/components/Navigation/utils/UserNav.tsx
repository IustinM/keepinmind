import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

interface Props{
    username:string
}

const UserNav:React.FC<Props>= ({username}) => {
    
  return (
    <div className="flex-1 flex items-end pb-10 w-[70%] lg:w-auto mx-auto">
    <Link to='/user'>
      <div className="flex">
            <div className="w-[50px] h-[50px] bg-white flex justify-center items-center  rounded-[0.5rem] cursor-pointer">
              {/* <FontAwesomeIcon className='w-[23px] text-default-red h-[23px] absolute top-[60%] translate-y-[-50%] left-[50%]' icon={faGear}/>
              <FontAwesomeIcon className='w-[23px] text-default-red h-[23px] absolute top-[40%] translate-y-[-50%] left-[28%]' icon={faGear}/> */}
                <FontAwesomeIcon className=' w-[30px] text-default-red h-[30px]' icon={faUser}/>
            </div>
            <div className="flex h-[50px] items-center mx-3">
              <div className="text-white ">{username}</div>
            </div>
            </div>
      </Link>
  </div>
  )
}

export default UserNav