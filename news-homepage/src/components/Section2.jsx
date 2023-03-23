import React from 'react';

const links = [
  {
    title: 'Hydrogen VS Electric Cars',
    description: 'Will hydrogen-fueled cars ever catch up to EVs?',
    hr: true,
  },
  {
    title: 'The Downsides of AI Artistry',
    description:
      'What are the possible adverse effects of on-demand AI image generation?',
    hr: true,
  },
  {
    title: 'HIs VC Funding Drying Up?',
    description:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    hr: false,
  },
];

function Section2() {
  return (
    <>
      <section className='bg-veryDarkBlue  p-5 lg:max-w-[350px] w-full '>
        <h1 className='text-4xl font-[700] text-softOrange my-5'>New</h1>
        {links.map((data) => (
          <div key={data.title}>
            <a
              href='#'
              className='text-offWhite text-lg font-[800] hover:text-softOrange'
            >
              {data.title}
            </a>
            <p className='my-2 text-grayishBlue'>{data.description}</p>
            {data.hr ? <hr className='my-8 border-darkGrayishBlue' /> : ''}
          </div>
        ))}
      </section>
    </>
  );
}

export default Section2;
