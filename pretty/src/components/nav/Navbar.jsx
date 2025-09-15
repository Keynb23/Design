import './Nav.css';
import { Search } from './Search/Search';

const Navbar = () => (
    <nav className="navbar">
        <div className="navbar-logo">LinkedIn</div>
        <Search />
        <ul className="navbar-links">
            <li>Home</li>
            <li>Jobs</li>
            <li>Network</li>
        </ul>
    </nav>
);

export default Navbar;