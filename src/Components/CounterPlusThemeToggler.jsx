// This is a mini project to practice useState hook

import { useState } from "react";

function CounterPlusThemeToggler() {
const [count, setCount] = useState(0);
const [theme, toggleTheme]  = useState(false)
const incrementCounter = () => {
    setCount(prev => prev+1)
}
const decrementCounter = () => {
    setCount(prev => prev-1)
}
const resetCounter = () => {
    setCount(0)
}
return(
<>
<div className={`w-[100vw] h-[100vh]  ${theme?"bg-black":"bg-white"}`}>
<div className="counterBlock  max-w-[300px] min-h-min bg-[#ebae00] rounded-lg p-4 flex flex-col gap-4">
<h3 className="displayCount text-black text-center text-3xl bg-white rounded-sm ">{count}</h3>
<div className="buttonBlock  w-full flex justify-around"><button className="px-12 " onClick={incrementCounter} >+</button><button className="px-12" onClick={decrementCounter} >-</button></div>
<button className="resetBtn" onClick={resetCounter}>Reset</button>
<button className="" onClick={()=>toggleTheme(!theme)}>Toggle to {theme?"Light":"Night"} Mode</button>
</div>
</div>


</>
)}

export default CounterPlusThemeToggler;