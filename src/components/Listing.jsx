import hero from '../assets/hero.jpg'

export default function Listing(){
    return (
        <div className="listing">
            <img src={hero} alt="" />
            <div className='property-description'>
                <h3>3 ACRE PRIME LAND</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quibusdam saepe iusto voluptate necessitatibus qui.</p>
                <h4>1.5 M</h4>
                <button>Enquire</button>
            </div>
            
        </div>
    )
}