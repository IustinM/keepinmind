import { createContext, useState } from "react";

export const MovieContext = createContext<any>('');

interface itemValue {
    [value:string]:string
}

const MovieProvider = ({children}:any) =>{

    const [moviesValues,setMoviesValues] = useState<itemValue[]>([]);
    const [feelingsValue,setFeelingsValue] = useState<itemValue[]>([]);

    return (
        <MovieContext.Provider value={{moviesValues,setMoviesValues,feelingsValue,setFeelingsValue}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider;