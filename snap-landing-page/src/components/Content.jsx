import { ReactComponent as Audiophile } from '../assets/images/client-audiophile.svg';
import { ReactComponent as Databiz } from '../assets/images/client-databiz.svg';
import { ReactComponent as Maker } from '../assets/images/client-maker.svg';
import { ReactComponent as Meet } from '../assets/images/client-meet.svg';

import heroDesktop from '../assets/images/image-hero-desktop.png';

function Content() {
  return (
    <main className='flex justify-center  mx-44 mt-20 '>
      <div className='flex flex-col justify-between w-[50%]'>
        <div className='flex flex-col justify-start text-left '>
          <h1 className='text-7xl font-bold w-[480px]'>Make remote work</h1>
          <p className='text-MediumGray w-96 my-10'>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <div className=''>
            <button className='px-8 py-4 rounded-xl bg-AlmostBlack text-AlmostWhite'>
              Learn more
            </button>
          </div>
        </div>

        <div className='flex  gap-10'>
          <Databiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
      </div>
      <div className='w-[50% ml-auto'>
        <img src={heroDesktop} alt='heroDesktop' className='h-[600px]' />
      </div>
    </main>
  );
}

export default Content;
