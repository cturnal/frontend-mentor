import mark from './images/avatar-mark-webber.webp';
import angela from './images/avatar-angela-gray.webp';
import jacob from './images/avatar-jacob-thompson.webp';
import rizky from './images/avatar-rizky-hasanuddin.webp';
import kimberly from './images/avatar-kimberly-smith.webp';
import nathan from './images/avatar-nathan-peterson.webp';
import anna from './images/avatar-anna-kim.webp';
import chess from './images/image-chess.webp';
import { v4 as uuidv4 } from 'uuid';

const data = [
  {
    id: uuidv4(),
    image: mark,
    name: 'Mark Webber',
    activity: 'reacted to your recent post',
    target: 'My first tournament today!',
    timestamp: '1m ago',
    message: '',
    unread: true,
  },
  {
    id: uuidv4(),

    image: angela,
    name: 'Angela Gray',
    activity: 'followed you',
    target: '',
    timestamp: ' 5m ago',
    message: '',
    unread: true,
  },
  {
    id: uuidv4(),

    image: jacob,
    name: 'Jacob Thompson',
    activity: 'has joined your group',
    target: 'Chess Club',
    timestamp: '1 day ago',
    message: '',
    unread: true,
  },
  {
    id: uuidv4(),

    image: rizky,
    name: 'Rizky Hasanuddin',
    activity: 'sent you a private message',
    target: '',
    timestamp: '5 days ago',
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    unread: false,
  },
  {
    id: uuidv4(),

    image: kimberly,
    name: 'Kimberly Smith',
    activity: 'commented on your picture',
    target: '',
    timestamp: '1 week ago',
    message: '',
    unread: false,
    targetImage: chess,
  },
  {
    id: uuidv4(),

    image: nathan,
    name: 'Nathan Peterson',
    activity: 'reacted to your recent post',
    target: '5 end-game strategies to increase your win rate',
    timestamp: '2 weeks ago',
    message: '',
    unread: false,
  },
  {
    id: uuidv4(),

    image: anna,
    name: 'Anna Kim',
    activity: ' left the group',
    target: 'Chess Club',
    timestamp: '2 weeks ago',
    message: '',
    unread: false,
  },
];

export default data;
