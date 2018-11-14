import React from 'react';
import close from '../../images/close.png';
import {
  ModalWrapper,
  ModalWindow,
  ModalBackground,
  ContentRow,
} from './styled';

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
    this.props.realtyInfoRequest(this.props.activeObjectCn);
    // const myInit = { method: 'GET' };

    // fetch(
    //   `https://rosreestr.ru/fir_lite_rest/api/gkn/fir_lite_object/${
    //     this.props.activeObjectCn
    //   }`,
    //   myInit,
    // )
    //   .then(response => {
    //     if (response.status !== 200) {
    //       return;
    //     }
    //     return response;
    //   })
    //   .then(response =>
    //     response.json().then(realtyInfo => {
    //       const { dateCreated, name, objectDesc } = realtyInfo.objectData;
    //       const type =
    //         realtyInfo.type === 'parcel' ? 'parcelData' : realtyInfo.type;
    //       let realtyType = '';
    //       if (name) {
    //         realtyType = name.match(/\d+/) ? objectDesc : name;
    //       } else {
    //         realtyType = objectDesc;
    //       }
    //       this.setState({
    //         dateCreated,
    //         name: realtyType,
    //         encumbrancesExists: realtyInfo.objectData[type].encumbrancesExists,
    //       });
    //     }),
    //   );
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
