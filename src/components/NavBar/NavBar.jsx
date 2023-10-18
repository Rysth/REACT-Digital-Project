import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import NavigationLinks from '../../data/navigation.json';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <div className="container max-w-screen-xl mx-auto p-4 sm:py-6 flex flex-wrap items-center justify-between">
        <a href="/" rel="noopener noreferrer">
          <img src={Logo} alt="" className="w-16 sm:w-24" />
        </a>
        <button type="button" className="sm:hidden text-3xl">
          <i className="fa-solid fa-bars" />
        </button>
        <nav className="w-full sm:w-max">
          <ul className="p-0 text-[var(--CL-primary-gray)] sm:hidden grid w-full mt-2">
            {NavigationLinks.navLinks.map((navigation) => (
              <li className="uppercase text-xs w-full" key={navigation.id}>
                <NavLink
                  to={navigation.to}
                  className="tracking-widest px-3 py-3 block font-bold"
                >
                  {navigation.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="p-0 text-[var(--CL-primary-gray)] items-center hidden sm:flex md:gap-5">
            {NavigationLinks.navLinks.map((navigation) => (
              <li className="uppercase text-xs" key={navigation.id}>
                <NavLink
                  to={navigation.to}
                  className="tracking-widest px-4 py-1"
                >
                  {navigation.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
