import logo from '../assets/images/logo.svg';
function Header() {
  return (
    <header className='flex justify-between items-center bg-Softred p-5 rounded-lg md:rounded-2xl text-Verypaleorange shadow-sm w-full'>
      <div className='flex flex-col'>
        <span className='text-sm lg:text-[18px]'>My balance</span>
        <h1 className='font-bold text-[25px] lg:text-[30px] '>$921.48</h1>
      </div>
      <div>
        <img src={logo} alt='logo' />
      </div>
    </header>
  );
}

export default Header;
