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
                        <div className='form-check form-switch'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            id='flexSwitchCheckDefault'
                          />
                          <label
                            className='form-check-label'
                            for='flexSwitchCheckDefault'
                          ></label>
                        </div>
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
