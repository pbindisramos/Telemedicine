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

  return <doctorContext.Provider>{children}</doctorContext.Provider>;
};

export default DoctorState;
