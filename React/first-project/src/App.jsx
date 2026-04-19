import Navbar from "./Components/Navbar"
import Heroes from "./Components/Heroes"
function App() {

  const theme = "dark"
  const img = "/image1.png"
  const buttonText = "Don't click me"
  return (
    <>
      <Navbar theme2 ={theme} name = "Alex" img2 = {img} buttonText2 = {buttonText}/>
      
      <Heroes />
    </>
    // or <> to avoid unnecessary divs , called React Fragments

    
    
  )
}

export default App
