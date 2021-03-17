import React, { useContext, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import GestionarDiasTrabajo from '../components/Admin/GestionarDiasTrabajo';
import Layout from '../components/Layout';
import authContext from '../context/auth/authContext';

const Index = () => {
  //extraer usuario autenticado storage

  const AuthContext = useContext(authContext);
  const { usuario, usuarioAutenticado, rol } = AuthContext;

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      usuarioAutenticado();
    }
  }, []);

  return (
    <>
      <Layout>
        {rol == 'admin' && usuario ? <GestionarDiasTrabajo /> : null}
      </Layout>
    </>
  );
};

export default Index;
