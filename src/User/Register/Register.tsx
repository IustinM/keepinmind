import React from 'react'
import { Link } from 'react-router-dom'
import PageNavigation from '../../components/Navigation/PageNavigation'
import Footer from '../../components/utils/Footer'
import RegisterBody from './RegisterBody'


const Register:React.FC = () => {
  return (
    <div className="">
        <div className="flex items-center mx-auto md:flex-col w-[85%] min-h-[10vh] justify-between">
            <div className="md:flex md:justify-start md:w-full md:py-4">
                <PageNavigation/>
            </div>
            <div className="flex md:justify-end md:w-full items-center">
                <p className='mr-[0.7rem]'>Already have an account?</p>
                <div className="w-[120px] hover:bg-[#5656561f] transition-all cursor-pointer flex justify-center text-[0.9rem] items-center border-[1px] shadow-md  border-[#8686866e] stransition-all px-[1.2rem] py-[0.6rem] text-[#000000c9] rounded-[0.5rem]">
                    <Link to='/login'>Sign in</Link>
                </div>
            </div>
        </div>
        <div className=' min-h-[80vh] flex justify-center items-center '>
            <RegisterBody/>
        </div>
        <Footer/>
    </div>
  )
}

export default Register