import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import NavigationLinks from '../../data/navigation.json';
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="container flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto sm:py-6 animate__animated animate__fadeInDown ">
        <a href="/" rel="noopener noreferrer">
          <img src={Logo} alt="" className="w-16 sm:w-24" />
        </a>
        <button
          type="button"
          className="text-3xl sm:hidden"
          onClick={handleMobileMenu}
        >
          <i className="fa-solid fa-bars text-[var(--CL-primary-gray)]" />
        </button>
        <nav className="w-full sm:w-max ">
          <ul
            className={`p-0 text-[var(--CL-primary-gray)] sm:hidden grid w-full mt-2 bg-[var(--CL-primary-extra-light)] animate__animated animate__fadeIn  ${
              !isOpen && 'hidden'
            }`}
          >
            {NavigationLinks.data.map((navigation) => (
              <li className="w-full text-xs uppercase " key={navigation.id}>
                <NavLink
                  to={navigation.to}
                  className="block px-3 py-3 font-bold tracking-widest"
                  onClick={closeMobileMenu}
                >
                  {navigation.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="p-0 text-[var(--CL-primary-gray)] items-center hidden sm:flex md:gap-5">
            {NavigationLinks.data.map((navigation) => (
              <li className="text-xs uppercase" key={navigation.id}>
                <NavLink
                  to={navigation.to}
                  className="px-4 py-1 tracking-widest"
                  onClick={closeMobileMenu}
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
