
import { createContext } from "react";


export const AuthContext = createContext<any>([]);

const AuthProvider = ({children}:{children:any}) => {

    return <AuthContext.Provider value={[]}>
        {children}
    </AuthContext.Provider>

}

export default AuthProvider;