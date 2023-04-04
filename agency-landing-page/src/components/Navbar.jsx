import logo from '../assets/images/logo.svg';

function Navbar() {
  return (
    <nav className='flex items-center justify-end py-8 px-9 '>
      <a href='#home' className='mr-auto'>
        <img src={logo} alt='logo' className='w-[170px]' />
      </a>
      <ul className='flex gap-[46px] mr-[46px] font-Barlow font-bold text-White '>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
      </ul>
      <a href='#contact'>
        <button className='font-bold uppercase bg-White py-[1em] text-sm px-[1.8em] mr-2 rounded-full'>
          Contact
        </button>
      </a>
    </nav>
  );
}

export default Navbar;
