import { useEffect, useState } from 'react';

import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as ArrowUp } from '../assets/images/icon-arrow-up.svg';
import { ReactComponent as ArrowDown } from '../assets/images/icon-arrow-down.svg';
import { ReactComponent as Menu } from '../assets/images/icon-menu.svg';
import { ReactComponent as Close } from '../assets/images/icon-close-menu.svg';

import Features from './Features';
import Company from './Company';

const links = [
  {
    title: 'features',
  },
  {
    title: 'company',
  },
  {
    title: 'Careers',
  },
  {
    title: 'About',
  },
];

function Header() {
  const [toggle, setToggle] = useState(false);
  const [clicked, setClicked] = useState({
    features: false,
    company: false,
  });

  const handleClick = (e, click) => {
    e.stopPropagation();
    setClicked((prev) => ({ ...prev, [click]: !prev[click] }));
  };

  const handleToggle = () => setToggle(!toggle);

  useEffect(() => {
    const handleOutsideClick = () => {
      if (!toggle && clicked.features)
        setClicked((prev) => ({ ...prev, features: false }));
      if (!toggle && clicked.company)
        setClicked((prev) => ({ ...prev, company: false }));
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [clicked.features, clicked.company]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 767)
        setClicked({ features: false, company: false });
      if (window.innerWidth >= 375) setToggle(false);
    };
    if (toggle) {
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = '';
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [toggle]);

  return (
    <header>
      <nav className='flex text-MediumGray justify-between md:items-center h-20  '>
        <a href='#' className='w-40 m-5 my-auto '>
          <Logo />
        </a>

        <button
          onClick={handleToggle}
          className={`${toggle ? '  hidden' : 'md:hidden m-5 my-auto'}`}
        >
          <Menu />
        </button>

        <div
          className={`md:flex md:justify-between  md:w-full md:mr-5 md:bg-inherit overflow-auto  ${
            toggle
              ? 'right-0 w-[70%] fixed z-10 top-0 bottom-0 p-5 flex flex-col  bg-white '
              : 'hidden'
          }`}
        >
          <button onClick={handleToggle} className=' md:hidden ml-auto'>
            {toggle && <Close />}
          </button>
          <ul className='flex flex-col  md:flex-row md:items-center gap-4 lg:gap-10  mt-10 md:mt-0'>
            {links.map((link, index) => {
              if (index <= links.length - 3) {
                return (
                  <li key={link.title}>
                    <button
                      onClick={(e) => handleClick(e, link.title)}
                      className={`flex justify-center items-center gap-2 md:hover:text-AlmostBlack tracking-wide ${
                        clicked[link.title] &&
                        'md:text-AlmostBlack text-MediumGray'
                      } `}
                    >
                      <span className=' capitalize peer '>{link.title}</span>
                      {clicked[link.title] ? (
                        <ArrowUp className='md:stroke-black md:peer-hover:stroke-black md:hover:stroke-black stroke-[#686868]' />
                      ) : (
                        <ArrowDown className='md:peer-hover:stroke-black md:hover:stroke-black stroke-[#686868]' />
                      )}
                    </button>
                    {link.title === 'features' && clicked.features && (
                      <Features setToggle={setToggle} />
                    )}

                    {link.title === 'company' && clicked.company && (
                      <Company setToggle={setToggle} />
                    )}
                  </li>
                );
              } else {
                return (
                  <li key={link.title} onClick={() => setToggle(false)}>
                    <a
                      href={`#${link.title}`}
                      className='hover:text-AlmostBlack'
                    >
                      {link.title}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
          <div className='flex flex-col md:flex-row items-center justify-center mt-10 gap-4 md:gap-5 xl:gap-10  md:mt-0'>
            <button
              className=' hover:text-AlmostBlack hover:border-AlmostBlack'
              onClick={() => setToggle(false)}
            >
              Login
            </button>
            <button
              className='px-5 py-2 rounded-xl border-2 border-MediumGray hover:text-AlmostBlack hover:border-AlmostBlack w-full md:w-auto'
              onClick={() => setToggle(false)}
            >
              Register
            </button>
          </div>
        </div>

        {toggle && (
          <div className='fixed bg-black w-full z-5 overflow-hidden top-0 bottom-0   opacity-70 ' />
        )}
      </nav>
    </header>
  );
}

export default Header;
