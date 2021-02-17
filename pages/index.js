import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
const Index = () => {
  return (
    <Layout>
      <div>
        <Link href="/login">
          <a className="bg-blue-500 px-5 py-3 rounded-lg text-white uppercase mr-2">
            Iniciar Sesión
          </a>
        </Link>
        <Link href="/crearcuenta">
          <a className="bg-blue-500 px-5 py-3 rounded-lg text-white uppercase">
            Crear Cuenta
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Index;
