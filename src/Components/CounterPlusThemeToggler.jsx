// This is a mini project to practice useState hook

import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

function CounterPlusThemeToggler() {
const [count, setCount] = useState(0);
const theme = useContext(ThemeContext);
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
<div className={`w-[100vw]  h-[100vh] ${theme === "Light"? "bg-white": "bg-black"}`}>
<div className="counterBlock  my-auto max-w-[300px] min-h-min bg-[#ebae00] rounded-lg p-4 flex flex-col gap-4">
<h3 className="displayCount text-black text-center text-3xl bg-white rounded-sm ">{count}</h3>
<div className="buttonBlock  w-full flex justify-around"><button className="px-12 outline-none" onClick={incrementCounter} >+</button><button className="px-12 outline-none hover:bg-yellow-200" onClick={decrementCounter} >-</button></div>
<button className="resetBtn" onClick={resetCounter}>Reset</button>

</div>
</div>


</>
)}

export default CounterPlusThemeToggler;