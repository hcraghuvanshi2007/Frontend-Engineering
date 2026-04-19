import {useState } from "react";
import { useEffect } from "react";

function App() {
  // const [name, setName] = useState("John");
  // const changeName = () => {
  //   setName("Jane");
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  // Count = state variable , setCount = function to update the state variable , useState = react hook 

  useEffect(() => {
    console.log("Count has been updated:", count);
  }, []); // Empty Arry - use effect will run only once when the component mounts , [count] - use effect will run every time count changes

  return (
    <>
    {/* <h1 className="text-3xl font-bold underline text-blue-500">Hello {name}</h1>
    <button onClick={changeName} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Change Name
    </button> */}
    <h1>Count: {count}</h1>
    <button onClick={increment} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Increment
    </button>   
    </>
  )
}
export default App;