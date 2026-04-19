
function Navbar(props) {

    return (
        <nav>
            <img src="/image1.png" alt="Airbnb Logo" className="nav--logo" />
            <h2 className="nav--title">Airbnb Experiences</h2>
            <p>{props.theme2}</p>
            <p>{props.name}</p>
            <img src={props.img2} alt="Profile" className="nav--profile" />
            <button>{props.buttonText2}</button>
            
        </nav>
    )
}
export default Navbar
