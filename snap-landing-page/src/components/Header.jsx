import { useEffect, useRef, useState } from 'react';
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

  const featuresRefMain = useRef(null);
  const featuresRef = useRef(null);
  const companyRefMain = useRef(null);
  const companyRef = useRef(null);

  const handleClick = (click) => {
    console.log('handleClick');
    setClicked((prev) => ({ ...prev, [click]: !prev[click] }));
  };

  const handleToggle = () => {
    setToggle(!toggle);
    setClicked((prev) => ({ features: true, company: true }));
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      console.log(
        !toggle,
        clicked.features,
        !featuresRef?.current?.contains(event.target),
        !companyRef?.current?.contains(event.target),
        featuresRefMain.current !== event.target,
        companyRefMain.current !== event.target
      );
      if (
        !toggle &&
        clicked.features &&
        !featuresRef?.current?.contains(event.target) &&
        !companyRef?.current?.contains(event.target) &&
        featuresRefMain.current !== event.target &&
        companyRefMain.current !== event.target
      ) {
        console.log(
          !toggle &&
            clicked.features &&
            !featuresRef?.current?.contains(event.target) &&
            !companyRef?.current?.contains(event.target) &&
            featuresRefMain.current !== event.target &&
            companyRefMain.current !== event.target
        );
        setClicked((prev) => ({ ...prev, features: false }));
      }

      if (
        !toggle &&
        clicked.company &&
        !featuresRef?.current?.contains(event.target) &&
        !companyRef?.current?.contains(event.target) &&
        companyRefMain.current !== event.target &&
        featuresRefMain.current !== event.target
      ) {
        setClicked((prev) => ({ ...prev, company: false }));
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [featuresRef?.current, companyRef.current]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setClicked({ features: false, company: false });
      }
      if (window.innerWidth >= 375) {
        setToggle(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [toggle]);

  return (
    <header>
      <nav className='flex text-MediumGray justify-between md:items-center h-20  '>
        <div className='w-40 lg:w-52 m-5 my-auto '>
          <a href='#'>
            <Logo />
          </a>
        </div>
        <div className={`${toggle ? '  hidden' : 'md:hidden m-5 my-auto'}`}>
          <button onClick={handleToggle}>
            <Menu />
          </button>
        </div>
        <div
          className={`md:flex md:justify-between md:w-full md:mr-5 md:bg-inherit overflow-auto  ${
            toggle ? 'w-96 z-10  p-5 h-screen bg-white ' : 'hidden'
          }`}
        >
          <div className=' md:hidden flex justify-end mr-auto'>
            <button onClick={handleToggle}>{toggle && <Close />}</button>
          </div>
          <div>
            <ul className='flex flex-col md:flex-row md:items-center gap-4 lg:gap-10 h-full mt-10 md:mt-0'>
              {links.map((link, index) => {
                if (index <= links.length - 3) {
                  return (
                    <li key={link.title}>
                      <button
                        onClick={() => handleClick(link.title)}
                        className={`flex justify-center items-center gap-2 hover:text-AlmostBlack ${
                          clicked[link.title] && 'text-AlmostBlack'
                        } `}
                        ref={
                          link.title === 'features'
                            ? featuresRefMain
                            : null || link.title === 'company'
                            ? companyRefMain
                            : null
                        }
                      >
                        <span className=' capitalize peer'>{link.title}</span>
                        {clicked[link.title] ? (
                          <ArrowUp />
                        ) : (
                          <ArrowDown className='peer-hover:stroke-black hover:stroke-black stroke-[#686868]' />
                        )}
                      </button>
                      {link.title === 'features' && clicked.features && (
                        <Features
                          featureRef={featuresRef}
                          setToggle={setToggle}
                        />
                      )}

                      {link.title === 'company' && clicked.company && (
                        <Company
                          companyRef={companyRef}
                          setToggle={setToggle}
                        />
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
          </div>

          <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 lg:gap-10 mt-8 md:mt-0'>
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
          <div className='h-screen bg-black w-full absolute  opacity-70' />
        )}
      </nav>
    </header>
  );
}

export default Header;
