import LandInquiry from '../components/LandInquiry'
import Listing from '../components/Listing'

export default function Listings(){
    return (
        <div>
            <div className="listings-hero">
                <LandInquiry />
                <h1>Our Listings</h1>
            </div>
            <div className='listings-container'>
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
            </div>
        </div>
    )
}