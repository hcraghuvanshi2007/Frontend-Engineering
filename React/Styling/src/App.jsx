import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";
import style from 'styled-components';

const Button = style.button`
  background-color: magenta;
  color: navy;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: zoom-in;
`;
const Div = style.div`
  background-color: lightblue;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: navy;
`;

const Caption = style.p`
  font-size: 18px;
  color: gray;
  text-align: center;
`;

function App() {
  return (
    <>
    <h1>Welcome to my website!</h1>
    <span>This is a simple React app.</span>
    <style>        {`
        h1 {
          color: blue;
        }
        span {
          font-size: 16px;
          color: gray;
        }
      `}
    </style>
    <h3 style ={{backgroundColor:"magenta",color:"navy"}}>Heyy how are you?</h3>
    <Child1/>
    <Child2/>
    <Button>Click Me</Button>
    <Div>
      <>
      <h2>This is a styled div using styled-components.</h2>
      <p>It has a light blue background and some padding.</p>
      </>
    </Div>
    <Caption>This is a caption styled with styled-components.</Caption>

    </>
  )
}
export default App;