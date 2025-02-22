
export default function ServiceSlide(props){
    console.log(props)
    return (
        <div style={{backgroundImage:`url(${props.photo})`}} className="service-slide">
            <div className="desc" >
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}