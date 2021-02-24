import { Router, useRouter } from "next/router";
import React, { useReducer } from "react";
import doctorContext from "./doctorContext";
import doctorReducer from "./doctorReducer";
import {} from "../../types/index";

import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

const DoctorState = ({ children }) => {
  const router = useRouter();
  //Definiedo state inicial
  const initialState = {
    doctores: [],
    formulariomedico: false,
    errorformulariomedico: false,
    doctor: null,
    mensaje: null,
  };
  //Definendo F() del reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  //Mostrar formulario de crear medico
  const mostrarFormulario = () => {
    dispatch({
      FORMULARIO_MEDICO,
    });
  };

  //Obtener Médicos
  const obtenerMedicos = async () => {
    try {
      //const resultado = await clienteAxios.get("/api/medicos");
    } catch (error) {}
  };

  return (
    <doctorContext.Provider
      value={{
        doctores: state.doctores,
        formulariomedico: state.formulariomedico,
        errorformulariomedico: state.errorformulariomedico,
        doctor: state.doctor,
        mensaje: state.mensaje,
        mostrarFormulario,
        obtenerMedicos,
      }}
    >
      {children}
    </doctorContext.Provider>
  );
};

export default DoctorState;
