
import { createContext, useState } from "react";
import { itemValue } from "../components/utils/types";


export const PageContext = createContext<any>('');

interface bookValue {
    [value:string]:string
}
interface newColumn{
    title:string,
    description:string,
    type:string
}
interface columnsInputs{}

const PageProvider = ({children}:{children:any}) =>{
    
    const [viewMenu,setViewMenu] = useState<boolean>(false);
    const [currentNavItem,setCurrentNavItem]= useState<string>('books');
    const [hideAddModal,setHideAddModal] = useState<boolean>(false);
    const [editColumnsMode,setEditColumnsMode] = useState<boolean>(false);
    const [newColumns,setNewColumns] = useState<newColumn[]>([]);
    const [newColumnsValues,setNewColumnsValues] = useState<any>({});
    const [currentEditElement,setCurrentEditElement] = useState<itemValue>({});
    const [editMode,setEditMode] = useState<boolean>(false);
    const [sorted,setSorted] = useState<boolean>(false);

    return(
        <PageContext.Provider value={{
            viewMenu,
            setViewMenu,
            currentNavItem,
            setCurrentNavItem,
            hideAddModal,
            setHideAddModal,
            newColumns,
            setNewColumns,
            editMode,
            currentEditElement,
            setCurrentEditElement,
            editColumnsMode,
            newColumnsValues,
            setNewColumnsValues,
            setEditColumnsMode,
            setEditMode,
            sorted,
            setSorted
        }}>
            {children}
        </PageContext.Provider>
        )
}

export default PageProvider;