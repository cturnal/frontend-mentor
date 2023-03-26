import cardFront from '../assets/images/bg-card-front.png';
import cardBack from '../assets/images/bg-card-back.png';
import cardLogo from '../assets/images/card-logo.svg';

function Card({ values }) {
  return (
    <>
      <div
        className={`bg-[url("./assets/images/bg-main-mobile.png")] md:bg-[url("./assets/images/bg-main-desktop.png")] bg-cover bg-no-repeat w-full lg:max-w-[30%] h-[25%] lg:h-full mr-64`}
      >
        <div className=' z-10 relative  text-White uppercase tracking-widest '>
          <div className='absolute top-56 left-44 md:left-[40%] md:top-64 lg:left-[90%] lg:top-[300px] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
            <img
              src={cardFront}
              alt='card front'
              className='shadow-lg lg:w-auto md:w-auto md:min-w-[400px] max-w-[70%] min-w-[290px]'
            />

            <img
              src={cardLogo}
              alt=''
              className='absolute top-5 mr-[220px] w-[50px] md:left-10 lg:left-5 lg:top-68 lg:w-[70px]'
            />

            <p className='absolute top-20  mr-[45px] md:left-10 lg:left-5 lg:top-[120px] md:top-[110px] md:text-[27px] text-[20px] w-56 md:w-auto'>
              {values.card
                ? values.card.replace(/(\d{4})/g, '$1 ')
                : '0000 0000 0000 0000'}
            </p>
            <p className='absolute top-32  mr-[90px] md:top-44 md:left-10 lg:left-5 lg:top-[180px] md:text-[15px] text-[12px] w-44 md:w-auto'>
              {values.name ? values.name : 'Jane Appleseed'}
            </p>
            <p className='absolute top-32  ml-[200px] md:top-44 md:left-36 lg:left-32 lg:top-[180px] md:text-[15px] text-[12px] '>
              {(values.month ? values.month : '00') +
                '/' +
                (values.year ? values.year : '00')}
            </p>
          </div>
        </div>

        <div className='relative text-White uppercase tracking-widest '>
          <div className='absolute top-32 left-52 md:left-[50%] lg:left-[100%] lg:top-[550px] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
            <img
              src={cardBack}
              alt='card back'
              className='shadow-lg lg:w-auto md:w-auto md:min-w-[400px] max-w-[70%] min-w-[290px]'
            />
            <p className='absolute ml-40 md:ml-64 text-sm md:text-md lg:text-lg '>
              {values.cvc ? values.cvc : '000'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
