/* eslint-disable jsx-a11y/alt-text */
const IconCard = ({src, textOne, textTwo}) => {
    return (
        <div className="box">
            <img src={src} />
            <h3 className="text-blue text-vbold text-small">{textOne} <br/> {textTwo}</h3>
        </div>
    )
}

export default IconCard