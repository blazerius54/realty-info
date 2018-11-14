const myInit = { method: 'GET' };

export const requestRealtyList = cadNumber =>
  fetch(
    `https://rosreestr.ru/fir_lite_rest/api/gkn/fir_objects/${cadNumber}*`,
    myInit,
  )
    .then(response => {
      if (response.status !== 200) {
        return;
      }
      return response;
    })
    .then(response => response.json().then(realtyList => realtyList));
