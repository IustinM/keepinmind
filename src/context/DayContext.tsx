import { createContext, useState } from "react";

export const DayContext = createContext<any>('');

interface itemValue {
    [value:string]:string
}

const DayProvider = ({children}:any) =>{

    const [daysValues,setDaysValues] = useState<itemValue[]>([]);
    const [feelingsValue,setFeelingsValue] = useState<itemValue[]>([]);

    return (
        <DayContext.Provider value={{daysValues,setDaysValues,feelingsValue,setFeelingsValue}}>
            {children}
        </DayContext.Provider>
    )
}

export default DayProvider;