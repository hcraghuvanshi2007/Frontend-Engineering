// function App() {
//   const isLoggedIn = false; 
//   if (isLoggedIn==true) {
//     return (
//       <>
//       <h1>Welcome back!</h1>
//       <span>Here is your dashboard.</span>
//       <style>        {`
//           h1 {
//             color: green;
//           }
//           span {
//             font-size: 18px;
//             color: gray;
//           }
//         `}
//       </style>
//       </>
//     )
//   } else {
//     return (
//       <>
//       <h1>Please log in.</h1>
//       <span>You need to log in to access the dashboard.</span>
//       <style>        {`
//           h1 {
//             color: red;
//           }
//           span {
//             font-size: 18px;
//             color: gray;
//           }
//         `}
//       </style>
//       </>
//     )
//   }
// }

// export default App;

// We can do this using ternary operator
function App() {
  const isLoggedIn = false; 
  return (
    <>
    {isLoggedIn ? (
      <>
      <h1>Welcome back!</h1>
      <span>Here is your dashboard.</span>
      <style>        {`
          h1 {
            color: green;
          }
          span {
            font-size: 18px;
            color: gray;
          }
        `}
      </style>
      </>
    ) : (
      <>
      <h1>Please log in.</h1>
      <span>You need to log in to access the dashboard.</span>
      <style>        {`
          h1 {
            color: red;
          }
          span {
            font-size: 18px;
            color: gray;
          }
        `}
      </style>
      </>
    )}
    </>
  )
}

export default App;