import { useEffect, useState } from "react";


export default function UseEffectPractice() {
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
        <div>
            <h2 className="text-center p-3">{count}</h2>
            <button onClick={incrementCount} className="m-4">Increment</button>
            <button onClick={decrementCount}>Decrement</button>
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


