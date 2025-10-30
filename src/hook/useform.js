import { useState } from "react";

export const useForm = (inicialValue) => {
  const [formulario, setformulario] = useState(inicialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setformulario({ ...formulario, [name]: value });
  };
  const handleReset = () => {
    console.log({ ...formulario });
    setformulario(inicialValue);
  };

  return { formulario, setformulario, handleChange, handleReset };
};
