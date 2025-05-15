
import plot from '../assets/plot.jpg'
export default function Property(){
    return (
        <div className="property">
            <img src={plot} alt="" />
            <h4>PLOT 476</h4>
            <p>Located near 2km from Mombasa Highway Located near 2km from Mombasa Highway</p>
            <h4>Ksh. 1.5M</h4>
            <button className='enquire-btn'>Enquire</button>
        </div>
    )
}