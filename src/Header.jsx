import "./App.css"
import { NavLink,Link } from "react-router-dom";

function Header(){
    return(
        <>
        <header className="headerConatiner">
            <div className="logo">
                <> <Link to="/">Shoffy</Link> </>
            </div>

            <div className="rightHeader">
               <ul>
                <li> <NavLink to="/cart">Cart</NavLink> </li>

               </ul> 

            </div>
        </header>
           
        </>

    )
}

export default Header;