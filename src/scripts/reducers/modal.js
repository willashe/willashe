import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

const initialState = {
  modalType: null,
};

export default function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case OPEN_MODAL:
      newState.modalType = action.modalType;
      break;
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }

  return newState;
}
