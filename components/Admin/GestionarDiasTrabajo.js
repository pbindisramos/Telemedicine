import React, { useState } from 'react';

const GestionarDiasTrabajo = () => {
  const [horastrabajo, guardarHoras] = useState({
    activo: '',
    manana_comienzo: '',
    manana_fin: '',
    tarde_comienzo: '',
    tarde_fin: '',
  });
  const dias = [
    'Lunes',
    'Martes',
    'Miecoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];
  const llenarHoraPM = () => {
    let horasPM = [];
    for (let i = 13; i < 23; i++) {
      horasPM.push(i);
    }
    return horasPM;
  };
  const llenarHoraAM = () => {
    let horasAM = [];
    for (let i = 5; i < 13; i++) {
      horasAM.push(i);
    }
    return horasAM;
  };

  const horasPM = llenarHoraPM();
  const horasAM = llenarHoraAM();

  const onChange = (e) => {
    guardarHoras({
      ...horastrabajo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form>
        <div className='overflow-x-auto'>
          <div className='flex justify-end'>
            <input
              type='submit'
              className='bg-blue-500 hover:bg-gay-900 w-40 p-2 text-white  font-bold rounded mt-5'
              value='Guardar cambios'
            />
          </div>
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
                        <td className='py-3 px-6'>
                          <div className='flex items-center'>
                            <div className='mr-2'>
                              <div className='form-check form-switch'>
                                <input
                                  className='form-check-input '
                                  type='checkbox'
                                  id='flexSwitchCheckDefault'
                                  name='activo'
                                  onChange={onChange}
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor='flexSwitchCheckDefault'
                                ></label>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='py-3 px-6 text-center'>
                          <div className='flex items-center justify-center row-auto'>
                            <div className='col-auto mr-3'>
                              <select
                                type='time'
                                className='form-control'
                                name='manana_comienzo'
                                onChange={onChange}
                              >
                                {horasAM.map((horaam, index) => {
                                  return (
                                    <>
                                      <option
                                        value={`${horaam}` + ':00 am'}
                                        key={index}
                                      >
                                        {`${horaam}`}:00 am
                                      </option>
                                      <option
                                        value='{`${horaam}`}:30'
                                        key={index}
                                      >
                                        {`${horaam}`}:30 am
                                      </option>
                                    </>
                                  );
                                })}
                                <option value='13:00 am'>13:00 am</option>
                              </select>
                            </div>
                            <div className='col-auto'>
                              <select
                                type='time'
                                className='form-control'
                                name='manana_fin'
                                onChange={onChange}
                              >
                                {horasAM.map((horaam, index) => {
                                  return (
                                    <>
                                      <option
                                        value='{`${horaam}`}:00'
                                        key={index}
                                      >
                                        {`${horaam}`}:00 am
                                      </option>
                                      <option
                                        value='{`${horaam}`}:30'
                                        key={index}
                                      >
                                        {`${horaam}`}:30 am
                                      </option>
                                    </>
                                  );
                                })}
                                <option value=''>13:00 am</option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td className='py-3 px-6 text-center'>
                          <div className='flex items-center justify-center'>
                            <select
                              type='time'
                              className='form-control mr-3'
                              name='tarde_comienzo'
                              onChange={onChange}
                            >
                              {horasPM.map((horapm, index) => {
                                return (
                                  <>
                                    <option
                                      value='{`${horapm}`}:00'
                                      key={index}
                                    >
                                      {`${horapm}`}:00 pm
                                    </option>
                                    <option
                                      value='{`${horapm}`}:30'
                                      key={index}
                                    >
                                      {`${horapm}`}:30 pm
                                    </option>
                                  </>
                                );
                              })}
                              <option value='23:00 am'>23:00 am</option>
                            </select>
                            <select
                              type='time'
                              className='form-control'
                              name='tarde_fin'
                              onChange={onChange}
                            >
                              {horasPM.map((horapm, index) => {
                                return (
                                  <>
                                    <option
                                      value='{`${horapm}`}:00'
                                      key={index}
                                    >
                                      {`${horapm}`}:00 pm
                                    </option>
                                    <option
                                      value='{`${horapm}`}:30'
                                      key={index}
                                    >
                                      {`${horapm}`}:30 pm
                                    </option>
                                  </>
                                );
                              })}
                              <option value=''>23:00 am</option>
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
      </form>
    </>
  );
};

export default GestionarDiasTrabajo;
