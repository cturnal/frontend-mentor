import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import banner from '../assets/images/desktop/image-header.jpg';
import arrowDown from '../assets/images/icon-arrow-down.svg';

function MainLayout({ children }) {
  return (
    <>
      <header
        className='bg-contain bg-no-repeat h-[800
          px] text-center '
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <Navbar />
        <h1 className='mt-[78px] text-5xl tracking-[12px] text-White'>
          WE ARE CREATIVES
        </h1>
        <img src={arrowDown} alt='arrow down' className='m-auto mt-[100px]' />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
