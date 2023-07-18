
import { createContext, useState } from "react";


export const PageContext = createContext<any>('');

interface bookValue {
    [value:string]:string
}

const PageProvider = ({children}:{children:any}) =>{
    
    const [viewMenu,setViewMenu] = useState<boolean>(false);

    return(
        <PageContext.Provider value={{
            viewMenu,
            setViewMenu
        }}>
            {children}
        </PageContext.Provider>
        )
}

export default PageProvider;