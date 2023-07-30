
import { createContext, useState } from "react";
import { itemValue } from "../components/utils/types";


export const PageContext = createContext<any>('');

interface bookValue {
    [value:string]:string
}

const PageProvider = ({children}:{children:any}) =>{
    
    const [viewMenu,setViewMenu] = useState<boolean>(false);
    const [currentNavItem,setCurrentNavItem]= useState<string>('books');
    const [hideAddModal,setHideAddModal] = useState<boolean>(false);
    const [currentEditElement,setCurrentEditElement] = useState<itemValue>({});
    const [editMode,setEditMode] = useState<boolean>(false);

    return(
        <PageContext.Provider value={{
            viewMenu,
            setViewMenu,
            currentNavItem,
            setCurrentNavItem,
            hideAddModal,
            setHideAddModal,
            editMode,
            currentEditElement,
            setCurrentEditElement,
            setEditMode
        }}>
            {children}
        </PageContext.Provider>
        )
}

export default PageProvider;