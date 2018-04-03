import axios from 'axios';

import {
  FETCH_CONTAINERS,
  FETCH_VESSELS,
  FETCH_VESSEL_PLANS,
  UPDATE_VESSELS
} from './index';

const sendRequest = (method, path, packet) =>
  axios[method](`http://localhost:8000/${path}`, packet).then(
    response => response.data
  );

export const fetchContainers = () => {
  const request = sendRequest('get', 'containers');
  return {
    type: FETCH_CONTAINERS,
    payload: request
  };
};

export const fetchVessels = () => {
  const request = sendRequest('get', 'vessels');
  return {
    type: FETCH_VESSELS,
    payload: request
  };
};

export const updateVessels = pkt => {
  // E.G.{"vessel_id": 2, "container_ids": [1, 8, 3]}
  const request = sendRequest('post', 'vessel_plans', pkt);
  return {
    type: UPDATE_VESSELS,
    payload: request
  };
};

export const fetchVesselPlans = () => {
  const request = sendRequest('get', 'vessel_plans');

  return {
    type: FETCH_VESSEL_PLANS,
    payload: request
  };
};
