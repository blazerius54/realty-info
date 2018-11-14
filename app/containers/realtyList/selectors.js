import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('RealtyList', initialState);

const makeSelectShowModal = () =>
  createSelector(selectHome, homeState => homeState.get('showModal'));

const makeSelectIsLoading = () =>
  createSelector(selectHome, homeState => homeState.get('isLoading'));

export { selectHome, makeSelectShowModal, makeSelectIsLoading };
