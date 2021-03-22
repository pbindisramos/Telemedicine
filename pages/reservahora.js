import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import FormDoctor from '../components/Paciente/FormDoctor';

const reservaHora = () => {
  return (
    <>
      <Layout>
        <Sidebar />
        <FormDoctor />
      </Layout>
    </>
  );
};

export default reservaHora;
