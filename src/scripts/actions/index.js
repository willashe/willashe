export const OPEN_MODAL = 'open_modal';
export const CLOSE_MODAL = 'close_modal';

export function openModal(modalType, modalTitle, modalText) {
  return {
    type: OPEN_MODAL,
    modalType,
    modalTitle,
    modalText,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}
