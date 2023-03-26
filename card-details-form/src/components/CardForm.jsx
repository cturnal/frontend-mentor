import { useState } from 'react';
import ThankYou from './ThankYou';

function CardForm({ values, handleChange, setValues }) {
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const validation = `hover:border-Lineargradient focus:border-Lineargradient cursor-pointer p-2 border-[1px] border-Lightgrayishviolet rounded-md focus:outline-none  ${
    focused && 'invalid:border-Red'
  }`;
  return (
    <>
      {submitted ? (
        <ThankYou
          setSubmitted={setSubmitted}
          setValues={setValues}
          setFocused={setFocused}
        />
      ) : (
        <div className=' flex justify-center text-Verydarkviolet mx-auto px-5 uppercase tracking-widest text-sm font-semibold'>
          <form onSubmit={handleSubmit} className='mt-[150px] lg:mt-[250px]'>
            <div className='flex flex-col gap-3 mx-auto'>
              <label>Cardholder Name</label>
              <input
                type='text'
                placeholder='e.g Jane Appleseed'
                className={`${validation} peer`}
                name='name'
                onChange={handleChange}
                value={values.name || ''}
                required
                onBlur={() => setFocused(true)}
                focused={focused.toString()}
              />
              <span
                className={`text-xs capitalize text-Red  hidden ${
                  focused && 'peer-invalid:block'
                }`}
              >
                Can't be blank
              </span>
              <label>Card Number</label>
              <input
                type='text'
                placeholder='e.g. 1234 5678 9123 0000'
                className={`${validation}  peer/card`}
                name='card'
                onBlur={() => setFocused(true)}
                focused={focused.toString()}
                onChange={handleChange}
                value={
                  values.card
                    ?.replace(/\s/g, '')
                    .match(/.{1,4}/g)
                    ?.join(' ') || ''
                }
                required
                pattern='[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}'
              />
              <span
                className={`text-xs capitalize text-Red  hidden ${
                  focused && `peer-invalid/card:block`
                }`}
              >
                Wrong format, 16 numbers only
              </span>
            </div>

            <div className='flex  gap-3 mt-5 mx-auto'>
              <div className='flex flex-col gap-3 '>
                <label>Exp. Date (MM/YY)</label>

                <div className='flex gap-3 relative '>
                  <input
                    type='text'
                    placeholder='MM'
                    className={`${validation}  peer/date w-20`}
                    name='month'
                    onChange={handleChange}
                    value={values.month || ''}
                    required
                    pattern='^[0-9]{2}$'
                    onBlur={() => setFocused(true)}
                    focused={focused.toString()}
                  />

                  <input
                    type='text'
                    placeholder='YY'
                    className={`${validation}  peer/date w-20 `}
                    name='year'
                    onChange={handleChange}
                    value={values.year || ''}
                    required
                    pattern='^[0-9]{2}$'
                    onBlur={() => setFocused(true)}
                    focused={focused.toString()}
                  />
                  <span
                    className={`text-xs capitalize text-Red  hidden absolute bottom-[-29px] w-full right-0  ${
                      focused && 'peer-invalid/date:block'
                    }`}
                  >
                    Can't be blank
                  </span>
                </div>
              </div>

              <div className='flex flex-col gap-3  mb-10 relative'>
                <label className='whitespace-nowrap'>CVC</label>
                <input
                  type='text'
                  placeholder='e.g. 123'
                  className={`${validation}  peer/cvc w-full`}
                  name='cvc'
                  onChange={handleChange}
                  value={values.cvc || ''}
                  required
                  pattern='^[0-9]{3}$'
                  onBlur={() => setFocused(true)}
                  focused={focused.toString()}
                />
                <span
                  className={`text-xs capitalize text-Red absolute hidden top-[83px] ${
                    focused && 'peer-invalid/cvc:block'
                  }`}
                >
                  Can't be blank
                </span>
              </div>
            </div>

            <button
              type='submit'
              className='bg-Verydarkviolet py-3 px-4 rounded-md  text-white w-full'
              onClick={() => setFocused(true)}
            >
              Confirm
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default CardForm;
