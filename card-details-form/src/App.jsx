import Card from './components/Card';
import CardForm from './components/CardForm';
import useForm from './hooks/useForm';

function App() {
  const { values, handleChange, setValues } = useForm();
  return (
    <main className='h-[100vh] flex flex-col lg:flex-row  '>
      <Card values={values} />
      <CardForm
        values={values}
        setValues={setValues}
        handleChange={handleChange}
      />
    </main>
  );
}

export default App;
