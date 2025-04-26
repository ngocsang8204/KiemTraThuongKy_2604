import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Cau1 from './Components/Cau1';
import Cau2 from './Components/Cau2';
import Cau3 from './Components/Cau3';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Cau1 />
      <Cau2 />
      <Cau3 />

    </>
  )
}

export default App
