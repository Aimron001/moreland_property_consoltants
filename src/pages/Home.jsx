import Featured from "../components/Featured";
import Hero from "../components/Hero";
import ServicesSlider from "../components/ServicesSlider";


export default function Home(){
    return (
        <div>
            <Hero />
            <Featured />
            <ServicesSlider />
        </div>
    )
}