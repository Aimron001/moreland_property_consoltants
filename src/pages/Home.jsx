import AboutUs from "../components/AboutUs";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import LandInquiry from "../components/LandInquiry";
import Service from "../components/Service";
import Valuation from "../assets/valuation.jpg"
import Survey from "../assets/survey.jpg"
import Admin from "../assets/admin.jpg"
import Marketing from "../assets/marketing.jpg"
import Whatsapp from "../components/Whatsapp"
import YoutubeVideoContainer from "../components/YoutubeVideoContainer";
const services = [
    {
        id: 1,
        photo: Marketing,
        title: "Property Marketing",
        description: "We'll create a customized marketing plan for your property, using a variety of channels to attract potential buyers, including online listings, social media, and more."
    },
    {
        id:2,
        photo: Valuation,
        title: "Land Valuation",
        description: "We provide property valuation to determine the market value of your property, ensuring that you get the best possible price for your investment."
    },
    {
        id:3,
        photo: Survey,
        title: "Land Survey",
        description: "Survey services include surveying general boundaries, processing mutation forms, resolving boundary disputes, preparing rim amendment/deed plans, and selling maps and the national atlas."
    },
    {
        id:4,
        photo: Admin,
        title: "Land Adminstration",
        description: "Land administration services encompass the preparation and issuance of leases, facilitation of change of user processes, processing and issuance of consents, as well as providing advice to the public."
    }
]
export default function Home(){

    const serviceElements = services.map(service => {
        return (
            <Service key={service.id} photo={service.photo} title={service.title} description={service.description} />

        )
    })
    return (
        <div>
            <Hero />
            <YoutubeVideoContainer />
            <Featured />
            <h1>Our Services</h1>
          
            <div className="services">
                {...serviceElements}
            </div>
            <AboutUs />
            
        </div>
    )
}