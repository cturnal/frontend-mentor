import cardFront from './assets/images/bg-card-front.png';
import cardBack from './assets/images/bg-card-back.png';
import cardLogo from './assets/images/card-logo.svg';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState({});

  const handleOnchange = (e) => {
    setValue((prev) => {
      if (e.target.value.card) e.target.value.card.match(/\d{4}/g).join(' ');
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <main className='h-[100vh] flex flex-col lg:flex-row  '>
      <div className='bg-[url("./assets/images/bg-main-desktop.png")] bg-cover bg-no-repeat w-full lg:max-w-[40%] h-[35%] lg:h-full mr-64'>
        <div className=' z-10 relative  text-White uppercase tracking-widest '>
          <div className='absolute top-56 left-44 md:left-[40%] md:top-64 lg:left-[90%] lg:top-[300px] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
            <img
              src={cardFront}
              alt=''
              className='shadow-lg lg:w-auto md:w-auto md:min-w-[400px] max-w-[70%] min-w-[290px]'
            />

            <img
              src={cardLogo}
              alt=''
              className='absolute top-5 mr-[220px] w-[50px] md:left-10 lg:left-5 lg:top-68 lg:w-[70px]'
            />

            <p className='absolute top-20  left-26 md:left-10 lg:left-5 lg:top-[120px] md:text-[27px] text-[20px]'>
              {value.card ? value.card : '0000 0000 0000 0000'}
            </p>
            <p className='absolute top-32  mr-[130px] md:top-44 md:left-10 lg:left-5 lg:top-[180px] md:text-[15px] text-[13px] '>
              {value.name ? value.name : 'Jane Appleseed'}
            </p>
            <p className='absolute top-32  ml-[200px] md:top-44 md:left-36 lg:left-32 lg:top-[180px] md:text-[15px] text-[13px] '>
              {value.month && value.year
                ? value.month + '/' + value.year
                : '00/00'}
            </p>
          </div>
        </div>

        <div className='relative text-White uppercase tracking-widest '>
          <div className='absolute top-32 left-52 md:left-[50%] lg:left-[100%] lg:top-[550px] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
            <img
              src={cardBack}
              alt=''
              className='shadow-lg lg:w-auto md:w-auto md:min-w-[400px] max-w-[70%] min-w-[290px]'
            />
            <p className='absolute ml-40 md:ml-64 text-sm md:text-md lg:text-lg '>
              000
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className='bg-Lineargradient h-full flex flex-col justify-center p-5 uppercase tracking-widest text-sm text-Verydarkviolet gap-2 mx-auto '
      >
        <label htmlFor='name'> Cardholder Name</label>
        <input
          type='text'
          placeholder='e.g Jane Appleseed'
          className=' p-2 mb-3 rounded-md outline outline-offset-2 outline-2 outline-Lightgrayishviolet  max-w-[380px] '
          onChange={handleOnchange}
          value={value.name || ''}
          name='name'
        />
        <label htmlFor='name'>Card Number</label>
        <input
          type='number'
          placeholder='e.g. 1234 5678 9123 0000'
          className=' p-2 mb-2 rounded-md outline outline-offset-2 outline-2 outline-Lightgrayishviolet    max-w-[380px]'
          onChange={handleOnchange}
          value={value.card || ''}
          name='card'
        />
        <label htmlFor='name' className='whitespace-nowrap'>
          Exp. Date (MM/YY) &nbsp; &nbsp; &nbsp; CVC
        </label>
        <div className='flex '>
          <input
            type='text'
            placeholder='MM'
            className=' p-2 mb-2 rounded-md outline outline-offset-2 outline-2 outline-Lightgrayishviolet w-full max-w-[85px] mr-4'
            onChange={handleOnchange}
            value={value.month || ''}
            name='month'
          />
          <input
            type='text'
            placeholder='YY'
            className=' p-2 mb-2 rounded-md outline outline-offset-2 outline-2 outline-Lightgrayishviolet mr-4 w-full max-w-[85px]'
            onChange={handleOnchange}
            value={value.year || ''}
            name='year'
          />
          <input
            type='text'
            placeholder='e.g. 123'
            className='-1 p-2 mb-2 rounded-md outline outline-offset-2 outline-2 outline-Lightgrayishviolet w-full max-w-[180px]'
            onChange={handleOnchange}
            value={value.cvc || ''}
            name='cvc'
          />
        </div>
        <button
          type='submit'
          className='bg-Verydarkviolet py-2 px-4 rounded-md mt-5 text-white w-full max-w-[380px]'
        >
          Confirm
        </button>
      </form>

      {/* <!-- Completed state start --> */}
      {/* Thank you! We've added your card details Continue */}
    </main>
  );
}

export default App;
