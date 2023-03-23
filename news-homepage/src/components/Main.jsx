import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

function Main() {
  return (
    <main className='mx-auto max-w-[1100px] '>
      <article className='flex flex-col lg:flex-row '>
        <Section1 />
        <Section2 />
      </article>
      <article className='flex flex-col lg:flex-row my-20'>
        <Section3 />
      </article>
    </main>
  );
}

export default Main;
