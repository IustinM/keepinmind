
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { regenerateTokenAsync } from "../components/Add/utils/functions";
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext<any>('');

interface bookValue {
    [value:string]:string
}

const UserProvider = ({children}:{children:any}) =>{
    
    // const location = useLocation();
    const navigate = useNavigate();
    // console.log(location.pathname,':location')
    const [email,setEmail] = useState<string>('');
    const location = useLocation();
    const admin = localStorage.getItem('admin');
    const [userLogged,setUserLogged] = useState<boolean>(false);
    const [isAdmin,setIsAdmin] = useState(JSON.parse(localStorage.getItem('admin')!) === 'true' ? true : false);
    const [password,setPassword] = useState<string>('');
    const [emailRegister,setEmailRegister] = useState<string>('');
    const [passwordRegister,setPasswordRegister] = useState<string>('');
    const [username,setUsername] = useState<string>('');
    const [confirmPassword,setConfirmPassword] = useState<string>('');

    const getUserProfile = async (retry = true) => {
        if(!isAdmin){
            if( location.pathname !== '/forgot-password' && location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/'){
                try {
                    const result = await axios.post(`${process.env.REACT_APP_API_URL}/get-profile`, {}, {
                        withCredentials: true
                    });
                    setUsername(result.data.username);
                    setUserLogged(true);
                    setEmail(result.data.email);
                    
                } catch (err:any) {
                    regenerateTokenAsync(err,getUserProfile,retry,navigate)
                }
            }
        }else{
         
            setUsername('admin');
            setUserLogged(true);
            setEmail('admin');
        }
    }
    useEffect(()=>{
            getUserProfile();
        
    },[])
    useEffect(()=>{
       console.log('here')
            if(admin === "true"){
                console.log('here222')
                setIsAdmin(true)
            }
        
    },[isAdmin])
    console.log(isAdmin)
    
    return(
        <UserContext.Provider value={{
            email,
            setEmail,
            password,
            userLogged,
            setUserLogged,
            setPassword,
            emailRegister,
            isAdmin,
            setIsAdmin,
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