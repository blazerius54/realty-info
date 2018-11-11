import { put, takeLatest } from 'redux-saga/effects';
import { REQUEST_REALTY_LIST } from './consts';
import { realtyListSuccess } from './actions';

const sendRequest = cadNumber => {
  const myInit = { method: 'GET' };

  return fetch(
    `https://rosreestr.ru/fir_lite_rest/api/gkn/fir_objects/${cadNumber}*`,
    myInit,
  )
    .then(response => {
      if (response.status !== 200) {
        return;
      }
      return response;
    })
    .then(response =>
      response.json().then(realtyList => realtyList),
    );
};

function getRealtyList(cadNumber) {
  return sendRequest(cadNumber);
}

function* realtyListFlow(action) {
  const lists = yield getRealtyList(action.cadNumber);
  yield put(realtyListSuccess(lists));
}

export default function* realtySaga() {
  yield takeLatest(REQUEST_REALTY_LIST, realtyListFlow);
}
