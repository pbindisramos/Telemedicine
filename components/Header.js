import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import authContext from '../context/auth/authContext';

const Header = () => {
  const AuthContext = useContext(authContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = AuthContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);
  return (
    <header className=' bg-gray-200 py-8 flex flex-col md:flex-row items-center justify-between h-32 rounded-full'>
      <Link href='/'>
        <a>
          <img
            className=' object-contain object-left-top w-64'
            src='logo.png'
          />
        </a>
      </Link>

      <div>
        {usuario ? (
          <div className='flex items-center'>
            <p className='mr-2 font-bold text-transform: capitalize'>
              Hola {usuario.nombre}
            </p>
            <button
              type='button'
              className='bg-blue-500 px-5 py-3 rounded-lg text-white uppercase mr-3'
              onClick={() => cerrarSesion()}
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <>
            <Link href='/login'>
              <a className='bg-blue-500 px-5 py-3 rounded-lg text-white uppercase mr-2'>
                Iniciar Sesión
              </a>
            </Link>
            <Link href='/crearcuenta'>
              <a className='bg-blue-500 px-5 py-3 rounded-lg text-white uppercase'>
                Crear Cuenta
              </a>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
