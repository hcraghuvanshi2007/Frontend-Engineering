import React, { useContext } from "react";
import { MyContext } from "../Context";

function Child() {
  const data = useContext(MyContext);

  return <h3>{data}</h3>;
}

export default Child;