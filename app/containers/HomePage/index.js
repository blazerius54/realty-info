import React from 'react';
import RealtyList from '../realtyList';
import { Wrapper, Options, Error } from './styled';
import Loader from '../../components/loader';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import { makeSelectIsLoading, makeSelectRealtyList } from './selectors';
import { requestRealtyList } from './actions';
/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      realtyNumber: '50:10',
      error: null,
      realtyList: [],
    };
  }

  // sendRequest = () => {
  //   const myInit = { method: 'GET' };

  //   fetch(
  //     `https://rosreestr.ru/fir_lite_rest/api/gkn/fir_objects/${
  //       this.state.realtyNumber
  //     }*`,
  //     // `https://rosreestr.ru/fir_lite_rest/api/gkn/fir_objects/50:01*`,
  //     myInit,
  //   )
  //     .then(response => {
  //       if (response.status !== 200) {
  //         return;
  //       }
  //       return response;
  //     })
  //     .then(response =>
  //       response.json().then(realtyList => this.setState({ realtyList })),
  //     );
  // };

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
      this.props.requestRealtyList(this.state.realtyNumber);
      this.setState({
        error: null,
      });
    }
  };

  render() {
    const { error, realtyNumber } = this.state;
    const { realtyList, isLoading } = this.props;
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
        {isLoading && <Loader />}
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  realtyList: makeSelectRealtyList(),
});

const withConnect = connect(
  mapStateToProps,
  { requestRealtyList },
);

const withReducer = injectReducer({ key: 'HomePage', reducer });
const withSaga = injectSaga({ key: 'LoHomePagegin', saga });

// Login.propTypes = {
// };

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
