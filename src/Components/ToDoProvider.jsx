import { createContext, useEffect, useReducer } from "react"
import { toDoReducer } from "./ToDoReducer";

export const ToDoContext = createContext();
const initialState = 
{   
    numberOfItems: 0,
    listItems: []
}


export const ToDoProvider = ({children}) => {
const [toDoList, dispatch] = useReducer(toDoReducer, initialState );

useEffect(()=>{
console.log(toDoList.listItems);
}, [toDoList]);

return (
        <ToDoContext.Provider value={{toDoList, dispatch}}>
            {children}
        </ToDoContext.Provider>
    )
} 