import { useForm } from "../hook/useForm.js";

export const Login = () => {
  const { formulario, setformulario, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });

  return (
    <div>
      <input
        type="text"
        name="username"
        value={formulario.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={formulario.password}
        onChange={handleChange}
      />
      <button onClick={() => handleReset()}>reset</button>
    </div>
  );
};
