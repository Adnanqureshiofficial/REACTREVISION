import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import ProfileCard from './Components/ProfileCard'
import heroImg from "./assets/1746089864598.jpeg";
import CounterPlusThemeToggler from './Components/CounterPlusThemeToggler'
import UseEffectPractice from './Components/UseEffectPractice'
import UseRefPractice from './Components/UseRefPractice'
function App() {


  return (
    <>
{/* <ProfileCard imagePath={heroImg} name="Adnan Qureshi" role="Software Developer" description="Hey there!"/> */}
{/* <CounterPlusThemeToggler/> */}
{/* <UseEffectPractice/> */}
<UseRefPractice/>
    </>
  )
}

export default App
