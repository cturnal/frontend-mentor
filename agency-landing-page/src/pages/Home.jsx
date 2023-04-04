import transform from '../assets/images/desktop/image-transform.jpg';
import stand from '../assets/images/desktop/image-stand-out.jpg';
import photography from '../assets/images/desktop/image-photography.jpg';
import graphic from '../assets/images/desktop/image-graphic-design.jpg';

function Home() {
  return (
    <>
      <section className='flex'>
        <article>
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button>Learn more</button>
        </article>

        <img src={transform} alt='transform' />
      </section>
      <section className='flex flex-row-reverse'>
        <article>
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button>Learn more</button>
        </article>

        <img src={stand} alt='stand' />
      </section>

      <section className='flex relative text-center'>
        <article
          className='bg-cover w-[50%] bg-no-repeat h-[60dvh]'
          style={{ backgroundImage: `url(${graphic})` }}
        >
          <h2> Graphic design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
          {/* <img src={graphic} alt='graphic' className='absolute' /> */}
        </article>
        <article
          className='bg-cover w-[50%] bg-no-repeat h-[60dvh]'
          style={{ backgroundImage: `url(${photography})` }}
        >
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
          {/* <img src={photography} alt='photography' /> */}
        </article>
      </section>

      <section className='flex '>
        <h2>Client testimonials</h2>
      </section>

      <>
        We put our trust in Sunnyside and they delivered, making sure our needs
        were met and deadlines were always hit. Emily R. Marketing Director
        Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
        success made it a satisfying and enjoyable experience. Thomas S. Chief
        Operating Officer Incredible end result! Our sales increased over 400%
        when we worked with Sunnyside. Highly recommended! Jennie F. Business
        Owner About Services Projects Contact
      </>
    </>
  );
}

export default Home;
