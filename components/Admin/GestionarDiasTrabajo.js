import React from 'react';

const dias = [
  'Lunes',
  'Martes',
  'Miecoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
];

const GestionarDiasTrabajo = () => {
  return (
    <div className='overflow-x-auto'>
      <div className='min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden'>
        <div className='w-full lg:w-5/6'>
          <div className='bg-white shadow-md rounded my-6'>
            <table className='min-w-max w-full table-auto'>
              <thead>
                <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                  <th className='py-3 px-6 text-left'>Día</th>
                  <th className='py-3 px-6 text-left'>Activo</th>
                  <th className='py-3 px-6 text-center'>Turno Mañana</th>
                  <th className='py-3 px-6 text-center'>Turno Tarde</th>
                </tr>
              </thead>
              <tbody className='text-gray-600 text-sm font-light'>
                <tr className='border-b border-gray-200 hover:bg-gray-100'>
                  <td className='py-3 px-6 text-left whitespace-nowrap'>
                    <div className='flex items-center'>
                      <span>Lunes</span>
                    </div>
                  </td>
                  <td className='py-3 px-6 text-left'>
                    <div className='flex items-center'>
                      <div className='mr-2'>
                        <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
                          <input
                            type='checkbox'
                            name='toggle'
                            id='toggle'
                            className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
                          />
                          <label
                            for='toggle'
                            className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
                          ></label>
                        </div>
                        <label
                          for='toggle'
                          className='text-xs text-gray-700'
                        ></label>
                      </div>
                    </div>
                  </td>
                  <td className='py-3 px-6 text-center'>
                    <div className='flex items-center justify-center'></div>
                  </td>
                  <td className='py-3 px-6 text-center'>
                    <span className='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'>
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionarDiasTrabajo;
