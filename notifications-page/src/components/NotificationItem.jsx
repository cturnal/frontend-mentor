function NotificationItem({ notification, handleReadUnread }) {
  return (
    <>
      <div
        className={
          notification.unread
            ? 'bg-veryLightGrayishBlue flex mb-2 p-5 rounded-md shadow-sm  cursor-pointer '
            : 'bg-white1 flex mb-2  p-5  cursor-pointer'
        }
        onClick={() => handleReadUnread(notification)}
      >
        <div>
          <img
            src={notification.image}
            alt={notification.name}
            className='w-10  '
          />
        </div>

        <div className='flex flex-col ml-3 w-full text-[13px] md:text-[16px]'>
          <div className='flex items-center justify-between'>
            <div>
              <a
                href='#'
                className='text-veryDarkBlue font-[700] mr-1 hover:text-blue1'
              >
                {notification.name}
              </a>
              <span className='text-darkGrayishBlue mr-1'>
                {notification.activity}
              </span>
              <a
                href='#'
                className={
                  notification.target === 'Chess Club'
                    ? 'text-blue1 mr-1 font-[700] hover:text-blue1'
                    : 'text-darkGrayishBlue mr-1 font-[700] hover:text-blue1'
                }
              >
                {notification.target}
              </a>
              {notification.unread && (
                <div className='w-2 h-2 bg-red1 rounded-full inline-block'>
                  {' '}
                </div>
              )}
            </div>
            {notification.targetImage && (
              <img
                src={notification.targetImage}
                alt={notification.name}
                className='w-10 cursor-pointer'
              />
            )}
          </div>
          <span className='text-grayishBlue'>{notification.timestamp}</span>

          {notification.message && (
            <div className='hover:bg-lightGrayishBlue1 flex mb-2 p-5 rounded-md border-gray.50  border-[1px] text-darkGrayishBlue mt-2 cursor-pointer'>
              {notification.message}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NotificationItem;
