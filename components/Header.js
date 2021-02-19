import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      <Link href="/">
        <a>LOGO</a>
      </Link>

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
    </header>
  );
};

export default Header;
