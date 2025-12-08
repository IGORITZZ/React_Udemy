//1- criar contexto
import { createContext, useState } from "react";

export const CounterContext = createContext();

//2- criar provider
export const CounterContexProvider =({children}) => {
    const [counter, setConter] = useState(5)
    return(
        <CounterContext.Provider value={{counter, setConter}}>
            {children}
        </CounterContext.Provider>
    )
}