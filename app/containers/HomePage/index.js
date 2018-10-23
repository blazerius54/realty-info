import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const Options = styled.div`
  display: flex;
  margin-top: 50px;

  input {
    border-bottom: 2px solid #42a7f4;
    margin-right: 10px;
    text-align: center;
    font-size: 150%;

    &:focus {
      outline: none;
    }
  }

  button {
    background: #f4e841;
    padding: 10px;
  }
`;

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
      .then(response => response.json().then(data => data));
  };
  render() {
    return (
      <Wrapper>
        <h2>Введите кадастровый номер:</h2>
        <Options>
          <input placeholder="кадастровый номер" />
          <button onClick={() => this.sendRequest()}>поиск</button>
        </Options>
      </Wrapper>
    );
  }
}
