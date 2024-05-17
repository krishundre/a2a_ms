import '../CSS/Navbar.css'
import logo from '../Assets/Logo_Png-02.png'
import { Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './Home';
// import Contact from './ContactUs';
import Vehicle from './Vehicle';
import Technology from './Technology';
// import Career from './Career';

function Navbar() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo" className='Navlogo' />
                </Link>
                <button className="navbar-toggler threelines" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto navbar-set">
                        <li className="nav-item ">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/Vehicle" className="nav-link">Vehicle</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/Technology" className="nav-link">Technology</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/Career" className="nav-link">Career</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/Contact" className="nav-link">Contact Us</Link>
                        </li>


                    </ul>
                </div>
            </nav>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Vehicle" element={<Vehicle />} />
                    {/* <Route path="/Contact" element={<Contact />} /> */}
                    <Route path="/Technology" element={<Technology />} />
                    {/* <Route path="/Career" element={<Career />} /> */}
                    {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navbar
