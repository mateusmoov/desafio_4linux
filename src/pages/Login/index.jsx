import React, { useState, useContext } from "react";
import { InputAndLabel } from "../../components";
import { Context } from "../../Context/AuthContext";
import "./styles.css";

const Login = () => {
  const { handleLogin, error, loading } = useContext(Context);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(name, password);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <InputAndLabel
          name="name"
          label="Usuário"
          type="text"
          placeHolder="Usuário"
          onChange={(evt) => setName(evt.target.value)}
        />
        <InputAndLabel
          name="password"
          label="Senha"
          type="password"
          placeHolder="Senha"
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <span className="error-message">{error}</span>
        <button type="submit" className="button">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
