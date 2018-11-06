import { TOGGLE_MODAL, CLOSE_MODAL } from './consts';

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
