import { createContext, useState } from "react";
import { inputValueTypes, itemValue } from "../components/utils/types";


export const BookContext = createContext<any>('');


 const BookProvider = ({children}:{children:any}) =>{

    const [booksValue,setBooksValue] = useState<itemValue[]>([]);
    const [feelingsValue,setFeelingsValue] = useState<itemValue[]>([]);
    

    return(
        <BookContext.Provider value={{
        booksValue,
        setBooksValue,
        feelingsValue,
        setFeelingsValue
        }}>
            {children}
        </BookContext.Provider>
        )
}

export default BookProvider;