import Content from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <div className='flex flex-col justify-center items-center  min-w-[200px] mx-2'>
      <Header />
      <Content />
    </div>
  );
}

export default App;
