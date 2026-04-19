// function child(props) {
//     return (
//         <>
//             <h1>Count: {props.count}</h1>
//         </>
//     )
// }
// export default child;

// We can do this without using props

function child({count,age,name}) {
    return (
        <>  
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            
            <h1>Count: {count}</h1>

            {/* SEEE   */}
            <Compo1 count2={count} name={name}/>
        </>
    )
}
export default child;

