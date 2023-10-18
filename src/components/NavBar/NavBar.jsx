import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <div className="container max-w-screen-xl mx-auto p-4 sm:py-6 flex items-center justify-between">
        <a href="/" rel="noopener noreferrer">
          <img src={Logo} alt="" className="w-16 sm:w-24" />
        </a>
        <nav>
          <ul className="p-0 text-[var(--CL-primary-gray)] flex items-center gap-5">
            <li className="uppercase text-xs ">
              <NavLink to="/" className="tracking-widest px-4 py-1">
                Main
              </NavLink>
            </li>
            <li className="uppercase text-xs ">
              <NavLink to="/gallery" className="tracking-widest px-4 py-1">
                Gallery
              </NavLink>
            </li>
            <li className="uppercase text-xs ">
              <NavLink to="/projects" className="tracking-widest px-4 py-1">
                Projects
              </NavLink>
            </li>
            <li className="uppercase text-xs ">
              <NavLink
                to="/certifications"
                className="tracking-widest px-4 py-1"
              >
                Certifications
              </NavLink>
            </li>
            <li className="uppercase text-xs ">
              <NavLink to="/contacts" className="tracking-widest px-4 py-1">
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
