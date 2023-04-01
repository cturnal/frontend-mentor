import { useState } from 'react';
import dollar from './assets/images/icon-dollar.svg';
import person from './assets/images/icon-person.svg';

const tipPercent = ['5', '10', '15', '25', '50'];

const FormInput = ({
  label,
  placeholder,
  src,
  className,
  colored,
  focused,
  ...rest
}) => {
  return (
    <div className={`${className} relative`}>
      <label className='text-Verydarkcyan/70 font-bold text-sm md:text-[16px]'>
        {label}
      </label>

      <input
        {...rest}
        min='1'
        step='0.01'
        type='number'
        placeholder={placeholder}
        className={`w-full bg-Verylightgrayishcyan ${
          colored
            ? 'placeholder:text-Verydarkcyan/70'
            : 'placeholder:text-Grayishcyan'
        } h-full px-2 rounded-md font-bold text-right focus:outline-Strongcyan hover:border-Strongcyan border-2 text-xl md:text-[24px] text-Verydarkcyan cursor-pointer peer ${
          focused && 'invalid:border-orange-600'
        }
        `}
      />
      <span
        className={`text-xs capitalize text-orange-600 absolute ${
          colored ? 'bottom-24 w-40' : 'right-0 top-1'
        } font-bold  hidden ${focused && `peer-invalid:block`}`}
      >
        Can't be zero
      </span>
      <img src={src} alt={label} className='absolute top-9 md:top-10 left-5' />
    </div>
  );
};

function App() {
  const [focused, setFocused] = useState(false);
  const [values, setValues] = useState({});

  const handleOnchange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      tip:
        e.target.name === 'custom' && e.target.value >= 0
          ? e.target.value
          : values.tip,
    }));
  };

  const handleOnClick = (tip) => {
    setValues((prev) => ({
      ...prev,
      tip: tip,
      custom: 0,
    }));
  };

  const handleReset = () => {
    setValues({});
  };

  const tipEach = +((values.bill * values.tip) / 100 / values.num).toFixed(2);
  const totalEach = +(values.bill / values.num + tipEach).toFixed(2);

  return (
    <main>
      <section>
        <h1 className='text-center text-Verydarkcyan/70 tracking-[7px] flex flex-col text-2xl font-bold '>
          SPLI<span>TTER</span>
        </h1>

        <div className='bg-White md:flex items-center justify-center p-5 rounded-2xl mt-10 md:mt-20 gap-10'>
          <form className='space-y-8 md:max-w-[380px]  max-w-[350px] p-2 mb-5 md:mb-0'>
            <FormInput
              label='Bill'
              placeholder='0'
              src={dollar}
              name='bill'
              value={values.bill || ''}
              onChange={handleOnchange}
              onBlur={() => setFocused(true)}
              className='flex flex-col gap-2 relative'
              focused={focused}
            />
            <div className='flex flex-col gap-2  font-bold'>
              <label className='text-Verydarkcyan/70 text-sm md:text-[16px]'>
                Select Tip %
              </label>
              <div className='flex flex-wrap gap-3 '>
                {tipPercent.map((tip) => (
                  <button
                    type='button'
                    key={tip}
                    className={` py-1 md:py-2 rounded-[4px]  text-center basis-1/3 md:basis-1/4 flex-1 text-xl md:text-[24px]  hover:text-Verydarkcyan hover:bg-Strongcyan/40 ${
                      values.tip === tip
                        ? 'bg-Strongcyan text-Verydarkcyan'
                        : 'bg-Verydarkcyan text-white'
                    }`}
                    name='tip'
                    value={tip || ''}
                    onClick={() => handleOnClick(tip)}
                  >
                    {tip}%
                  </button>
                ))}
                <FormInput
                  placeholder='Custom'
                  className='basis-1/3 md:basis-1/4 flex-1  '
                  colored='true'
                  name='custom'
                  value={values.custom || ''}
                  onChange={handleOnchange}
                  onBlur={() => setFocused(true)}
                  focused={focused}
                />
              </div>
            </div>
            <FormInput
              label='Number of People'
              placeholder='0'
              src={person}
              className='flex flex-col gap-2 relative '
              name='num'
              value={values.num || ''}
              onChange={handleOnchange}
              onBlur={() => setFocused(true)}
              focused={focused}
            />
          </form>

          <div className='bg-Verydarkcyan md:h-96 rounded-xl p-8 md:w-96 flex-col justify-between flex font-bold'>
            <div className=' space-y-5 md:space-y-10 leading-3 md:mt-5'>
              {['Tip Amount', 'Total'].map((info, index) => (
                <div key={index} className='flex justify-between '>
                  <div className='flex flex-col justify-center'>
                    <p className='text-White text-xs md:text-sm'>{info}</p>
                    <span className='text-Grayishcyan text-xs md:text-sm'>
                      / person
                    </span>
                  </div>
                  <div className='text-Strongcyan text-3xl md:text-4xl'>
                    $
                    {values.tip &&
                    values.tip > 0 &&
                    values.bill &&
                    values.bill > 0 &&
                    values.num &&
                    values.num > 0 &&
                    totalEach !== undefined
                      ? index === 0
                        ? tipEach
                        : totalEach
                      : '0.00'}
                  </div>
                </div>
              ))}
            </div>
            <div className='bg-white rounded-lg mt-10 md:mt-0'>
              <button
                onClick={handleReset}
                className={` hover:bg-Strongcyan/40 hover:text-Verydarkcyan py-2 rounded-md  w-full ${
                  values.tip &&
                  values.tip > 0 &&
                  values.bill &&
                  values.bill > 0 &&
                  values.num &&
                  values.num > 0 &&
                  totalEach !== undefined
                    ? 'bg-Strongcyan text-Verydarkcyan'
                    : 'bg-Verydarkcyan/90 text-Verydarkcyan/70'
                }`}
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
