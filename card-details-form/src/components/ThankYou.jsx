import complete from '../assets/images/icon-complete.svg';
import useForm from '../hooks/useForm';

function ThankYou({ setSubmitted, setValues, setFocused }) {
  const handleContinue = () => {
    setValues({});
    setSubmitted(false);
    setFocused(false);
  };
  return (
    <div className='flex flex-col justify-center items-center font-semibold m-auto sm:w-[390px] w-[90%] px-2 mt-[150px] lg:mt-[300px]'>
      <img src={complete} alt='thank you' />
      <h2 className='text-2xl uppercase mt-10 tracking-widest'>Thank you!</h2>
      <p className='text-Darkgrayishviolet mt-3 mb-10'>
        We've added your card details
      </p>
      <button
        className='bg-Verydarkviolet py-3 px-4 rounded-md  text-sm text-white w-full'
        onClick={handleContinue}
      >
        {' '}
        Continue
      </button>
    </div>
  );
}

export default ThankYou;
