import { useState } from "react";
import Child from "./Components/Child";
function App() {
  const [count, setCount] = useState(0);
  const age = 25;
  const name = "John Doe";
  console.log(count);
  const increment = () => {
    setCount(count + 1);
  }

  return (
    <>
    <Child count={count} age={age} name={name}/>
    <Compo1 count2={count} name={name}/>
    
    <button onClick={increment}>Add +</button>
    </>
  )
}

export default App;