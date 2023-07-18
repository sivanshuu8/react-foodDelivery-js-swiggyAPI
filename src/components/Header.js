import { logoURL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    
    const onlineStatus = useOnlineStatus();
    return(
        <div className='header'>
            <div className='logo-container'>
            <img className='logo-img' src={logoURL} />
        </div>
        <div className='nav-items'>
            <ul>
                <li>
                    <Link to='/' className="header-routes">Home</Link>
                    </li>
                <li>
                    <Link to='/about' className="header-routes">About Us</Link>
                    </li>
                <li>
                    <Link to='/contacts' className="header-routes">Contact</Link>
                    </li>
                    <li>{onlineStatus ? "🟢" : "🔴"}</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
       
    )
}

export default Header;