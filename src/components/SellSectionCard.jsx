const Card = (props) => {
    return (
        <div className={`card ${props.class}`}>
            <img src={props.iconSrc} alt="icon" />
            
            <h3 className="card-heading text-white text-xs text-vbold">{props.heading}</h3>

            <h3 className="card-text text-white text-tiny text-regular">{props.text}</h3>

        </div>
    )
}

export default Card