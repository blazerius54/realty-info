import { fromJS } from 'immutable';
import { TOGGLE_MODAL } from './consts';

export const initialState = fromJS({
  showModal: false,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return state.set('showModal', !state.get('showModal'));
    default:
      return state;
  }
}
