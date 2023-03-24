import NotificationItem from './NotificationItem';

function Main({ notificationData, handleReadUnread }) {
  return (
    <main>
      {notificationData.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          handleReadUnread={handleReadUnread}
        />
      ))}
    </main>
  );
}

export default Main;
