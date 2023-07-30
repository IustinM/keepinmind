import React from 'react'
import { Link } from 'react-router-dom'
import PageNavigation from '../../components/Navigation/PageNavigation'
import Footer from '../../components/utils/Footer'
import LoginBody from './LoginBody'


const Login:React.FC = () => {
  return (
    <div className="">
        <div className="flex items-center mx-auto w-[85%] min-h-[10vh] justify-between">
            <PageNavigation/>
            <div className="flex items-center">
                <p className='mr-[0.7rem]'>Not registered yet?</p>
                <div className="w-[160px] flex justify-center text-[0.9rem] items-center border-[1px] shadow-md  border-[#8686866e] stransition-all px-[1.2rem] py-[0.6rem] text-[#000000c9] rounded-[0.5rem]">
                    <Link to='register'>Create account</Link>
                </div>
            </div>
        </div>
        <div className=' min-h-[80vh] flex justify-center items-center '>
            <LoginBody/>
        </div>
        <Footer/>
    </div>
  )
}

export default Login