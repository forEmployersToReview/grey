import { FETCH_VESSEL_PLANS } from '../actions';

export default (state = [], { payload, type }) => {
  switch (type) {
    case FETCH_VESSEL_PLANS: {
      return payload;
    }
    default: {
      return state;
    }
  }
  return payload;
};
