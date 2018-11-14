import { fromJS } from 'immutable';
import {
  TOGGLE_MODAL,
  CLOSE_MODAL,
  REQUEST_REALTY_INFO,
  REALTY_INFO_SUCCESS,
} from './consts';

export const initialState = fromJS({
  showModal: false,
  isLoading: false,
  selectedRealty: null,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return state.set('showModal', !state.get('showModal'));
    case CLOSE_MODAL:
      return state.set('showModal', false);
    case REQUEST_REALTY_INFO:
      return state.set('isLoading', true).set('selectedRealty', null);
    case REALTY_INFO_SUCCESS:
      return state.set('isLoading', false).set('selectedRealty', action.realty);
    default:
      return state;
  }
}
