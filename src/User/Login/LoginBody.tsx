import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import Input from '../../components/utils/Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormButton from '../Utils/FormButton';
import { isValidEmail } from '../../components/utils/utilFunctions';
import FormError from '../../components/utils/FormError';
import { PageContext } from '../../context/PageContainer';

const LoginBody:React.FC = () => {

    const navigate = useNavigate();
    const [email,setEmailLogin]= useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [disableButton,setDisableButton] = useState<boolean>(false)
    const [error,setError] = useState<string>('');
    const {setUserLogged,setEmail,setUsername} = useContext(UserContext);
    const {setLoadingApp} = useContext(PageContext)
    
    const submitLogin = (e:React.SyntheticEvent):void => {
        e.preventDefault();
        if(isValidEmail(email)){
         
                setIsLoading(true);
                axios.post(`${process.env.REACT_APP_API_URL}/login`,{
                    email:email,
                    password:password
                },{
                    withCredentials:true
                }).then((result:any) => {
                    if(result.status !== 200){
                        console.error('Something went wrong');
                        return
                    }
                    setIsLoading(false);
                    localStorage.setItem('userInfo',JSON.stringify('logged'));
                    setUserLogged(true);
                    setUsername(result.data.username);
                    setEmail(result.data.email);
                    setLoadingApp(true);
                    navigate('/books');
                    return;
                }).catch((err:any) =>{
                    console.log('here2')
                    console.log(err)
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
    <div className='w-[330px] h-[400px] border-[1px] shadow-md  border-[#8686866e] rounded-[0.3rem] border-textInputGrey'>
        <div className="flex justify-center">
            <h2 className="text-[1.4rem] mt-[1rem]">Sign in</h2>
        </div>
        <div className="my-[0.5rem] w-[80%] mx-auto ">
            {error?
                <FormError text={error}/> 
                :
                <div className='h-[30px]'></div>
            }
        </div>
        <form onSubmit={submitLogin} className=" my-[1rem] w-[85%] mx-auto ">
            <h4 className='mb-[0.3rem]'>Email:</h4>
            <Input inputId='emailLogin' labelText={'Please enter your email'} setInputValue={setEmailLogin} inputValue={email}/>
            <h4 className='mb-[0.3rem] mt-[0.5rem]'>Password:</h4>
            <Input inputId='passwordLogin' password labelText={'Please enter your password'} setInputValue={setPassword} inputValue={password}/>
            <div className="flex flex-col w-[85%] mx-auto items-end text-right  text-[0.9rem]">
            <p className="underline cursor-pointer">Forgot password? </p>
            </div>
            <div className="flex justify-center w-[85%] mx-auto mt-[2rem]">
                <FormButton text='Submit' disableButton={disableButton} isLoading={isLoading}/> 
            </div>
        </form>
       
    </div>
  )
}

export default LoginBody