import React from "react";
class App extends React.Component {
  render() {
    const theme = "dark"
    const img = "/react.svg"
    const buttonText = "Don't click me"
    return (
      <>
        <Navbar theme2 ={theme} name = "Alex" img2 = {img} buttonText2 = {buttonText}/>
        
        <Heroes />
      </>
      // or <> to avoid unnecessary divs , called React Fragments
      
      
      
    )
  }

}
export default App
// React.Component is a base class provided by React library. It provides the basic structure and functionality for creating React components. By extending React.Component, we can create our own custom components that can manage their own state and lifecycle methods
// Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class (called a child or subclass) to inherit properties and behaviors from an existing class (called a parent or superclass). Inheritance promotes code reusability and establishes a natural hierarchical relationship between classes. The child class can override or extend the functionality of the parent class, allowing for more specific behavior while still retaining the core features of the parent class. This helps in creating a more organized and modular code structure.