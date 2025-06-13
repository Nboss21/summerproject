import { useState } from 'react'
import { useStatev } from 'react'
import './App.css'
import Home from './Components/Home';
import { Route, Router, Routes } from 'react-router-dom';
import Details from './Components/Detail';
const Card =({title})=>{
  const [hasliked,setHasLicked]=useState(false);
  useEffect(()=>{
    console.log("Yeah buddy")
  } ,[hasliked])
  return(
  <div>
    <h1>{title}</h1>
  </div>

  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/Details" element={<Details/>}></Route>
        <Route path="/" element={  <Home />}></Route>
      </Routes>

      
    </>
  );
}

export default App