class Navbar extends React.Component {

    render() {
        return (
            <nav>
                <img src="/react.svg" alt="Airbnb Logo" className="nav--logo" />
                <h2 className="nav--title">Airbnb Experiences</h2>
                <p>{this.props.theme2}</p>
                <p>{this.props.name}</p>
                <img src={this.props.img2} alt="Profile" className="nav--profile" />
                <button>{this.props.buttonText2}</button>
            </nav>
        )
    }       
}
export default Navbar