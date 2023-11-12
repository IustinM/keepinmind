
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { regenerateTokenAsync } from "../components/Add/utils/functions";
import { useLocation } from "react-router-dom";

export const UserContext = createContext<any>('');

interface bookValue {
    [value:string]:string
}

const UserProvider = ({children}:{children:any}) =>{
    
    // const location = useLocation();
    // console.log(location.pathname,':location')
    const [email,setEmail] = useState<string>('');
    const location = useLocation();
    const [userLogged,setUserLogged] = useState<boolean>(false);
    const [password,setPassword] = useState<string>('');
    const [emailRegister,setEmailRegister] = useState<string>('');
    const [passwordRegister,setPasswordRegister] = useState<string>('');
    const [username,setUsername] = useState<string>('');
    const [confirmPassword,setConfirmPassword] = useState<string>('');

    const getUserProfile = async (retry = true) => {
       
        if(location.pathname !== '/forgot-password' && location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/'){
            try {
                const result = await axios.post(`${process.env.REACT_APP_API_URL}/get-profile`, {}, {
                    withCredentials: true
                });
                console.log(result);
                setUsername(result.data.username);
                setUserLogged(true);
                setEmail(result.data.email);
            
            } catch (err:any) {
                regenerateTokenAsync(err,getUserProfile,retry)
            }
        }
    }
    useEffect(()=>{
        getUserProfile();
    },[])
    
    return(
        <UserContext.Provider value={{
            email,
            setEmail,
            password,
            userLogged,
            setUserLogged,
            setPassword,
            emailRegister,
            setEmailRegister,
            passwordRegister,
            setPasswordRegister,
            username,
            setUsername,
            confirmPassword,
            setConfirmPassword
        }}>
            {children}
        </UserContext.Provider>
        )
}

export default UserProvider;