import { Link } from "react-router-dom"

const RegisterButton = (props) => {
    return (
        <Link to='/dashboard/register'>
            <h3 className={`text-small text-vbold button-register ${props.buttonColor}`}>
                {props.text}
            </h3>
        </Link>
    )
}

export {RegisterButton}