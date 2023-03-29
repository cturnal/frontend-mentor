import { ReactComponent as Audiophile } from '../assets/images/client-audiophile.svg';
import { ReactComponent as Databiz } from '../assets/images/client-databiz.svg';
import { ReactComponent as Maker } from '../assets/images/client-maker.svg';
import { ReactComponent as Meet } from '../assets/images/client-meet.svg';

import heroDesktop from '../assets/images/image-hero-desktop.png';
import heroMobile from '../assets/images/image-hero-mobile.png';

function Content() {
  return (
    <main
      className='
    flex flex-col justify-center items-center text-center 
    xl:flex-row xl:text-left xl:h-auto  xl:mt-10 xl:w-full 
 '
    >
      <div className='xl:order-2 xl:mr-10 xl:ml-32 xl:w-[550px]  xl:h-auto'>
        <img src={heroMobile} alt='hero desktop' className='block xl:hidden ' />
        <img src={heroDesktop} alt='hero mobile' className='hidden xl:block' />
      </div>

      <div className='flex flex-col p-3 xl:p-0 xl:ml-20 xl:mt-auto xl:w-auto xl:h-auto'>
        <div className='mt-10 xl:mt-0 xl:w-[480px] xl:mb-32'>
          <h1 className='text-4xl font-bold md:text-7xl'>Make remote work</h1>
          <p className='text-MediumGray my-5 leading-7 w-auto sm:w-96 mx-auto xl:mx-0 xl:my-14'>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className='px-6 py-3 rounded-xl bg-AlmostBlack text-AlmostWhite hover:text-AlmostBlack hover:bg-AlmostWhite hover:border-AlmostBlack border'>
            Learn more
          </button>
        </div>

        <div className='flex justify-center flex-wrap items-center gap-7 my-10 xl:mr-auto xl:my-0  '>
          <Databiz className='w-[80px] h-[15px] md:w-[110px] md:h-auto' />
          <Audiophile className='w-[50px] h-[30px] md:w-[80px] md:h-auto' />
          <Meet className='w-[60px] h-[20px] md:w-[100px] md:h-auto' />
          <Maker className='w-[70px] h-[20px] md:w-[100px] md:h-auto' />
        </div>
      </div>
    </main>
  );
}

export default Content;
