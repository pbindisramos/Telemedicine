import React from 'react';

const GestionarDiasTrabajo = () => {
  const dias = [
    'Lunes',
    'Martes',
    'Miecoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];
  const llenarHoras = () => {
    let horas = [];
    for (let i = 0; i < 11; i++) {
      horas.push(i);
    }
    return horas;
  };

  const horas = llenarHoras();
  console.log(horas);

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
                {dias.map((dia, index) => (
                  <tr className='border-b border-gray-200 hover:bg-gray-100'>
                    <td className='py-3 px-6 text-left whitespace-nowrap'>
                      <div className='flex items-center'>
                        <span key={index}>{`${dia}`}</span>
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
                              htmlFor='toggle'
                              className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
                            ></label>
                          </div>
                          <label
                            htmlFor='toggle'
                            className='text-xs text-gray-700'
                          ></label>
                        </div>
                      </div>
                    </td>
                    <td className='py-3 px-6 text-center'>
                      <div className='flex items-center justify-center'>
                        <select type='time' className='form-control mr-3'>
                          {horas.map((hora, index) => (
                            <option value='' key={index}>
                              {`${hora}`}:00 am
                            </option>
                          ))}
                        </select>
                        <select type='time' className='form-control'>
                          <option value=''>10:00 am</option>
                        </select>
                      </div>
                    </td>
                    <td className='py-3 px-6 text-center'>
                      <div className='flex items-center justify-center'>
                        <select type='time' className='form-control mr-3'>
                          <option value=''>08:00 am</option>
                        </select>
                        <select type='time' className='form-control'>
                          <option value=''>10:00 am</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionarDiasTrabajo;
