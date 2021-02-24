import { FORMULARIO_MEDICO } from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_MEDICO:
      return {
        ...state,
        formulariomedico: true,
      };
    default:
      return state;
  }
};
