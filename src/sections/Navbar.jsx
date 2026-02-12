import { useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => { }, theme = 'light' }) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-black-200';

  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li"
          onClick={() => {
            onClick();
            window.location.href = item.href
          }} >
          <a
            href={item.href}
            onClick={(e) => e.preventDefault()}
            className={`${textColor} hover:text-orange-600 transition-colors duration-300 cursor-pointer font-larger font-medium `}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-black/10 backdrop-blur-xl h-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space inner-nav" >
          <a to="/" className="text-black font-bold text-xl hover:text-orange-600 transition-colors cursor-pointer">
            KB
          </a>

          <button
            onClick={toggleMenu}
            className="text-black hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/icons/close.png' : 'assets/icons/menu.png'} alt="toggle" className="w-6" />
          </button>

          <nav className="sm:flex hidden ">
            <NavItems theme="light" />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5 bg-black min-h-screen side-navbar">
          <NavItems onClick={closeMenu} theme="dark" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


