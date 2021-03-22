import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormDoctor = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('El email no es válido')
        .required('El email es obligatorio'),
      password: Yup.string().required('El password es obligatorio'),
    }),
    onSubmit: (valores) => {
      iniciarSesion(valores);
    },
  });
  return (
    <>
      <div className='md:w-3/5 xl:w-4/5 mx-auto p-6 '>
        <div className=' flex'>
          <div className='w-full max-w-lg'>
            <form
              className='bg-white rounded shadown-md px-8 pt-6 pb-8 mb-4'
              onSubmit={formik.handleSubmit}
            >
              <div className='mb-4'>
                <label
                  className='block text-black text-sm font-bold mb-2'
                  htmlFor='nombre'
                >
                  Nombre
                </label>
                <input
                  type='text'
                  className='shadow appereance-none border rounder w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='nombre'
                  placeholder='Nombre'
                  // value={formik.values.password}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                />
                <label
                  className='block text-black text-sm font-bold mb-2'
                  htmlFor='apellido'
                >
                  Apellido
                </label>
                <input
                  type='text'
                  className='shadow appereance-none border rounder w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='apellido'
                  placeholder='Apellido'
                  // value={formik.values.password}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                />
                <label
                  className='block text-black text-sm font-bold mb-2'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  type='email'
                  className='shadow appereance-none border rounder w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='email'
                  placeholder='Correo'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className='my-2 bg-gray-200 border-l-4 border-blue-500 text-red-600 p-4'>
                    <p className='font-bold'>Error</p>
                    <p>{formik.errors.email}</p>
                  </div>
                ) : null}
              </div>
              <div className='mb-4'>
                <label
                  className='block text-black text-sm font-bold mb-2'
                  htmlFor='number'
                >
                  Número de contacto
                </label>
                <input
                  type='text'
                  className='shadow appereance-none border rounder w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='numero'
                  placeholder='Número telefonico'
                  //   value={formik.values.password}
                  //   onChange={formik.handleChange}
                  //   onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className='my-2 bg-gray-200 border-l-4 border-blue-500 text-red-600 p-4'>
                    <p className='font-bold'>Error</p>
                    <p>{formik.errors.password}</p>
                  </div>
                ) : null}
              </div>
              <input
                type='submit'
                className='bg-blue-500 hover:bg-gay-900 w-full p-2 text-white uppercase font-bold rounded'
                value='Siguiente'
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormDoctor;
