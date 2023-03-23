import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.svg';
import open from '../assets/images/icon-menu.svg';
import close from '../assets/images/icon-menu-close.svg';
import Sidebar from './Sidebar';

function Header() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 767) setToggle(false);
    };
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [toggle]);
  return (
    <>
      <header className='flex items-center justify-between max-w-[1100px] mx-auto my-10 '>
        <img src={logo} alt='logo' />
        <nav className='hidden md:block'>
          <ul className='flex gap-10'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>New</a>
            </li>
            <li>
              <a href='#'>Popular</a>
            </li>
            <li>
              <a href='#'>Trending</a>
            </li>
            <li>
              <a href='#'>Categories</a>
            </li>
          </ul>
        </nav>
        <button
          className='block md:hidden z-10 m-1'
          onClick={() => setToggle(!toggle)}
        >
          <img src={toggle ? close : open} alt='' />
        </button>
      </header>
      {toggle && <Sidebar toggle={setToggle} />}
    </>
  );
}

export default Header;
