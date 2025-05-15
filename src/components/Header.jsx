import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Header(){
    return (
        <header className="center-div">
            <div className="center-div logo" style={{gap:"20px"}}>
                <img src={logo} alt="company logo" id="logo"/>
                <h3><span>Moreland</span> Property Consultants</h3>
            </div>
            <nav className="center-div">
                <NavLink to="/">Home</NavLink>
                {/* <NavLink to="listings">Listings</NavLink>
                <NavLink to="services">Services</NavLink>
                <NavLink to="blog">Blog</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact-us">Contact Us</NavLink> */}
            </nav>
        </header>
    )
}