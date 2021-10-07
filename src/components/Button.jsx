import { Link } from "react-router-dom"

const RegisterButton = (props) => {
    return (
        <Link to='/dashboard/register'>
            <h3 className={`text-small text-vbold button-small button-register ${props.buttonColor}`}>
                {props.text}
            </h3>
        </Link>
    )
}

const BlackButton = (props) => {
    return (
        <button className="button-black">
            <h3 className="text-white text-regular text-small">{props.text}</h3>
            <span>
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.901587 5.44713C0.962963 5.43717 1.02508 5.43258 1.08722 5.43338H11.6694L11.4387 5.32606C11.2131 5.21931 11.0079 5.07402 10.8323 4.89676L7.86478 1.92925C7.47395 1.55616 7.40828 0.955986 7.70916 0.507203C8.05934 0.0289727 8.73088 -0.0748633 9.20915 0.275315C9.24778 0.303622 9.28451 0.334478 9.31902 0.367681L14.6852 5.73389C15.1046 6.15279 15.105 6.83232 14.6861 7.25169C14.6858 7.25196 14.6855 7.25226 14.6852 7.25253L9.31902 12.6187C8.89932 13.0373 8.21979 13.0363 7.80122 12.6166C7.76829 12.5836 7.73753 12.5484 7.70916 12.5114C7.40828 12.0626 7.47395 11.4625 7.86478 11.0894L10.8269 8.11649C10.9844 7.95886 11.1654 7.82668 11.3635 7.72476L11.6855 7.57987H1.14629C0.598027 7.60023 0.117013 7.21725 0.0140152 6.67834C-0.0808659 6.09326 0.316503 5.54205 0.901587 5.44713Z" fill="white"/>
                </svg>
            </span>
        </button>
    )
}

const JoinUsButton = (props) => {
    return (
        <a href="mailto:cardtonic@cardtonic.com" >
            <h3 className={`text-small text-vbold button-small button-register ${props.buttonColor}`}>
                {props.text}
            </h3>
        </a>
    )
}

export {RegisterButton, BlackButton, JoinUsButton}