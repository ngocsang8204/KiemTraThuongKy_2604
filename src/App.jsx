import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Cau1 from './Components/Cau1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Cau1 />
    </>
  )
}

export default App
