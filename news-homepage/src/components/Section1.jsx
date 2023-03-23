import desktop from '../assets/images/image-web-3-desktop.jpg';
import mobile from '../assets/images/image-web-3-mobile.jpg';

function Section1() {
  return (
    <>
      <section className='mr-0 lg:mr-5 mb-16 lg:mb-0'>
        <div>
          <img src={desktop} alt='desktop' className='hidden md:block' />
          <img src={mobile} alt='mobile' className=' block md:hidden' />
        </div>
        <div className='flex flex-col lg:flex-row  lg:mt-10 mt-5'>
          <h1 className='text-6xl font-[800] lg:max-w-[355px] w-full mr-5'>
            The Bright Future of Web 3.0?
          </h1>
          <div className='lg:max-w-[355px] w-full mt-5 lg:mt-0'>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className='bg-softRed px-6 py-3 text-white  lg:mt-10 mt-5 tracking-[5px] hover:bg-veryDarkBlue  '>
              READ MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
