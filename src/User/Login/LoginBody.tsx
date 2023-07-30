import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import Input from '../../components/utils/Input';



const LoginBody:React.FC = () => {

    const {email,setEmail,password,setPassword} = useContext(UserContext);
    
    const submitLogin = ():void => {

    };

  return (
    <div className='w-[330px] h-[400px] border-[1px] shadow-md  border-[#8686866e] rounded-[0.3rem] border-textInputGrey'>
        <div className="flex justify-center">
            <h2 className="text-[1.4rem] mt-[1rem]">Sign in</h2>
        </div>
        <div className=" my-[1rem] w-[85%] mx-auto ">
            <h4 className='mb-[0.3rem]'>Email:</h4>
            <Input inputId='emailLogin' labelText={'Please enter your email'} setInputValue={setEmail} inputValue={email}/>
            <h4 className='mb-[0.3rem] mt-[0.5rem]'>Password:</h4>
            <Input inputId='passwordLogin' labelText={'Please enter your password'} setInputValue={setPassword} inputValue={password}/>
        </div>
        <div className="flex flex-col w-[85%] mx-auto items-end text-right  text-[0.9rem]">
            <p className="underline cursor-pointer">Forgot password? </p>
  
        </div>
        <div className="flex justify-center w-[85%] mx-auto mt-[2rem]">
            <button onClick={submitLogin}  className='w-full bg-default-red h-[50px] hover:bg-metal-red transition-all text-white rounded-[0.5rem]'>Submit</button>
        </div>
    </div>
  )
}

export default LoginBody