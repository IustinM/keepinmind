import axios from "axios";
import { createContext, useEffect } from "react";
import { regenerateTokenAsync } from "../components/Add/utils/functions";

export const AuthContext = createContext<any>([]);

const AuthProvider = ({children}:{children:any}) => {

    return <AuthContext.Provider value={[]}>
        {children}
    </AuthContext.Provider>

}

export default AuthProvider;