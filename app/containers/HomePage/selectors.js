import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('HomePage', initialState);

const makeSelectIsLoading = () =>
  createSelector(selectHome, homeState => homeState.get('isLoading'));

const makeSelectRealtyList = () =>
  createSelector(selectHome, homeState => homeState.get('realtyList'));

export { selectHome, makeSelectIsLoading, makeSelectRealtyList };
