import { fromJS } from 'immutable';
import {
  REQUEST_REALTY_LIST,
  REALTY_LIST_SUCCESS,
  REALTY_LIST_ERROR,
} from './consts';

export const initialState = fromJS({
  realtyList: [],
  isLoading: false,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_REALTY_LIST:
      return state.set('isLoading', true);
    case REALTY_LIST_SUCCESS:
      return state.set('realtyList', action.realtyList).set('isLoading', false);
    default:
      return state;
  }
}
