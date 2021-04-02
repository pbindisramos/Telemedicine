import React from 'react';

const misReservas = () => {
  return (
    <>
      <div className='md:w-3/5 xl:w-4/5 mx-auto p-6 flex'>
        <div className='w-full'>
          <form className='bg-white rounded shadown-md px-8 pt-6 pb-8 mb-4'>
            <div className='w-full lg:w-6/6'>
              <div className='bg-white shadow-md rounded my-6'>
                <table className='min-w-max w-full table-auto'>
                  <thead>
                    <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                      <th className='py-3 px-6 text-left'>Fecha</th>
                      <th className='py-3 px-6 text-left'>Hora</th>
                      <th className='py-3 px-6 text-center'>Doctor</th>
                      <th className='py-3 px-6 text-center'>Especialidad</th>
                      <th className='py-3 px-6 text-center'>Estado</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-600 text-sm font-light'>
                    <tr className='border-b border-gray-200 hover:bg-gray-100'>
                      <td className='py-3 px-6 text-left whitespace-nowrap'>
                        <div className='flex items-center'>
                          <span>12/2/2021</span>
                        </div>
                      </td>
                      <td className='py-3 px-6'>
                        <div className='flex items-center'>
                          <span>12:30</span>
                        </div>
                      </td>
                      <td className='py-3 px-6 text-center'>
                        <div className='flex items-center justify-center'>
                          <span>Tomas Saa</span>
                        </div>
                      </td>
                      <td className='py-3 px-6 text-center'>
                        <div className='flex items-center justify-center'>
                          <span>Neurocirujano</span>
                        </div>
                      </td>
                      <td className='py-3 px-6 text-center'>
                        <div className='flex items-center justify-center'>
                          <button
                            type='button'
                            className='bg-blue-500 px-5 py-3 rounded-lg text-white'
                          >
                            <span className='mr-1'>Pagar</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default misReservas;
