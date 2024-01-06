import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import Input from '../../components/utils/Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormError from '../../components/utils/FormError';
import { isValidEmail } from '../../components/utils/utilFunctions';
import FormButton from '../Utils/FormButton';

const RegisterBody:React.FC = () => {

    //context
    const {username,setUsername} = useContext(UserContext);

    //local state -->
    const [emailRegister,setEmailRegister] = useState<string>('');
    const [passwordRegister,setPasswordRegister] = useState<string>('');
    const [confirmPassword,setConfirmPassword] = useState<string>('');
    const [disableButton,setDisableButton] = useState<boolean>(true);
    const [userExists,setUserExists] = useState<boolean>(false);
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [error,setError] = useState<string>('');
    //<-- local state

    const navigate = useNavigate();

    const submitRegister = async (e:React.SyntheticEvent) => {
        console.log(`${process.env.REACT_APP_API_URL}/register`)
        e.preventDefault();
        if(isValidEmail(emailRegister)){
            try{
                if(passwordRegister === confirmPassword){
                    setIsLoading(true);
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
                            setIsLoading(false);
                            setUserExists(true)
                            return
                        }else{
                            navigate('/login')
                        }
                    })
                }else{
                    setError('The passwords are not matching')
                }
            }catch(err){
                setError('The registration could not be done')
                console.log(err);
            } 
        }else{
            setError('Please enter an valid email')
        }
    };

    useEffect(() => {
        if(username.length > 0 && emailRegister.length > 0 && passwordRegister.length > 0 && confirmPassword.length > 0){
            setDisableButton(false);
        }
        setUserExists(false);
        setError('')
    },[username,emailRegister,passwordRegister,confirmPassword]);

    useEffect(() => {
        setUsername('');
    },[])

  return (
    <div className='w-[360px] h-[550px] border-[1px] shadow-md sm:border-0 sm:shadow-none  border-[#8686866e] rounded-[0.3rem] border-textInputGrey'>
        <div className="flex justify-center">
            <h2 className="text-[1.4rem] mt-[1rem]">Register</h2>
        </div>
        <div className="my-[0.5rem] w-[80%] mx-auto ">
            {userExists ?<FormError text='User already exists!'/> 
                : error?
                <FormError text={error}/> 
                :
                <div className='h-[30px]'></div>
            }
        </div>
        <form onSubmit={submitRegister} className=" my-[1rem] w-[80%] mx-auto ">
           
            <h4 className='my-[0.3rem]'>Email:</h4>
            <Input inputId='emailRegister' inputType='text' labelText={'Please enter your email'} setInputValue={setEmailRegister} inputValue={emailRegister}/>
            <h4 className='my-[0.3rem]'>Username:</h4>
            <Input inputId='usernameRegister' labelText={'Please enter your username'} setInputValue={setUsername} inputValue={username}/>
            <h4 className='my-[0.3rem]'>Password:</h4>
            <Input inputId='passwordRegister' labelText={'Please enter your password'} password setInputValue={setPasswordRegister} inputValue={passwordRegister}/>
            <h4 className='my-[0.3rem]'>Confirm password:</h4>
            <Input inputId='coPasswordRegister' labelText={'Please confirm your password'} password setInputValue={setConfirmPassword} inputValue={confirmPassword}/>
            <div className="flex flex-col w-[80%] mt-3 mx-auto mb-[1rem] items-end text-right  text-[0.9rem]">
                <p className="underline cursor-pointer">Forgot password? </p>
            </div>
            <div className="flex justify-center w-[80%] mx-auto mt-[1rem]">
               <FormButton text='Submit' disableButton={disableButton} isLoading={isLoading}/>
            </div>
        </form>
    </div>
  )
}

export default RegisterBody