import React, { useContext, useEffect, useState } from "react";
//import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import authContext from "../context/auth/authContext";

const Index = () => {
  //extraer usuario autenticado storage

  const AuthContext = useContext(authContext);
  const { usuario, usuarioAutenticado, autenticado } = AuthContext;

  //state rol
  const [rol, guardarRol] = useState({
    rol: null,
  });

  const crearRol = (usuario) => {
    if (usuario) {
      guardarRol(usuario.role[0].name);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      usuarioAutenticado();
      crearRol(usuario);
    }
  }, [usuario]);

  return (
    <>
      <Layout>
        <h1>hola</h1>
      </Layout>
    </>
  );
};

export default Index;
