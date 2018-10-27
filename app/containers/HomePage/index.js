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

const Error = styled.div`
  color: red;
  width: 100%;
  margin-top: 5px;
  margin-left: 10px;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      realtyNumber: '',
      error: null,
    };
  }

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

  setRealtyNumber = e => {
    console.log(e.target.value);
    const regex = /^[0-9:\b]+$/;
    const { value } = e.target;
    if (regex.test(value)) {
      this.setState({
        realtyNumber: e.target.value,
      });
    }
  };

  handleSearchClick = () => {
    if (this.state.realtyNumber.length < 5) {
      this.setState({
        error: 'минимальная длина номера 5 символов',
      });
    } else {
      this.sendRequest();
    }
  };

  render() {
    const { error, realtyNumber } = this.state;
    return (
      <Wrapper>
        <h2>Введите кадастровый номер:</h2>
        <Options>
          <input
            placeholder="кадастровый номер"
            onChange={this.setRealtyNumber}
            value={realtyNumber}
          />
          <button onClick={() => this.handleSearchClick()}>поиск</button>
        </Options>
        {error && <Error> {error} </Error>}
      </Wrapper>
    );
  }
}
