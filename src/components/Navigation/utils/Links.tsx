import React from 'react'
import NavItem from './NavItem'



const Links:React.FC = () => {
  const navItems = ['Books','Movies','Days'];

  return (
    <div className="flex flex-col lg:my-[2rem] text-white justify-center flex-1 w-[70%] lg:w-auto mx-auto"> 
    <ul className='flex flex-col text-[1.4rem] min-h-[4vh]  justify-around'>
      {navItems.map((item:string,index:number) => <NavItem title={item} key={index} />)}
    </ul>
  </div>
  )
}

export default Links