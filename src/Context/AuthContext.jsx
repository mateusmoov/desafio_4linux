import React, { createContext, useEffect, useState } from "react";
import api from "../api";
import history from "../history";

const Context = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
      history.push("/");
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  const handleLogin = (name, password) => {
    api
      .post("/login", {
        name,
        password,
      })
      .then((response) => {
        const data = response?.data?.token;
        localStorage.setItem("token", data);
        api.defaults.headers.Autorization = `Bearer ${data}`;
        setAuthenticated(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Context.Provider value={{ authenticated, handleLogin }}>
      {children}
    </Context.Provider>
  );
};

export { Context, AuthProvider };
