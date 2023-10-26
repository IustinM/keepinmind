import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/utils/Footer'
import Input from '../../components/utils/Input'
import { UserContext } from '../../context/userContext'

const Userpage = () => {
    const navigate = useNavigate();
    const [editMode,setEditMode] = useState<boolean>(false);
    const {username,setUsername} = useContext(UserContext);
    const [cancelButton,setCancelButton] = useState<boolean>(true);
    const [localUsername,setLocalUsername] = useState<string>('')
    
    const editUsernameHandler = () =>{
        setUsername(localUsername);
        setLocalUsername('');
        setEditMode(false);
    }
    const getUserProfile = async (retry = true) => {

        console.log(retry)
        try {
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/get-profile`, {}, {
                withCredentials: true
            });
        } catch (err:any) {
            
            if (err.response && err.response.status === 400 && err.response.data === "Token has expired" && retry) {
                
                try {
                    const tokenResult = await axios.post(`${process.env.REACT_APP_API_URL}/regenerate-token`, {}, {
                        withCredentials: true
                    });
                    getUserProfile(false);
                    
                } catch (tokenError) {
                    console.log( tokenError);
                }
            } else {
                console.log(err);
            }
        }
    }

    const logoutUserHandler = async () =>{
        try{
            axios.get(`${process.env.REACT_APP_API_URL}/logout`,{
                withCredentials:true
            }).then(result =>{
                if(result.status !== 200){
                    console.error('Something went wrong');
                    return;
                }
                navigate('/login')
            })
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        if(localUsername.length <= 0 || localUsername === username){
            setCancelButton(true);
        }else{
            setCancelButton(false);
        }
    },[localUsername,username]);

    useEffect(()=>{
     
        getUserProfile()
    },[])

  return (
    <div className='flex flex-col justify-between min-h-[100vh] '>
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
                    <div className="flex  items-center mx-3">
                    {editMode ?
                    <div className="w-[200px] my-7 flex flex-col items-center">
                        <Input labelText={'Edit username'} inputId={'edit_username'} inputValue={localUsername} setInputValue={setLocalUsername}/>
                        {cancelButton ?
                        <div onClick={() => setEditMode(false)} className="w-[120px] mt-7 hover:bg-[#5656561f] transition-all cursor-pointer flex justify-center text-[0.9rem] items-center border-[1px] shadow-md  border-[#8686866e] stransition-all px-[1.2rem] py-[0.6rem] text-[#000000c9] rounded-[0.5rem]">
                            Cancel
                        </div>
                        :
                        <div onClick={editUsernameHandler} className="w-[120px] mt-7 hover:bg-[#5656561f] transition-all cursor-pointer flex justify-center text-[0.9rem] items-center border-[1px] shadow-md  border-[#8686866e] stransition-all px-[1.2rem] py-[0.6rem] text-[#000000c9] rounded-[0.5rem]">
                            Done
                        </div>
                        }
                    </div>
                     :
                     <div className="text-[1.6rem] mt-7 mb-5">{username}</div>
                    }
                    </div>
            </div>
            <div onClick={() => setEditMode(true)} className="w-[120px] hover:bg-[#5656561f] transition-all cursor-pointer flex justify-center text-[0.9rem] items-center border-[1px] shadow-md  border-[#8686866e] stransition-all px-[1.2rem] py-[0.6rem] text-[#000000c9] rounded-[0.5rem]">
                    Edit user
            </div>
            <button onClick={logoutUserHandler} className="w-[120px] mt-7 bg-default-red text-white hover:bg-metal-red transition-all cursor-pointer flex justify-center text-[0.9rem] items-center border-[1px] shadow-md  border-[#8686866e] stransition-all px-[1.2rem] py-[0.6rem] text-[#000000c9] rounded-[0.5rem]">
                    Sign out
            </button>
        </div>
        <Footer/>
    </div>
  )
}

export default Userpage