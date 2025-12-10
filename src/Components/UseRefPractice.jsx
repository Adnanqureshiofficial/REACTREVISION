import { useEffect, useRef } from "react";

function UseRefPractice() {
const section1 = useRef(null);
const section2 = useRef(null);
const section3 = useRef(null);
const scrollToSection = (e) => {
    console.log(e.target.value);
switch (e.target.value) {
case "Section 1":
    section1.current.scrollIntoView({behavior:"smooth"});
    break;
case "Section 2":
    section2.current.scrollIntoView({behavior:"smooth"});
    break;
case "Section 3":
    section3.current.scrollIntoView({behavior: "smooth"});
    break; 

}
}
    return (
        <>
<div className="w-full">
    <button onClick={scrollToSection} value="Section 1" className="p-2 m-2">Section 1</button>
    <button onClick={scrollToSection} value="Section 2" className="p-2 m-2">Section 2</button>
    <button onClick={scrollToSection} value="Section 3" className="p-2 m-2">Section 3</button>
    <div ref={section1} className="h-screen w-full bg-green-500">This is Section 1</div>
    <div ref={section2} className="h-screen bg-red-500">This is Section 2</div>
    <div ref={section3} className="h-screen bg-yellow-500">This is Section 3</div>
</div>

        </>
    )
}
export default UseRefPractice;


