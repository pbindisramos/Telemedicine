import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import authContext from "../context/auth/authContext";

const Index = () => {
  //extraer usuario autenticado storage

  const AuthContext = useContext(authContext);
  const { usuario, usuarioAutenticado, autenticado } = AuthContext;

  //state rol
  const [rol, guardarRol] = useState({
    rol: "",
  });

  const crearRol = () => {
    guardarRol("admin");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      usuarioAutenticado();
      crearRol();
    }
  }, []);

  return (
    <Layout>
      <h1>Index</h1>
      {autenticado ? <h1>{`${rol}`}</h1> : null}
    </Layout>
  );
};

export default Index;
