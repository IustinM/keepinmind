import React, { useEffect, useState } from 'react'
import Input from '../../components/utils/Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormButton from '../Utils/FormButton';
import { isValidEmail } from '../../components/utils/utilFunctions';
import FormError from '../../components/utils/FormError';


const ForgotPasswordBody:React.FC = () => {

    const navigate = useNavigate();
    
    //local state -->
    const [email,setEmailLogin]= useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [disableButton,setDisableButton] = useState<boolean>(false)
    const [error,setError] = useState<string>('');
    //<-- local state 
    

    const submitPassword = (e:React.SyntheticEvent):void => {
        e.preventDefault();
        if(isValidEmail(email)){
                setIsLoading(true);
                axios.post(`${process.env.REACT_APP_API_URL}/update-password`,{
                    email:email,
                    newPassword:password
                },{
                    withCredentials:true
                }).then((result:any) => {
                    if(result.status !== 200){
                        console.error('Something went wrong');
                        return
                    }
                    setIsLoading(false);
                    navigate('/login');
                    return;

                }).catch((err:any) =>{
                setIsLoading(false);
                if(err.response.data ){
                    setError(err.response.data)
                    }else{
                    setError('Something went wrong')
               }
            });
        }else{
            setError('Please enter an valid email')
        }
    };

    useEffect(() => {
        if(email.length <= 0 || password.length <=0){
            setDisableButton(true)
        }else{
            setDisableButton(false)
        }
        setError('')
    },[email,password])

  return (
    <div className='w-[330px] border-[1px] shadow-md  border-[#8686866e] rounded-[0.3rem] border-textInputGrey'>
        <div className="flex justify-center">
            <h2 className="text-[1.4rem] mt-[1rem]">Reset your password</h2>
        </div>
        <div className="my-[0.5rem] w-[80%] mx-auto ">
            {error?
                <FormError text={error}/> 
                :
                <div className='h-[30px]'></div>
            }
        </div>
        <form onSubmit={submitPassword} className=" my-[1rem] w-[85%] mx-auto ">
            <h4 className='mb-[0.3rem]'>Email:</h4>
            <Input inputId='emailLogin' labelText={'Please enter your email'} setInputValue={setEmailLogin} inputValue={email}/>
            <h4 className='mb-[0.3rem] mt-[0.5rem]'>Password:</h4>
            <Input inputId='passwordLogin' password labelText={'Please enter a new password'} setInputValue={setPassword} inputValue={password}/>
            <div className="flex flex-col w-[85%] mx-auto items-end text-right  text-[0.9rem]">
            </div>
            <div className="flex justify-center w-[85%] mx-auto mt-[2rem]">
                <FormButton text='Submit' disableButton={disableButton} isLoading={isLoading}/> 
            </div>
        </form>
       
    </div>
  )
}

export default ForgotPasswordBody;