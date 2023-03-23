import image1 from '../assets/images/image-retro-pcs.jpg';
import image2 from '../assets/images/image-top-laptops.jpg';
import image3 from '../assets/images/image-gaming-growth.jpg';

const links = [
  {
    image: image1,
    number: '01',
    title: 'Reviving Retro PCs',
    description: 'What happens when old PCs are given modern upgrades?',
  },
  {
    image: image2,
    number: '02',
    title: 'Top 10 Laptops of 2022',
    description: 'Our best picks for various needs and budgets.',
  },
  {
    image: image3,
    number: '03',
    title: 'The Growth of Gaming',
    description: 'How the pandemic has sparked fresh opportunities.',
  },
];

function Section3() {
  return (
    <>
      {links.map((data) => (
        <section key={data.title}>
          <div className='flex  w-full    mb-10 lg:mb-0 mr-[90px] xl:mr-[130px]'>
            <img
              src={data.image}
              alt={data.image}
              className=' mr-3 h-[150px] lg:h-[130px]'
            />
            <div className='w-[230px] '>
              <h1 className='text-3xl font-[700] text-grayishBlue mb-2'>
                {data.number}
              </h1>
              <a
                href='#'
                className='text-veryDarkBlue text-lg font-[800] hover:text-softRed'
              >
                {data.title}
              </a>
              <p className='mt-2'>{data.description}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Section3;
