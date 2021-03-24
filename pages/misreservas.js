import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import MisReservas from '../components/Paciente/MisReservas';

const miReservas = () => {
  return (
    <>
      <Layout>
        <Sidebar />
        <MisReservas />
      </Layout>
    </>
  );
};

export default miReservas;
