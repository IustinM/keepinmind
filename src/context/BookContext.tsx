import { createContext, useState } from "react";
import { inputValueTypes } from "../components/utils/types";


export const BookContext = createContext<any>('');

interface bookValue {
    [value:string]:string
}

 const BookProvider = ({children}:{children:any}) =>{

    const [booksValue,setBooksValue] = useState<bookValue[]>([]);
    const [feelingsValue,setFeelingsValue] = useState<bookValue[]>([]);
    const [hideBookModal,setHideBookModal] = useState<boolean>(false);
    

    return(
        <BookContext.Provider value={{
        booksValue,
        setBooksValue,
        hideBookModal,
        setHideBookModal,
        feelingsValue,
        setFeelingsValue
        }}>
            {children}
        </BookContext.Provider>
        )
}

export default BookProvider;