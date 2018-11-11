import {
  REQUEST_REALTY_LIST,
  REALTY_LIST_SUCCESS,
  REALTY_LIST_ERROR,
} from './consts';

export const requestRealtyList = cadNumber => ({
  type: REQUEST_REALTY_LIST,
  cadNumber,
});

export const realtyListSuccess = realtyList => ({
  type: REALTY_LIST_SUCCESS,
  realtyList,
});

export const realtyListError = error => ({
  type: REALTY_LIST_ERROR,
  error,
});
