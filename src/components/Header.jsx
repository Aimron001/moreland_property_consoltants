import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Header(){
    return (
        <header className="center">
            <div>
                <img src={logo} alt="company logo" id="logo"/>
            </div>
            <nav className="center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="listings">Listings</NavLink>
                <NavLink to="services">Services</NavLink>
                <NavLink to="blog">Blog</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact-us">Contact Us</NavLink>
            </nav>
        </header>
    )
}