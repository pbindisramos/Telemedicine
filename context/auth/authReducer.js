import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  USUARIO_AUTENTICADO,
  LIMPIAR_ALERTA,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from '../../types/index';

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
    case REGISTRO_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        mensaje: action.payload,
      };
    case LOGIN_EXITOSO:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        autenticado: true,
      };
    case LIMPIAR_ALERTA:
      return {
        ...state,
        mensaje: null,
      };
    case USUARIO_AUTENTICADO:
      return {
        ...state,
        usuario: action.payload,
        autenticado: true,
        rol: action.payload2,
      };
    case CERRAR_SESION:
      localStorage.removeItem('token');
      return {
        ...state,
        usuario: null,
        token: null,
        autenticado: null,
        rol: null,
      };
    default:
      return state;
  }
};
