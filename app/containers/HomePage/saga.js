import { put, takeLatest } from 'redux-saga/effects';
import { REQUEST_REALTY_LIST } from './consts';
import { realtyListSuccess } from './actions';
import { requestRealtyList } from '../../network';

const sendRequest = cadNumber => requestRealtyList(cadNumber);

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
