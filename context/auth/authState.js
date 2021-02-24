import { Router, useRouter } from "next/router";
import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import {
  USUARIO_AUTENTICADO,
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  LIMPIAR_ALERTA,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types/index";

import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

const AuthState = ({ children }) => {
  const router = useRouter();
  //Definiedo state inicial
  const initialState = {
    token:
      typeof windows !== "undefined" ? localStorage.getItem("token") : null,
    autenticado: null,
    usuario: null,
    mensaje: null,
  };
  //Definendo F() del reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  //REGISTRAR NUEVOS USUARIOS
  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data.msg,
      });
    } catch (error) {
      dispatch({
        type: REGISTRO_ERROR,
        payload: error.response.data.msg,
      });
    }
    //LIMPIAR ALERTA
    setTimeout(() => {
      dispatch({
        type: LIMPIAR_ALERTA,
      });
    }, 3000);
  };

  //Autenticar Usuarios
  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/auth", datos);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data.token,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg,
      });
    }

    //LIMPIAR ALERTA
    setTimeout(() => {
      dispatch({
        type: LIMPIAR_ALERTA,
      });
    }, 3000);
  };

  //retorne usuario autenticado en base a JWT
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    } else {
      return;
    }
    try {
      const respuesta = await clienteAxios.get("/api/auth");
      if (respuesta.data.usuario) {
        dispatch({
          type: USUARIO_AUTENTICADO,
          payload: respuesta.data.usuario,
        });
      }
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg,
      });
    }
    //LIMPIAR ALERTA
    setTimeout(() => {
      dispatch({
        type: LIMPIAR_ALERTA,
      });
    }, 3000);
  };

  //cerrar la sesion
  const cerrarSesion = () => {
    router.push("/");
    dispatch({
      type: CERRAR_SESION,
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
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
