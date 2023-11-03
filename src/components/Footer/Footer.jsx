import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-[var(--CL-primary-gray)] text-white">
      <div className="container max-w-screen-xl px-4 py-20 mx-auto">
        <div className="grid sm:grid-cols-3">
          <ul className="grid gap-4 p-0 list-none">
            <li className="mb-3">
              <h3 className="text-base font-bold">Information</h3>
            </li>
            <li className="md:hover:translate-x-2 md:transition w-max">
              <Link to="/" className="text-sm">
                Main
              </Link>
            </li>
            <li className="md:hover:translate-x-2 md:transition w-max">
              <Link to="/gallery" className="text-sm">
                Gallery
              </Link>
            </li>
            <li className="md:hover:translate-x-2 md:transition w-max">
              <Link to="/projects" className="text-sm">
                Projects
              </Link>
            </li>
            <li className="md:hover:translate-x-2 md:transition w-max">
              <Link to="/certifications" className="text-sm">
                Certifications
              </Link>
            </li>
            <li className="md:hover:translate-x-2 md:transition w-max">
              <Link to="/contacts" className="text-sm">
                Contacts
              </Link>
            </li>
          </ul>
          <ul className="grid gap-4 p-0 list-none">
            <li className="mb-3">
              <h3 className="text-base font-bold">Contacts</h3>
            </li>
            <li className="md:hover:translate-x-2 md:transition w-max">
              <a href="https://www.google.com/maps" className="text-sm">
                <i className="mr-3 fa-solid fa-map-marker" />
                1234 Sample Street Austin Texas 78704
              </a>
            </li>
            <li className="md:hover:translate-x-2 md:transition w-max">
              <a href="tel+123456789" className="text-sm">
                <i className="mr-3 fa-solid fa-phone" />
                512.333.2222
              </a>
            </li>
            <li className="md:hover:translate-x-2 md:transition w-max">
              <a href="mailto:sampleemail@gmail.com" className="text-sm">
                <i className="mr-3 fa-solid fa-envelope" />
                sampleemail@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
