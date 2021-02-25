import React, { useContext } from "react";
import Link from "next/link";
import authContext from "../context/auth/authContext";

const Sidebar = () => {
  const AuthContext = useContext(authContext);

  return (
    <div className="md:w-2/5 xl:w-1/5 bg-blue-600 min-h-screen">
      <div className="p-6">
        <p className="mt-2 text-white uppercase">Opciones</p>
        <nav className="mt-10">
          <Link href="/">
            <p className="mt-5 text-white block hover:bg-gray-500 hover:text-white-900">
              Gestión Médicos
            </p>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
