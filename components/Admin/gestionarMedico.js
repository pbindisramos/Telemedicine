import React, { useContext, useEffect } from 'react';
import Layout from '../Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import authContext from '../../context/auth/authContext';
import Alerta from '../Alerta';

const crearMedico = () => {
  //acceder al state
  const AuthContext = useContext(authContext);
  const { autenticado, mensaje, registrarUsuario } = AuthContext;

  //formulario validación
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      password: '',
      confirmarpassword: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('El nombre es obligatorio'),
      email: Yup.string()
        .email('El email no es válido')
        .required('El email es obligatorio'),
      password: Yup.string()
        .required('El password es obligatorio')
        .min(6, 'El password debe contener al menos 6 carácteres'),
      confirmarpassword: Yup.string().when('password', {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('password')],
          'Las contraseñas necesitan ser iguales'
        ),
      }),
    }),
    onSubmit: (valores) => {
      registrarUsuario(valores);
    },
  });

  return (
    <Layout>
      <div className='md:w-4/5 xl:w-3/5 mx-auto mb-32'>
        <h2 className='text-4xl font-sans font-bold text-white-800 text-center my-4'>
          Crear Medico
        </h2>
        {mensaje && <Alerta />}
        <div className='flex justify-center mt-5'>
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
                  placeholder='Nombre de Paciente'
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.nombre && formik.errors.nombre ? (
                  <div className='my-2 bg-gray-200 border-l-4 border-blue-500 text-red-600 p-4'>
                    <p className='font-bold'>Error</p>
                    <p>{formik.errors.nombre}</p>
                  </div>
                ) : null}
              </div>
              <div className='mb-4'>
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
                  htmlFor='password'
                >
                  Contraseña
                </label>
                <input
                  type='password'
                  className='shadow appereance-none border rounder w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='password'
                  placeholder='Password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className='my-2 bg-gray-200 border-l-4 border-blue-500 text-red-600 p-4'>
                    <p className='font-bold'>Error</p>
                    <p>{formik.errors.password}</p>
                  </div>
                ) : null}
              </div>
              <div className='mb-4'>
                <label
                  className='block text-black text-sm font-bold mb-2'
                  htmlFor='password'
                >
                  Confirmar contraseña
                </label>
                <input
                  type='password'
                  className='shadow appereance-none border rounder w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='confirmarpassword'
                  placeholder='confirmar Contraseña'
                  value={formik.values.confirmarpassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.confirmarpassword &&
                formik.errors.confirmarpassword ? (
                  <div className='my-2 bg-gray-200 border-l-4 border-blue-500 text-red-600 p-4'>
                    <p className='font-bold'>Error</p>
                    <p>{formik.errors.confirmarpassword}</p>
                  </div>
                ) : null}
              </div>
              <input
                type='submit'
                className='bg-blue-500 hover:bg-gay-900 w-full p-2 text-white uppercase font-bold rounded'
                value='Crear Cuenta'
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default crearMedico;
