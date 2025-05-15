import LandInquiry from "./LandInquiry";

export default function Hero(){
    return(
        <div className="hero">
            <div className="overlay"></div>
            <div className="left">
                    <div>
                        <h4>Connecting Land Buyers & Sellers </h4>
                        <h4>with</h4>
                        <h4>Trusted Expertise</h4>
                    </div>
                    <h5>Land Sales · Surveys · Valuations · Administration.</h5>
            </div>
            <LandInquiry />
        </div>
    )
}