import logo from "../../images/logo.svg";

const Logo = ({className}) => {
    return <img className={`${className} object-fit _c-pointer`} src={logo} alt="logo"/>
}

export default Logo;