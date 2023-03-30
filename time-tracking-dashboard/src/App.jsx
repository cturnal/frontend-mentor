import profile from './assets/images/image-jeremy.png';
import ellipsis from './assets/images/icon-ellipsis.svg';
import work from './assets/images/icon-work.svg';
import study from './assets/images/icon-study.svg';
import play from './assets/images/icon-play.svg';
import social from './assets/images/icon-social.svg';
import self from './assets/images/icon-self-care.svg';
import exercise from './assets/images/icon-exercise.svg';
import data from './assets/data.json';

import { useState } from 'react';

function App() {
  const [periodicals, setPeriodicals] = useState({
    daily: false,
    weekly: true,
    monthly: false,
  });

  const handleClick = (click) => {
    setPeriodicals((prev) => ({
      daily: click === 'daily',
      weekly: click === 'weekly',
      monthly: click === 'monthly',
    }));
  };

  return (
    <main className='flex flex-col md:flex-row md:justify-center md:items-center w-full h-full px-5  gap-5 '>
      <div className='md:w-64 flex flex-col md:mb-20 '>
        <div className='relative top-14 rounded-lg bg-Blue p-6 text-PaleBlue flex items-center md:flex-col md:items-start '>
          <img
            src={profile}
            alt='profile'
            className='w-14 h-14 p-[1px] bg-white rounded-full md:mb-6 mr-4 md:mr-0'
          />
          <div>
            <p className='text-PaleBlue text-xs lg:text-[18px]'>Report for</p>
            <p className='text-white text-xl md:text-5xl  font-light md:mb-10'>
              Jeremy Robson
            </p>
          </div>
        </div>

        <div className='mt-12 md:mt-9 md:mb-14 md:h-36 rounded-b-lg bg-Darkblue '>
          <ul className='md:px-7 py-5 flex md:flex-col  justify-evenly md:justify-end gap-2 md:h-full'>
            <li>
              <button
                onClick={() => handleClick('daily')}
                className={`${
                  periodicals.daily
                    ? 'text-white'
                    : 'text-Desaturatedblue hover:text-white'
                }`}
              >
                Daily
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick('weekly')}
                className={`${
                  periodicals.weekly
                    ? 'text-white'
                    : 'text-Desaturatedblue hover:text-white'
                }`}
              >
                Weekly
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick('monthly')}
                className={`${
                  periodicals.monthly
                    ? 'text-white'
                    : 'text-Desaturatedblue hover:text-white'
                }`}
              >
                Monthly
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:flex-wrap md:w-[840px] gap-5 w-full pb-20'>
        {data.map((info) => (
          <div className='basis-none md:basis-1/4  flex-1 ' key={info.icon}>
            <div
              className={`rounded-t-lg pr-4`}
              style={{ backgroundColor: `${info.color}` }}
            >
              <div
                className='h-10 md:h-14  bg-no-repeat bg-right '
                style={{
                  backgroundImage: `url(${
                    (info.icon === 'work' && work) ||
                    (info.icon === 'play' && play) ||
                    (info.icon === 'study' && study) ||
                    (info.icon === 'exercise' && exercise) ||
                    (info.icon === 'social' && social) ||
                    (info.icon === 'self' && self)
                  }
                  )`,
                }}
              ></div>
            </div>

            <div className='mt-[-14px] rounded-lg bg-Darkblue p-4 text-white  hover:bg-Desaturatedblue cursor-pointer'>
              <div className='flex justify-between mb-1 md:mb-5 text-xs lg:text-[18px]'>
                <h2>{info.title}</h2>
                <button onClick={() => {}}>
                  <img src={ellipsis} alt='ellipsis' />
                </button>
              </div>
              <div className='flex items-center justify-between md:flex-col md:justify-start md:items-start md:w-40'>
                <p className='text-2xl md:text-5xl font-light mb-2 '>
                  {['daily', 'weekly', 'monthly'].map(
                    (periodical) =>
                      periodicals[periodical] &&
                      `${
                        info.timeframes[periodical].current > 1
                          ? info.timeframes[periodical].current + 'hrs'
                          : '1hr'
                      }`
                  )}
                </p>
                <p className='text-PaleBlue mb-2 text-xs lg:text-[18px]'>
                  {['daily', 'weekly', 'monthly'].map(
                    (periodical) =>
                      periodicals[periodical] &&
                      `${
                        info.timeframes[periodical].previous > 1
                          ? info.timeframes[periodical].previous + 'hrs'
                          : '1hr'
                      }`
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
