import React, { useState } from 'react';
import { inputs, periods } from './assets/data.js';
import arrow from './assets/images/icon-arrow.svg';
import FormInput from './components/FormInput';

function App() {
  const [inputInfo, setInputInfo] = useState(inputs);
  const [focused, setFocused] = useState(false);

  const [age, setAge] = useState({});
  const [values, setValues] = useState({
    day: '',
    month: '',
    year: '',
  });

  const handleChange = (e) => {
    setInputInfo(inputs);
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const daysInMonth = new Date(
      Number(values.year),
      Number(values.month),
      0
    ).getDate();

    if (values.day > daysInMonth) {
      const updateInfo = inputInfo.map((info, index) => {
        if (index === 0) {
          return { ...info, max: daysInMonth, error: 'Must be a valid date' };
        } else if (index === 1 || index === 2) {
          return { ...info, error: '' };
        }
        return info;
      });
      setAge({});
      setInputInfo(updateInfo);
    } else {
      setAge({
        years: Math.abs(new Date().getFullYear() - values.year),
        months: Math.abs(new Date().getMonth() + 1 - values.month),
        days: Math.abs(new Date().getDate() - values.day),
      });
    }
  };
  return (
    <main className='w-full md:w-auto max-w-[480px] md:max-w-full'>
      <section className='bg-White p-4 md:p-10 shadow-sm rounded-xl rounded-br-[200px] mx-3'>
        <form onSubmit={handleSubmit}>
          <div className='flex md:gap-7 gap-2 justify-center md:justify-start tracking-widest flex-wrap mt-10 md:mt-0'>
            {inputInfo.map((input) => (
              <FormInput
                key={input.id}
                value={values[input.name]}
                onChange={handleChange}
                focused={focused}
                setFocused={setFocused}
                {...input}
              />
            ))}
          </div>

          <div className='relative my-20 md:my-12  md:w-[670px] lg:w-[690px]'>
            <hr className='border-[1px]' />
            <button
              onClick={() => setFocused(true)}
              type='submit'
              className='bg-Purple rounded-full p-5 absolute top-[-35px] md:top-[-40px] left-[50%] -translate-x-1/2 md:left-[88%] md:right-0 md:-translate-x-0  hover:bg-Offblack w-[70px] md:w-auto'
            >
              <img src={arrow} alt='arrow' />
            </button>
          </div>
        </form>
        <div className=' space-y-3 mb-10'>
          {periods.map((period) => (
            <React.Fragment key={period}>
              <p className='text-4xl md:text-8xl  italic font-extrabold'>
                <span className='text-Purple'>
                  {age[period] || (age[period] == 0 && '0')
                    ? age[period] + ' '
                    : '- -'}
                </span>
                {period}
              </p>
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
