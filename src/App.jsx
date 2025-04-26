import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Cau1 from './Components/Cau1';
import Cau2 from './Components/Cau2';
import Cau3 from './Components/Cau3';
import Cau4 from './Components/Cau4';
import Cau5 from './Components/Cau5';
import Cau6 from './Components/Cau6';
import Cau7 from './Components/Cau7';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2>Câu 1</h2>
        <Cau1 />
      </div>
      <hr />

      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <h2>Câu 2</h2>
        <Cau2 />
      </div>
      <hr />

      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <h2>Câu 5</h2>
        <Cau5 />
      </div>
      <hr />

      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <h2>Câu 6</h2>
        <Cau6 />
      </div>
      <hr />

      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <h2>Câu 7</h2>
        <Cau7 />
      </div>
      <hr />

      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <h2>Câu 3</h2>
        <Cau3 />
      </div>
      <hr />

      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <h2>Câu 4</h2>
        <Cau4 />
      </div>
    </div>
      
    </>
  )
}

export default App
