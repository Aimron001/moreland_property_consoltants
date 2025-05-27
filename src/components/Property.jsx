
import plot from '../assets/plot.jpg'
import WhatsAppButton from './Whatsapp'
export default function Property(){
    return (
        <div className="property">
            <img src={plot} alt="" />
            <h4>PLOT 476</h4>
            <p>Located near 2km from Mombasa Highway Located near 2km from Mombasa Highway</p>
            <h4>Ksh. 1.5M</h4>
            <button className='enquire-btn' onClick={() => WhatsAppButton("I am interested in plot number 476")}>Enquire</button>
        </div>
    )
}