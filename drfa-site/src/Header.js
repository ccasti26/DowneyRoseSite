import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
    return (
        
        <header>
            <div className="name-and-logo">
                <Link to="/"><img src="../_images/DRFA-Logo.webp" alt='' className="large-screen-logo"/></Link>
                <h1>Downey Rose Float Association</h1>
            </div>
            <NavBar />
        </header>
    );
}

export default Header;