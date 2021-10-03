
const HeroText = (props) => {
    return (
        <h1 className={`section-hero-text text-xl text-vbold ${props.textColorClass}`} style={{}}><span className={`word ${props.underlineContainerClass} ${props.spanColorClass}`}>{props.spanText}&nbsp;</span>{props.text}</h1> 
    )
}

export default HeroText