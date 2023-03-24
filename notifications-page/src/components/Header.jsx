function Header({ notificationData, handleReadAll }) {
  const quantity = notificationData.filter(
    (item) => item.unread === true
  ).length;

  return (
    <header className='mb-5 '>
      <nav className='flex justify-between '>
        <h1 className='font-semibold text-[17px] md:text-[20px]'>
          Notifications
          {quantity !== 0 && (
            <span className=' px-2 ml-2 rounded-md bg-blue1 text-white1 text-[15px] '>
              {quantity}
            </span>
          )}
        </h1>
        <button
          className='text-darkGrayishBlue hover:text-blue1 text-[12px] md:text-[16px]'
          onClick={handleReadAll}
        >
          Mark all as read
        </button>
      </nav>
    </header>
  );
}

export default Header;
