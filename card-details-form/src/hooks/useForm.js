import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleChange,
  };
};

export default useForm;
