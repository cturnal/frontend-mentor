import todo from '../assets/images/icon-todo.svg';
import calendar from '../assets/images/icon-calendar.svg';
import reminders from '../assets/images/icon-reminders.svg';
import planning from '../assets/images/icon-planning.svg';

const links = [
  {
    title: 'Todo List',
    img: todo,
  },
  {
    title: 'Calendar',
    img: calendar,
  },
  {
    title: 'Reminders',
    img: reminders,
  },
  {
    title: 'Planning',
    img: planning,
  },
];

function Features({ setToggle }) {
  return (
    <div className='md:absolute left-20 lg:left-28  top-16 bg-white px-5 pt-5 rounded-lg w-[160px] md:drop-shadow-2xl  text-MediumGray tracking-wider '>
      <ul>
        {links.map((link) => (
          <li key={link.title} onClick={() => setToggle(false)}>
            <a
              href={`#${link.title}`}
              className='flex items-center gap-4 mb-3 hover:text-AlmostBlack'
            >
              <img src={link.img} alt={link.title} />
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
