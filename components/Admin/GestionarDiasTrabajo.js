import React, { useState } from 'react';
import clienteAxios from '../../config/axios';

const GestionarDiasTrabajo = () => {
  const [diastrabajo, guardarDiasTrabajo] = useState([]);
  const [days, setDays] = useState({
    Lunes: [
      {
        activo: '',
        manana_comienzo: '',
        manana_fin: '',
        tarde_comienzo: '',
        tarde_fin: '',
      },
    ],
    Martes: [
      {
        activo: '',
        manana_comienzo: '',
        manana_fin: '',
        tarde_comienzo: '',
        tarde_fin: '',
      },
    ],
    Miercoles: [
      {
        activo: '',
        manana_comienzo: '',
        manana_fin: '',
        tarde_comienzo: '',
        tarde_fin: '',
      },
    ],
    Jueves: [
      {
        activo: '',
        manana_comienzo: '',
        manana_fin: '',
        tarde_comienzo: '',
        tarde_fin: '',
      },
    ],
    Viernes: [
      {
        activo: '',
        manana_comienzo: '',
        manana_fin: '',
        tarde_comienzo: '',
        tarde_fin: '',
      },
    ],
    Sábado: [
      {
        activo: '',
        manana_comienzo: '',
        manana_fin: '',
        tarde_comienzo: '',
        tarde_fin: '',
      },
    ],
    Domingo: [
      {
        activo: '',
        manana_comienzo: '',
        manana_fin: '',
        tarde_comienzo: '',
        tarde_fin: '',
      },
    ],
  });

  const [timemorning, setTimemorning] = useState([
    { Id: '05:00', value: '05:00' },
    { Id: '05:30', value: '05:30' },
    { Id: '06:00', value: '06:00' },
    { Id: '06:30', value: '06:30' },
    { Id: '07:00', value: '07:00' },
    { Id: '07:30', value: '07:30' },
    { Id: '08:00', value: '08:00' },
    { Id: '08:30', value: '08:30' },
    { Id: '09:00', value: '09:00' },
    { Id: '09:30', value: '09:30' },
    { Id: '10:00', value: '10:00' },
    { Id: '10:30', value: '10:30' },
    { Id: '11:00', value: '11:00' },
    { Id: '11:30', value: '11:30' },
    { Id: '12:00', value: '12:00' },
  ]);
  let timeListMorning =
    timemorning.length > 0 &&
    timemorning.map((item, i) => {
      return (
        <>
          <option key={item.Id} value={item.id}>
            {item.value}
          </option>
        </>
      );
    });

  const [timeafternoon, setTimeafternoon] = useState([
    { Id: '12:30', value: '12:30' },
    { Id: '13:00', value: '13:00' },
    { Id: '13:30', value: '13:30' },
    { Id: '14:00', value: '14:00' },
    { Id: '14:30', value: '14:30' },
    { Id: '15:00', value: '15:00' },
    { Id: '15:30', value: '15:30' },
    { Id: '16:00', value: '16:00' },
    { Id: '16:30', value: '16:30' },
    { Id: '17:00', value: '17:00' },
    { Id: '17:30', value: '17:30' },
    { Id: '18:00', value: '18:00' },
    { Id: '18:30', value: '18:30' },
    { Id: '19:00', value: '19:00' },
    { Id: '19:30', value: '19:30' },
    { Id: '20:00', value: '20:00' },
    { Id: '20:30', value: '20:30' },
    { Id: '21:00', value: '21:00' },
    { Id: '21:30', value: '21:30' },
    { Id: '22:00', value: '22:00' },
    { Id: '22:30', value: '22:30' },
    { Id: '23:00', value: '23:00' },
    { Id: '23:30', value: '23:30' },
    { Id: '24:00', value: '24:00' },
  ]);
  let timeListAfternoon =
    timeafternoon.length > 0 &&
    timeafternoon.map((item, i) => {
      return (
        <>
          <option key={item.Id} value={item.id}>
            {item.value}
          </option>
        </>
      );
    });

  const handleInputChangeForDay = (e, day, index) => {
    const { name, value } = e.target;
    const list = [...days[day]];
    list[index][name] = value;

    setDays((days) => ({
      ...days,
      [day]: list,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearHoras({
      days,
    });
  };

  const crearHoras = (days) => {
    guardarDiasTrabajo([...diastrabajo, days]);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
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
                  {Object.entries(days).map(([dayKey, day]) => {
                    return day.map((x, i) => {
                      return (
                        <>
                          <tbody className='text-gray-600 text-sm font-light'>
                            <tr className='border-b border-gray-200 hover:bg-gray-100'>
                              <td className='py-3 px-6 text-left whitespace-nowrap'>
                                <div className='flex items-center'>
                                  <span>{dayKey}</span>
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
                                      value={x.manana_comienzo}
                                      onChange={(e) =>
                                        handleInputChangeForDay(e, dayKey, i)
                                      }
                                    >
                                      {timeListMorning}
                                    </select>
                                  </div>
                                  <div className='col-auto'>
                                    <select
                                      type='time'
                                      className='form-control'
                                      name='manana_fin'
                                      value={x.manana_fin}
                                      onChange={(e) =>
                                        handleInputChangeForDay(e, dayKey, i)
                                      }
                                    >
                                      {timeListMorning}
                                    </select>
                                  </div>
                                </div>
                              </td>
                              <td className='py-3 px-6 text-center'>
                                <div className='flex items-center justify-center row-auto'>
                                  <div className='col-auto mr-3'>
                                    <select
                                      type='time'
                                      className='form-control'
                                      name='tarde_comienzo'
                                      value={x.tarde_comienzo}
                                      onChange={(e) =>
                                        handleInputChangeForDay(e, dayKey, i)
                                      }
                                    >
                                      {timeListAfternoon}
                                    </select>
                                  </div>
                                  <div className='col-auto'>
                                    <select
                                      type='time'
                                      className='form-control'
                                      name='tarde_fin'
                                      value={x.tarde_fin}
                                      onChange={(e) =>
                                        handleInputChangeForDay(e, dayKey, i)
                                      }
                                    >
                                      {timeListAfternoon}
                                    </select>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </>
                      );
                    });
                  })}
                  ;
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
