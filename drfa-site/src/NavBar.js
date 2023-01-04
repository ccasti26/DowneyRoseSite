// A navbar component that will be consistent through out the application

import { Link } from 'react-router-dom';



const NavBar = () => {

    return (
        <nav>
            <img src='_images/DRFA-Logo.webp' alt='' className='mobile-menu-logo' />
            <a href="javascript:void(0);" className='mobile-nav-opener' onClick="mobileNavToggle()">Menu</a>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='history'>History</Link>
            <Link to='/donate'>Donate</Link>
            <Link to='/decorate'>Decorate</Link>
            <a href='https://missdowney.com/' target='_blank'>Miss Downey</a>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/blog'>Blog</Link>
        </nav>
    );
}

function mobileNavToggle() {
    let navdiv = document.getElementById('navLinks');
    if (navdiv.style.display === "block"){
        navdiv.style.display = "none";
    } else {
        navdiv.style.display = "block";
    }
}

export default NavBar;