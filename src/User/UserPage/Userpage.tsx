import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/utils/Footer'
import Input from '../../components/utils/Input'
import { UserContext } from '../../context/UserContext';
import { regenerateTokenAsync } from '../../components/Add/utils/functions'
import { isValidEmail } from '../../components/utils/utilFunctions'
import FormError from '../../components/utils/FormError'
import LoadingCircle from '../../components/utils/LoadingCircle'

const Userpage:React.FC = () => {

    const navigate = useNavigate();
    const {username,setUsername,setEmail,email} = useContext(UserContext);
    // local state -->
    const [editMode,setEditMode] = useState<boolean>(false);
    const [cancelButton,setCancelButton] = useState<boolean>(true);
    const [localUsername,setLocalUsername] = useState<string>('')
    const [localEmail,setLocalEmail] = useState<string>('');
    // functional state
    const [error,setError] = useState<string>('');
    const [isLoading ,setIsLoading] = useState<boolean>(false)
    //<-- local state 
    
    //HANDLERS AND REQUESTS -->

    const editUsernameHandler = () =>{
        if(isValidEmail(localEmail)){
            setUsername(localUsername);
            setEmail(localEmail);
            setLocalUsername('');
            setEditMode(false);
        }else{
            setError('No valid email');
        }
    }
 
    // async request that gets the user information
    const getUserProfile = async (retry = true) => {
        setIsLoading(true);
        try {
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/get-profile`, {}, {
                withCredentials: true
            });
            setIsLoading(false);
            setUsername(result.data.username)
           
        } catch (err:any) {
            regenerateTokenAsync(err,getUserProfile,retry);
            setIsLoading(false);
            if(!retry){
                setError('Cannot get the user information');
            }
        }
    }

    //request for logout the user
    const logoutUserHandler = async () =>{
        try{
            axios.get(`${process.env.REACT_APP_API_URL}/logout`,{
                withCredentials:true
            }).then(result =>{
                if(result.status !== 200){
                    console.error('Something went wrong');
                    return;
                }
                localStorage.removeItem('userInfo');
                navigate('/login');
            })
        }catch(err){
            setError('Cannot logout user')
            console.log(err);
        }
    }

    const editUserDetails = async (retry=true) =>{
     console.log(retry,'test')
        setIsLoading(true);
        try {
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/update-profile`,{
                email:email,
                username:username,
                newEmail:localEmail,
                newUsername:localUsername,
                
            },{
                withCredentials:true,
            })
                console.log(result)
                if(result.data.email){
                    setEmail(result.data.email)
                }
                if(result.data.username){
                    setUsername(result.data.username);
                }
                setEditMode(false);        
                setCancelButton(true);
        } catch (err:any) {
            regenerateTokenAsync(err,editUserDetails,retry);
            setIsLoading(false);
            if(!retry){
                setError('Cannot get the user information');
            }
        }
    }
    //<-- HANDLERS AND REQUESTS 

    //EFFECTS -->
    //this use effect enables the edit button
    useEffect(()=>{
        setIsLoading(false);
        setError('');
        console.log(localUsername !== username,isValidEmail(localEmail),editMode)
        if((localUsername !== username ) && isValidEmail(localEmail) && editMode){
            setCancelButton(false);
        }else {
            setCancelButton(true);
        }

    },[localUsername,username,localEmail]);
    useEffect(()=>{
        getUserProfile();
        setLocalEmail(email);
        setLocalUsername(username);
    },[email,username])
    //<-- EFFECTS 


  return (
    <div className='flex flex-col justify-between min-h-[100vh] '>
        {isLoading && <LoadingCircle/>}
        <div className="flex flex-col items-center">
                <div className="flex w-full items-center p-[2rem] justify-start">
                <Link to='/books'>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    <span className='mx-[0.5rem]'>Get back</span>
                </Link>
            </div>
            <div className="flex flex-col items-center    justify-center">
                    <div className="w-[150px] h-[150px] mt-7 border-[1px] shadow-md  border-[#8686866e]  flex justify-center items-center  rounded-[0.5rem] cursor-pointer">
                        <FontAwesomeIcon className=' w-[70px] text-default-red h-[70px]' icon={faUser}/>
                    </div>
                    <div className="mt-3">
                        {error.length > 0 && <FormError text={error}/>}
                    </div>
                    <div className="flex  items-center mx-3">
                    {editMode ?
                    <div className="w-[200px] my-7 flex flex-col items-center">
                        <Input labelText={'Edit username'} inputId={'edit_username'} inputValue={localUsername} setInputValue={setLocalUsername}/>
                        <div className="my-2"></div>
                        <Input labelText={'Edit email'} inputId={'edit_email'} inputValue={localEmail} setInputValue={setLocalEmail}/>
                        {cancelButton ? 
                        <div onClick={() => setEditMode(false)} className="w-[120px] hover:bg-[#5656561f] mt-[1rem] transition-all cursor-pointer flex justify-center text-[0.9rem] items-center border-[1px] shadow-md  border-[#8686866e] stransition-all px-[1.2rem] py-[0.6rem] text-[#000000c9] rounded-[0.5rem]">
                            Cancel
                        </div>:
                        <div onClick={() =>{ editUserDetails()}} className="w-[120px]  hover:bg-[#5656561f] mt-[1rem] transition-all cursor-pointer flex justify-center text-[0.9rem] items-center border-[1px] shadow-md  border-[#8686866e] stransition-all px-[1.2rem] py-[0.6rem] text-[#000000c9] rounded-[0.5rem]">
                            Done
                        </div>
            }
                    </div>
                     :
                     <div className='flex mt-4 flex-col justify-start '>
                        <div className=" "><span className='font-semibold'>Username:</span> {username}</div>
                        <div className="my-1"></div>
                        <div className=" "><span className='font-semibold'>Email:</span> {email}</div>
                        <div className="w-full my-4 flex justify-center">
                            <div onClick={() => setEditMode(true)} className="w-[120px]  hover:bg-[#5656561f] transition-all cursor-pointer flex justify-center text-[0.9rem] items-center border-[1px] shadow-md  border-[#8686866e] stransition-all px-[1.2rem] py-[0.6rem] text-[#000000c9] rounded-[0.5rem]">
                                Edit details
                            </div>
                        </div>
                        </div>
                    }
                    </div>
            </div>
            
            <button onClick={logoutUserHandler} className="w-[120px]  bg-default-red text-white hover:bg-metal-red transition-all cursor-pointer flex justify-center text-[0.9rem] items-center border-[1px] shadow-md  border-[#8686866e] stransition-all px-[1.2rem] py-[0.6rem] text-[#000000c9] rounded-[0.5rem]">
                    Sign out
            </button>
        </div>
        <Footer/>
    </div>
  )
}

export default Userpage;
