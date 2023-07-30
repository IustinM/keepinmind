import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import Input from '../../components/utils/Input';



const RegisterBody:React.FC = () => {

    const {emailRegister,setEmailRegister,passwordRegister,setPasswordRegister,username,setUsername,confirmPassword,setConfirmPassword} = useContext(UserContext);
    
    const submitRegister = ():void => {

    };

  return (
    <div className='w-[360px] h-[550px] border-[1px] shadow-md  border-[#8686866e] rounded-[0.3rem] border-textInputGrey'>
        <div className="flex justify-center">
            <h2 className="text-[1.4rem] mt-[1rem]">Sign in</h2>
        </div>
        <div className=" my-[1rem] w-[80%] mx-auto ">
            <h4 className='my-[0.3rem]'>Email:</h4>
            <Input inputId='emailRegister' labelText={'Please enter your email'} setInputValue={setEmailRegister} inputValue={emailRegister}/>
            <h4 className='my-[0.3rem]'>Username:</h4>
            <Input inputId='usernameRegister' labelText={'Please enter your username'} setInputValue={setUsername} inputValue={username}/>
            <h4 className='my-[0.3rem]'>Password:</h4>
            <Input inputId='passwordRegister' labelText={'Please enter your password'} setInputValue={setPasswordRegister} inputValue={passwordRegister}/>
            <h4 className='my-[0.3rem]'>Confirm password:</h4>
            <Input inputId='coPasswordRegister' labelText={'Please confirm your password'} setInputValue={setConfirmPassword} inputValue={confirmPassword}/>
        </div>
        <div className="flex flex-col w-[80%] mx-auto items-end text-right  text-[0.9rem]">
            <p className="underline cursor-pointer">Forgot password? </p>
  
        </div>
        <div className="flex justify-center w-[80%] mx-auto mt-[2rem]">
            <button onClick={submitRegister}  className='w-full bg-default-red h-[50px] hover:bg-metal-red transition-all text-white rounded-[0.5rem]'>Submit</button>
        </div>
    </div>
  )
}

export default RegisterBody