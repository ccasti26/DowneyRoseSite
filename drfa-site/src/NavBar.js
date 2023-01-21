// A navbar component that will be consistent through out the application

import { Link } from 'react-router-dom';

const NavBar = () => {

    // function navToggle() {
    //     var x = document.getElementById("navLinks");
    //     if (x.style.display === "block"){
    //         x.style.display = "none";
    //     } else {
    //         x.style.display = "block";
    //     }
    // }

    return (
        <nav>
            <Link to='/' className='nav-logo'><img src='../_images/DRFA-Logo.webp' alt='' className='mobile-menu-logo' /></Link>
            <a href='#about' className='mobile-nav-opener'>Menu</a>
            <div id='navLinks'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/history'>History</Link>
            <Link to='/donate'>Donate</Link>
            <Link to='/decorate'>Decorate</Link>
            <a href='https://missdowney.com/' target='_blank' rel="noreferrer">Miss Downey</a>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/blog'>Blog</Link>
            </div>
            {/* <a href="javascript:void(0);" className='icon' onClick={navToggle()}>
                <i class="fa fa-bars"></i>
            </a> */}
        </nav>
    );
}

export default NavBar;