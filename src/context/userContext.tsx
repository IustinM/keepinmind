
import { createContext, useState } from "react";


export const UserContext = createContext<any>('');

interface bookValue {
    [value:string]:string
}

const UserProvider = ({children}:{children:any}) =>{
    
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [emailRegister,setEmailRegister] = useState<string>('');
    const [passwordRegister,setPasswordRegister] = useState<string>('');
    const [username,setUsername] = useState<string>('');
    const [confirmPassword,setConfirmPassword] = useState<string>('');

    return(
        <UserContext.Provider value={{
            email,
            setEmail,
            password,
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