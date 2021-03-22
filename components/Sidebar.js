import React, { useContext } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='md:w-2/5 xl:w-1/5 bg-blue-600  rounded-xl mt-2'>
      <div className='p-6'>
        <p className='mt-2 text-white uppercase text-2xl tracking-wide text-center font-bold'>
          MENU
        </p>
        <nav className='mt-10 group'>
          <Link href='/reservahora'>
            <a className='mt-5 text-xl text-white group-hover:text-gray-600'>
              Reserva de Horas
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
