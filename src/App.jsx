import { useState } from 'react'
import { useStatev } from 'react'
import './App.css'
import Home from './Components/Home';
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
      {" "}
      <Router>
        <Routes>
          <Route>
            <main>
              <Home />
            </main>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App