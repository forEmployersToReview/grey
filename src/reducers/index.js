import { combineReducers } from 'redux';
import containers from './containers';
import plans from './plans';
import vessels from './vessels';

export default combineReducers({ containers, plans, vessels });
