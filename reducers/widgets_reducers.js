import { combineReducers } from 'redux';
import {
  default as widgetActions
} from './../actions/widget_actions.js';


const _widgetsReducers = {
  [widgetActions.CREATE_WIDGET]: (state, action) => {
    return [
      ...state,
      action.payload
    ];
  },
  [widgetActions.UPDATE_WIDGET]: (state, action) => {
    return state.map(widget => {
      return widget.id === action.payload.id ?
        action.payload :
        widget;
    });
  },
  [widgetActions.DELETE_WIDGET]: (state, action) => {
    return state.filter(widget => {
      return widget.id !== action.payload.id;
    });
  }
};


function widgets(state=[], action) {
  return _widgetsReducers[action.type] ?
    _widgetsReducers[action.type](state, action) :
    state;
}




export const widgetsApp = combineReducers({
  widgets
});









