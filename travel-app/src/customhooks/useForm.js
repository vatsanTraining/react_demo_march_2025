import { useState } from "react";

export const useForm = (callBack, initialState) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    callBack();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
