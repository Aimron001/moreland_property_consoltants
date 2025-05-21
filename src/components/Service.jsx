export default function Service(props){
    return (
        <div className="service">
            <img src={props.photo} alt="Service Icon" />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}