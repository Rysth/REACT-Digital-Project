import Logo from '../../assets/images/logo.svg';

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
              <a
                href="/"
                className="tracking-widest border-t border-b border-[var(--CL-primary-gray)] px-4 py-1"
              >
                Main
              </a>
            </li>
            <li className="uppercase text-xs ">
              <a href="/" className="tracking-widest px-4 py-1">
                Gallery
              </a>
            </li>
            <li className="uppercase text-xs ">
              <a href="/" className="tracking-widest px-4 py-1">
                Projects
              </a>
            </li>
            <li className="uppercase text-xs ">
              <a href="/" className="tracking-widest px-4 py-1">
                Certifications
              </a>
            </li>
            <li className="uppercase text-xs ">
              <a href="/" className="tracking-widest px-4 py-1">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
