import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import ProfileCard from './Components/ProfileCard'
import heroImg from "./assets/1746089864598.jpeg";
import CounterPlusThemeToggler from './Components/CounterPlusThemeToggler'
import UseEffectPractice from './Components/UseEffectPractice'
import UseRefPractice from './Components/UseRefPractice'
import { ThemeContext, ThemeProvider } from './Components/ThemeProvider'
import ToDoApp from './Components/ToDoApp'
import { ToDoProvider } from './Components/ToDoProvider'
import { Route, Routes } from 'react-router-dom'
function App() {
 const { toggleTheme} = useContext(ThemeContext);


  return (
    <>
   
      <div className='text-center text-white bg-blue-500'><button onClick={ toggleTheme} className='rounded-sm  m-2 p-2'>Toggle Theme</button></div>
{/* <ProfileCard imagePath={heroImg} name="Adnan Qureshi" role="Software Developer" description="Hey there!"/> 
<CounterPlusThemeToggler/>
<UseEffectPractice/>
<UseRefPractice/> */}
<ToDoProvider>
<Routes>
  <Route path='/' element = {<ToDoApp/>}/>
  <Route path='/useEffectHookPractice' element={<UseEffectPractice/>}/>
  <Route path='/useRefPractice' element={<UseRefPractice/>}/>
  <Route path='/counter' element={<CounterPlusThemeToggler/>}/>
</Routes>
</ToDoProvider>
    </>
  )
}

export default App
