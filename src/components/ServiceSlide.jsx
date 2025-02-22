import photo from '../assets/celebrating.png'
export default function ServiceSlide(){
    return (
        <div className="service-slide">
            <img src={photo} alt="" />
            <div className="desc">
                <h4>Land Valuation</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aperiam dolor voluptates in ipsam. Molestias, error? </p>
                <a href="#">Demo</a>
            </div>
        </div>
    )
}