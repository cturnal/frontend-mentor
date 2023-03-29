import { useEffect, useState } from 'react';
import dice from './assets/images/icon-dice.svg';
import patternDesktop from './assets/images/pattern-divider-desktop.svg';
import patternMobile from './assets/images/pattern-divider-mobile.svg';

function App() {
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip);
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main className='bg-DarkGrayishBlue p-10 max-w-[530px] shadow-xl rounded-xl text-center  relative m-4'>
      <section className='justify-center items-center flex flex-col'>
        <h2 className='text-NeonGreen mb-5 tracking-[4px] text-xs'>
          {loading ? <span> ...</span> : <q> ADVICE #{advice.id}</q>}
        </h2>

        <p className='text-LightCyan font-extrabold text-[23px] md:text-[28px] mb-8'>
          {loading ? (
            <div className='my-10'>Getting Advice...</div>
          ) : (
            <q>{advice.advice}</q>
          )}
        </p>
        <img
          src={patternDesktop}
          alt='pattern desktop'
          className='mb-8 hidden md:block'
        />
        <img
          src={patternMobile}
          alt='pattern desktop'
          className='mb-8 block md:hidden'
        />

        <button
          onClick={fetchAdvice}
          className='absolute  left-[50%] ml-[-30px] bottom-[-20px] bg-NeonGreen p-4 rounded-full dice-shadow disabled:bg-slate-700 disabled:shadow-none'
          disabled={loading}
        >
          <img src={dice} alt='' className='' />
        </button>
      </section>
    </main>
  );
}

export default App;
