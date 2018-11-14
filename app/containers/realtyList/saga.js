import { put, takeLatest } from 'redux-saga/effects';
import { REQUEST_REALTY_INFO } from './consts';
import { realtyInfoSuccess } from './actions';

const sendRequest = objectCn => {
  const myInit = { method: 'GET' };

  return fetch(
    `https://rosreestr.ru/fir_lite_rest/api/gkn/fir_lite_object/${
      objectCn
    }`,
    myInit,
  )
    .then(response => {
      if (response.status !== 200) {
        return;
      }
      return response;
    })
    .then(response =>
      response.json().then(realtyInfo => {
        // const { dateCreated, name, objectDesc } = realtyInfo.objectData;
        // const type =
        //   realtyInfo.type === 'parcel' ? 'parcelData' : realtyInfo.type;
        // let realtyType = '';
        // if (name) {
        //   realtyType = name.match(/\d+/) ? objectDesc : name;
        // } else {
        //   realtyType = objectDesc;
        // }
        // this.setState({
        //   dateCreated,
        //   name: realtyType,
        //   encumbrancesExists: realtyInfo.objectData[type].encumbrancesExists,
        // });
        console.log(realtyInfo);
      }),
    );
};

function getRealtyInfo(objectCn) {
  return sendRequest(objectCn);
}

function* realtyInfoFlow(action) {
  const realtyInfo = yield getRealtyInfo(action.objectCn);
  console.log('asd');
  yield put(realtyInfoSuccess(realtyInfo));
}

export default function* realtySaga() {
  yield takeLatest(REQUEST_REALTY_INFO, realtyInfoFlow);
}
