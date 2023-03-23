import React from 'react';

function Sidebar({ toggle }) {
  return (
    <>
      <div className=' bg-veryDarkBlue/50  w-full  top-0 left-0  block md:hidden fixed h-full '></div>
      <div className='bg-offWhite w-[60vw]   top-0 right-0 block md:hidden fixed    h-full '>
        <nav>
          <ul className='flex flex-col p-5 gap-5 mt-40'>
            <li>
              <a
                href='#'
                onClick={() => toggle(false)}
                className='text-veryDarkBlue hover:text-softRed text-lg'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => toggle(false)}
                className='text-veryDarkBlue hover:text-softRed text-lg'
              >
                New
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => toggle(false)}
                className='text-veryDarkBlue hover:text-softRed text-lg'
              >
                Popular
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => toggle(false)}
                className='text-veryDarkBlue hover:text-softRed text-lg'
              >
                Trending
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => toggle(false)}
                className='text-veryDarkBlue hover:text-softRed text-lg'
              >
                Categories
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
