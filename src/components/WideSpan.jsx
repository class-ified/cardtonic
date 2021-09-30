const WideSpan = (props) => {
    return (
        <span className={props.class} style={{display: 'block', height: "1px", width: "100%", backgroundColor: props.color}}></span>
    )
}

export default WideSpan;