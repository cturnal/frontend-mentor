const links = [
  {
    title: 'History',
  },
  {
    title: 'Our Team',
  },
  {
    title: 'Blog',
  },
];

function Company({ setToggle }) {
  return (
    <div className='md:absolute  left-64  lg:left-72  top-16 bg-white px-5 py-4 rounded-lg w-[120px] md:drop-shadow-2xl text-MediumGray tracking-wide'>
      <ul>
        {links.map((link) => (
          <li key={link.title} onClick={() => setToggle(false)}>
            <a
              href={`#${link.title}`}
              className='flex items-center gap-4 mb-2 hover:text-AlmostBlack'
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Company;
