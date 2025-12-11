import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";


export default function UseEffectPractice() {
   const theme = useContext(ThemeContext);
    // state variable created
    const [count, setCount] = useState(0);
    //Increment Function
const incrementCount = ()=> {
    setCount(prev => prev+1);
}
//decrement Function
const decrementCount = ()=> {
    setCount(prev => prev-1);
}

useEffect(()=>{
document.title = `Count: ${count}`;

}, [count]);
    return (
        <>
        <div className={`text-center ${theme === "Light"? "bg-white": "bg-black"}`}>
            <h2 className="text-center p-3">{count}</h2>
            <button onClick={incrementCount} className="m-4 bg-white p-2">Increment</button>
            <button onClick={decrementCount} className="m-4 bg-white p-2">Decrement</button>
        </div>
        </>
    )
}
//Executed only when component load on page with empty array
// export default function UseEffectPractice() {
//     useEffect(()=>{
//         console.log("Component Mounted");
//     }, []);
//     return (
//         <>
//         <h1>Hello World!</h1>
//         </>
//     )
// }


