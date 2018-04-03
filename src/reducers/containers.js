import { FETCH_CONTAINERS } from '../actions';
import { mapContainers } from '../utils/mapContainers';

export default (state = {}, { payload, type }) => {
  switch (type) {
    case FETCH_CONTAINERS: {
      if (payload.length) {
        // If order is not important on this case, then having the containers array
        // as an object would assist on constant lookups here.
        // If that's the case then run this logic on the backend
        // to avoid unnecessary computation in this layer.
        const originalById = payload.reduce((newCont, unit) => {
          newCont[unit.id] = unit;
          return newCont;
        }, {});
        return Object.assign(state, {
          alphabet: mapContainers(payload),
          originalById
        });
      }
      return state;
    }
    default:
      return state;
  }
  return payload;
};
