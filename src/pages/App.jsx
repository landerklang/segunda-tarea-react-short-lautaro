import { useState } from "react";
import { Login } from "../components/Login.jsx";

export const App = () => {
  const { user, setUser } = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <>
      <h1>hola {user}</h1>
      <button>logout</button>

      <Login onLogin={handleLogin} />
    </>
  );
};
