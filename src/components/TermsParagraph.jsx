const Paragraph = ({heading, text}) => {
    return (
        <div className="paragraph">
            <h3 className="text-blue text-vbold text-small">{heading}</h3>
            <h3 className="text-blue text-regular text-small">
                {text}
            </h3>
        </div>
    )
}

export default Paragraph