import {
  TOGGLE_MODAL,
  CLOSE_MODAL,
  REQUEST_REALTY_INFO,
  REALTY_INFO_SUCCESS,
} from './consts';

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const realtyInfoRequest = () => ({
  type: REQUEST_REALTY_INFO,
});

export const realtyInfoSuccess = realtyInfo => ({
  type: REALTY_INFO_SUCCESS,
  realtyInfo,
});
