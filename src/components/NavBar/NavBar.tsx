import "./NavBar.modules.scss";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        
        <nav className="headNavigation">
            <span> Hello </span>
            <span> Hello1 </span>
            <span>
                <Link to="/sec" className="link">
                    Second
                </Link>
            </span>
        </nav>
    );
}

export default NavBar;
