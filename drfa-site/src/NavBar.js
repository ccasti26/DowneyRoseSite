// A navbar component that will be consistent through out the application

import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/donate'>Donate</Link>
            <Link to='/decorate'>Decorate</Link>
            <a href='#'>Miss Downey</a>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/blog'>Blog</Link>
        </nav>

    );
}

export default NavBar;