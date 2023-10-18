import Logo from '../../assets/images/logo.svg';

function NavBar() {
  return (
    <div>
      <div className="container max-w-screen-xl mx-auto p-4 sm:py-6 flex items-center">
        <a href="/" rel="noopener noreferrer">
          <img src={Logo} alt="" className="w-16 sm:w-24" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
