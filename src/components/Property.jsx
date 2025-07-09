
import plot from '../assets/plot.jpg'
import WhatsAppButton from './Whatsapp'
export default function Property(props){
    return (
        <div className="property">
            <img src={props.photo} alt="A photo of the property" />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <h4>{props.price}</h4>
            <button className='enquire-btn' onClick={() => WhatsAppButton(`Hello Moreland Property Consultants, \nI am interested in the land ${props.description}`)}>Enquire</button>
        </div>
    )
}