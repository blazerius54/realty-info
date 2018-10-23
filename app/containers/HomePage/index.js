import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  sendRequest = () => {
    const myInit = { method: 'GET' };

    fetch(
      'https://rosreestr.ru/fir_lite_rest/api/gkn/fir_objects/50:01*',
      myInit,
    )
      .then(response => {
        if (response.status !== 200) {
          return;
        }
        return response;
      })
      .then(response =>
        response.json().then(data => {
          console.log(data);
          return data;
        }),
      );
  };
  render() {
    return <button onClick={() => this.sendRequest()}>send request</button>;
  }
}
