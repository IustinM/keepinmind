import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/userContext';
import Input from '../../components/utils/Input';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const RegisterBody:React.FC = () => {

    const {username,setUsername} = useContext(UserContext);
    const [emailRegister,setEmailRegister] = useState<string>('');
    const [passwordRegister,setPasswordRegister] = useState<string>('');
    const [confirmPassword,setConfirmPassword] = useState<string>('');
    const [userExists,setUserExists] = useState<boolean>(false)
    const navigate = useNavigate();
    const submitRegister = async (e:React.SyntheticEvent) => {
        e.preventDefault();
        try{
            axios.post(`${process.env.REACT_APP_API_URL}/register`,{
                email:emailRegister,
                username:username,
                password:passwordRegister
            }).then((result:any) =>{
                if(result.status !== 200){
                    console.error('Something went wrong!');
                    return;
                }
                if(result.data.userExists){
                    setUserExists(true)
                    return
                }else{
                    navigate('/login')
                }
            })
        }catch(err){
            console.log(err);
        }
    };
    useEffect(() => {
        setUserExists(false);
    },[username,emailRegister,passwordRegister])

  return (
    <div className='w-[360px] h-[550px] border-[1px] shadow-md  border-[#8686866e] rounded-[0.3rem] border-textInputGrey'>
        <div className="flex justify-center">
            <h2 className="text-[1.4rem] mt-[1rem]">Sign in</h2>
        </div>
        <form onSubmit={submitRegister} className=" my-[1rem] w-[80%] mx-auto ">
            {userExists && <div className="text-removeRed text-[1.2rem] flex items-center">
                <FontAwesomeIcon icon={faExclamationCircle}/>
                <p className='mx-1'>User already exists!</p>
            </div>}
            <h4 className='my-[0.3rem]'>Email:</h4>
            <Input inputId='emailRegister' labelText={'Please enter your email'} setInputValue={setEmailRegister} inputValue={emailRegister}/>
            <h4 className='my-[0.3rem]'>Username:</h4>
            <Input inputId='usernameRegister' labelText={'Please enter your username'} setInputValue={setUsername} inputValue={username}/>
            <h4 className='my-[0.3rem]'>Password:</h4>
            <Input inputId='passwordRegister' labelText={'Please enter your password'} setInputValue={setPasswordRegister} inputValue={passwordRegister}/>
            <h4 className='my-[0.3rem]'>Confirm password:</h4>
            <Input inputId='coPasswordRegister' labelText={'Please confirm your password'} setInputValue={setConfirmPassword} inputValue={confirmPassword}/>
            <div className="flex flex-col w-[80%] mt-3 mx-auto items-end text-right  text-[0.9rem]">
                <p className="underline cursor-pointer">Forgot password? </p>
    
            </div>
            <div className="flex justify-center w-[80%] mx-auto mt-[2rem]">
                <button type='submit' className='w-full bg-default-red h-[50px] hover:bg-metal-red transition-all text-white rounded-[0.5rem]'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterBody