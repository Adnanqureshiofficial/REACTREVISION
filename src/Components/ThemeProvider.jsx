import { Children, createContext, useEffect, useState } from "react";

//Here we are creating the context for the provider, it's like we are telling react that this provider is giving data which is of this context,
// we associating the provider with a context, so that if any component needs a data from provider, it should know what is the name of this provider  
export const ThemeContext = createContext();

export const ThemeProvider =  ({children}) => {
    const [theme, setTheme] = useState("Light");

    const toggleTheme = () => {

        setTheme(prev => prev === "Light"?"Dark": "Light");
      
    }
   
    return (
        <>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
        </>
    )
}