import Header from './components/Header';
import Main from './components/Main';
import { useNotification } from './hooks/useNotification';

function App() {
  const { notificationData, handleReadUnread, handleReadAll } =
    useNotification();

  return (
    <div className=' bg-white1 shadow-lg  rounded-lg   p-5 max-w-[710px] my-10 flex flex-col justify-center'>
      <Header
        notificationData={notificationData}
        handleReadAll={handleReadAll}
      />
      <Main
        notificationData={notificationData}
        handleReadUnread={handleReadUnread}
      />
    </div>
  );
}

export default App;
