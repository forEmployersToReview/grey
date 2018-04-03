import { FETCH_VESSELS } from '../actions';

export default (state = [], { payload, type }) => {
  switch (type) {
    case FETCH_VESSELS:
      return payload;
    default:
      return state;
  }
  return payload;
}