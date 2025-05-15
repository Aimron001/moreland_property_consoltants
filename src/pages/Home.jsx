import AboutUs from "../components/AboutUs";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import LandInquiry from "../components/LandInquiry";

export default function Home(){
    return (
        <div>
            <Hero />
            <div className="land-inquiry-mobile">
                <LandInquiry />
            </div>
            <Featured />
            <AboutUs />
        </div>
    )
}