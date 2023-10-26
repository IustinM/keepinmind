import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext';
import Input from '../../components/utils/Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const LoginBody:React.FC = () => {

    const navigate = useNavigate();
    const [email,setEmail]= useState<string>('');
    const [password,setPassword] = useState<string>('');
    const {userLogged,setUserLogged} = useContext(UserContext);
    
    const submitLogin = (e:React.SyntheticEvent):void => {
        e.preventDefault();
        console.log(email,password)
        try{
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
                setUserLogged(true);
                navigate('/books');
            })
        }catch(err){
            console.log(err);
        }
    };

  return (
    <div className='w-[330px] h-[400px] border-[1px] shadow-md  border-[#8686866e] rounded-[0.3rem] border-textInputGrey'>
        <div className="flex justify-center">
            <h2 className="text-[1.4rem] mt-[1rem]">Sign in</h2>
        </div>
        <form onSubmit={submitLogin} className=" my-[1rem] w-[85%] mx-auto ">
            <h4 className='mb-[0.3rem]'>Email:</h4>
            <Input inputId='emailLogin' labelText={'Please enter your email'} setInputValue={setEmail} inputValue={email}/>
            <h4 className='mb-[0.3rem] mt-[0.5rem]'>Password:</h4>
            <Input inputId='passwordLogin' labelText={'Please enter your password'} setInputValue={setPassword} inputValue={password}/>
            <div className="flex flex-col w-[85%] mx-auto items-end text-right  text-[0.9rem]">
            <p className="underline cursor-pointer">Forgot password? </p>
            </div>
            <div className="flex justify-center w-[85%] mx-auto mt-[2rem]">
                <button type='submit'  className='w-full bg-default-red h-[50px] hover:bg-metal-red transition-all text-white rounded-[0.5rem]'>Submit</button>
            </div>
        </form>
       
    </div>
  )
}

export default LoginBody