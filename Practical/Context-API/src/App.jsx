import React from "react";
import { MyContext } from "./Context";
import Child from "./Components/Child";

function App() {
  const data = "Hello from Context!";

  return (
    <MyContext.Provider value={data}>
      <Child />
    </MyContext.Provider>
  );
}

export default App;