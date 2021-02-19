import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import { USUARIO_AUTENTICADO } from "../../types/index";

import clienteAxios from "../../config/axios";

const AuthState = ({ children }) => {
  //Definiedo state inicial
  const initialState = {
    token: "",
    autenticado: null,
    usuario: null,
    mensaje: null,
  };
  //Definendo F() del reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  //REGISTRAR NUEVOS USUARIOS
  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/pacientes", datos);
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  //USUARIO AUTENTICADO
  const usuarioAutenticado = (nombre) => {
    dispatch({
      type: USUARIO_AUTENTICADO,
      payload: nombre,
    });
  };
  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario,
        usuarioAutenticado,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
