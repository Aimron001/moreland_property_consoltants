import mpc from '../assets/mpc.jpg'
export default function AboutUs(){
    return (
        <div className="about-us">
            <div className="about-left">
                <h2>About Us</h2>
                <p>Moreland Property Consultants stands as a beacon of excellence in the realm of property management and consultancy services at the heart of Konza City in Malili with the target audience being the entire country. Our unwavering dedication to delivering unparalleled solutions and achieving exceptional outcomes is evident in every aspect of our operations.</p>
                <h3>Our Location</h3>
                <p>Our office is located at Malili - Konza Technopolies</p>
            </div>
            <div className="about-right">
                <img src={mpc} alt="moreland photo" />
                <p>We don't just meet expectations— We exceed them.</p>
            </div>
        </div>
    )
}