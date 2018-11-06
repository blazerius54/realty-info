import React from 'react';
import styled from 'styled-components';
import RealtyList from '../realtyList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const Options = styled.div`
  display: flex;
  margin-top: 50px;
  position: relative;

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
  /* margin-left: 10px; */
  /* display: flex; */
  /* justify-content: center; */
  position: absolute;
  top: 40px;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      realtyNumber: '',
      error: null,
      realtyList: [],
    };
  }

  sendRequest = () => {
    const myInit = { method: 'GET' };

    fetch(
      `https://rosreestr.ru/fir_lite_rest/api/gkn/fir_objects/${this.state.realtyNumber}*`,
      // `https://rosreestr.ru/fir_lite_rest/api/gkn/fir_objects/50:01*`,
      myInit,
    )
      .then(response => {
        if (response.status !== 200) {
          return;
        }
        return response;
      })
      .then(response =>
        response.json().then(realtyList => this.setState({ realtyList })),
      );
  };

  setRealtyNumber = e => {
    const regex = /^[0-9:\b]+$/;
    const { value } = e.target;
    if (regex.test(value) || value === '') {
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
      this.setState({
        error: null,
      });
    }
  };

  render() {
    const { error, realtyNumber, realtyList } = this.state;
    return (
      <Wrapper>
        <h2>Введите кадастровый номер:</h2>
        <Options>
          {error && <Error> {error} </Error>}
          <input
            placeholder="50:10"
            onChange={this.setRealtyNumber}
            value={realtyNumber}
          />
          <button onClick={() => this.handleSearchClick()}>поиск</button>
        </Options>
        {realtyList.length > 0 && <RealtyList realtyList={realtyList} />}
      </Wrapper>
    );
  }
}
