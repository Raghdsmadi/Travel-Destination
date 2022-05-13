import { Link } from "react-router-dom";
import './Header.css'
function Header (prop)
{
return (

    <>
    <h1 className='header'> Travel Destination</h1>
    <nav>
            <Link id='headNav' to="/">Home</Link>
        </nav>
    </>
)
}
export default Header;