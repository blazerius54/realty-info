import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import RealtyItem from '../../components/realtyItem';
import reducer from './reducer';
import saga from './saga';
import { toggleModal, closeModal, realtyInfoRequest } from './actions';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { makeSelectShowModal } from './selectors';
import RealtyModal from '../../components/realtyModal';
import { ContentWrapper, RealtyListTable } from './styled';

/* eslint-disable react/prefer-stateless-function */
class RealtyList extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      activeObjectCn: null,
    };
  }

  handleObjectCnClick = objectCn => {
    this.setState({
      activeObjectCn: objectCn,
    });
    this.props.toggleModal();
  };

  render() {
    const { showModal, realtyList, toggleModal, closeModal, realtyInfoRequest } = this.props;
    const { activeObjectCn } = this.state;

    return (
      <ContentWrapper>
        {showModal && (
          <RealtyModal
            activeObjectCn={activeObjectCn}
            toggleModal={toggleModal}
            closeModal={closeModal}
            realtyInfoRequest={realtyInfoRequest}
        />)}
        <RealtyListTable>
          <tbody>
            <tr>
              <th>#</th>
              <th>Кад. номер</th>
              <th>Тип</th>
              <th>Адрес</th>
            </tr>
            {realtyList.map((item, index) => (
              <RealtyItem
                key={item.objectCn}
                index={index}
                objectCn={item.objectCn}
                objectType={item.objectType}
                addressNotes={item.addressNotes}
                handleObjectCnClick={this.handleObjectCnClick}
              />
            ))}
          </tbody>
        </RealtyListTable>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  showModal: makeSelectShowModal(),
});

const withConnect = connect(
  mapStateToProps,
  { toggleModal, closeModal, realtyInfoRequest },
);

const withReducer = injectReducer({ key: 'RealtyList', reducer });
const withSaga = injectSaga({ key: 'RealtyList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RealtyList);
