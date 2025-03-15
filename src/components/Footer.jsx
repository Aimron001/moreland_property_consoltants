import mpcOffice from '../assets/mpc.jpg'
import logo from '../assets/logo.png'
export default function Footer(){
    return (
        <footer>        
            <div className="company">
                <h4>Moreland Property Consultants</h4>
                <p>Unlocking your dream property in style!</p>
                {/* <img src={logo} alt="" style={{backgroundColor: "white"}}/> */}
            </div>
            <div className="contacts">
                <h4>For more information</h4>
                <p>Call: +254720321100</p>
                <p>Email: info@morelandpropertyconsultants.com</p>
            </div>
            <div className="location">
                <h4>Location</h4>
                <p>Our office is located at Malili Town</p>
                <img src={mpcOffice} alt="" />
            </div>
        </footer>
    )
}