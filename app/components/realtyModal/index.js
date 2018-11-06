import React from 'react';
import styled from 'styled-components';
import close from '../../images/close.png';
const ModalWrapper = styled.div`
  /* position: absolute; */
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const ModalWindow = styled.div`
  position: fixed;
  background: white;
  z-index: 2;
  padding: 20px 35px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 355px;
  header {
    margin-bottom: 18px;
    position: relative;

    h3 {
      margin: 0;
    }

    button {
      position: absolute;
      right: -56px;
      top: -15px;

      img {
        cursor: pointer;
      }

      &:focus {
        outline: none;
      }
    }
  }

  main {
    width: 100%;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: gray;
  opacity: 0.5;
  z-index: 1;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  margin-bottom: 10px;

  p {
    margin: 0;

    &:last-child {
      text-transform: lowercase;
    }
  }
`;
/* eslint-disable react/prefer-stateless-function */
export default class RealtyModal extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      dateCreated: null,
      name: null,
      encumbrancesExists: null,
    };
  }

  componentDidMount() {
    const myInit = { method: 'GET' };

    fetch(
      `https://rosreestr.ru/fir_lite_rest/api/gkn/fir_lite_object/${
        this.props.activeObjectCn
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
          const { dateCreated, name, objectDesc } = realtyInfo.objectData;
          const type =
            realtyInfo.type === 'parcel' ? 'parcelData' : realtyInfo.type;
          let realtyType = '';
          if (name) {
            realtyType = name.match(/\d+/) ? objectDesc : name;
          } else {
            realtyType = objectDesc;
          }
          this.setState({
            dateCreated,
            name: realtyType,
            encumbrancesExists: realtyInfo.objectData[type].encumbrancesExists,
          });
        }),
      );
  }

  componentWillUnmount() {
    this.props.closeModal();
  }

  closeModal = () => {
    this.setState({
      dateCreated: null,
      name: null,
      encumbrancesExists: null,
    });
    this.props.toggleModal();
  };

  render() {
    const { dateCreated, name, encumbrancesExists } = this.state;
    return (
      <ModalWrapper>
        <ModalBackground onClick={() => this.closeModal()} />
        <ModalWindow>
          <header>
            <h3>Информация об объекте</h3>
            <button onClick={() => this.closeModal()}>
              <img src={close} alt="close" />
            </button>
          </header>
          <main>
            <ContentRow>
              <p>Дата записи:</p>
              {dateCreated && <p>{dateCreated}</p>}
            </ContentRow>
            <ContentRow>
              <p>Наименование:</p>
              {name && <p>{name}</p>}
            </ContentRow>
            {encumbrancesExists !== undefined && (
              <ContentRow>
                <p>Обременения:</p>
                <p>{encumbrancesExists ? 'Есть' : 'Отсутствуют'}</p>
              </ContentRow>
            )}
          </main>
        </ModalWindow>
      </ModalWrapper>
    );
  }
}
