import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageNavigation from '../../components/Navigation/PageNavigation';
import Footer from '../../components/utils/Footer';
import ForgotPasswordBody from './ForgotPasswordBody';

const ForgotPassword:React.FC = () => {
    const [viewNote,setViewNote] = useState<boolean>(false);
  
  return (
    <div className="">
        <div className="flex items-center md:flex-col mx-auto w-[85%] min-h-[10vh] justify-between">
            <div className="flex items-center justify-center ">
                <div className="md:flex md:justify-start md:w-full md:py-4">
                    <PageNavigation/>
                </div>
               
                
            </div>
            <div className="flex md:justify-end flex-1 justify-between md:w-full items-center">
            <div className="ml-[1rem] relative md:mr-[1rem]">
                    <div onClick={()=>setViewNote(!viewNote)} className="w-[120px] cursor-pointer flex justify-center text-[0.9rem] items-center border-[1px] shadow-md  border-[#8686866e] transition-all px-[1.2rem] py-[0.6rem] text-[#000000c9] rounded-[0.5rem]">
                        {
                        !viewNote? 'View note'    :'Hide note'}
                    </div>
                    {viewNote && 
                    <div className="absolute">
                        <div className=" w-[300px] relative  border-[1px] shadow-md  border-[#8686866e] bg-white mt-[1rem] rounded-[0.5rem] p-[0.5rem]">
                    <div className="w-[15px] absolute top-[-8px] left-[20px] h-[15px] border-t-[1px] border-l-[1px] rotate-45 rounded-[0.1rem]  shadow-l-md shadow-t-md  bg-white border-[#8686866e]"></div>
                            Please note this is only a self use aplication that's why you can reset the password without a confirmation code on email. Thank you!
                        </div>
                    </div>
                    }
                </div>
                <div className="flex items-center">
                    <p className='mr-[0.7rem]'>Not registered yet?</p>
                    <div className="w-[160px] cursor-pointer flex justify-center text-[0.9rem] items-center border-[1px] shadow-md  border-[#8686866e] stransition-all px-[1.2rem] py-[0.6rem] text-[#000000c9] rounded-[0.5rem]">
                        <Link to='/register'>Create account</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className=' min-h-[80vh] flex justify-center items-center '>
            <ForgotPasswordBody/>
        </div>
        <Footer/>
    </div>
  )
}

export default ForgotPassword