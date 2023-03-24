import { useState } from 'react';
import data from '../assets/data';

export const useNotification = () => {
  const [notificationData, setNotificationData] = useState(data);

  const handleReadUnread = (notification) => {
    setNotificationData((prev) =>
      prev.map((item) =>
        notification.id === item.id ? { ...item, unread: !item.unread } : item
      )
    );
  };

  const handleReadAll = () => {
    setNotificationData(
      notificationData.map((item) =>
        item.unread ? { ...item, unread: false } : item
      )
    );
  };

  return {
    notificationData,
    handleReadUnread,
    handleReadAll,
  };
};
