export const CREATE_WIDGET = 'CREATE_WIDGET';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const DELETE_WIDGET = 'DELETE_WIDGET';


let nextWidgetId = 1;


export function createWidget(payload) {
  payload.id = nextWidgetId++;
  return {
    type: CREATE_WIDGET,
    payload
  };
}


export function updateWidget(payload) {
  return {
    type: UPDATE_WIDGET,
    payload
  };
}


export function deleteWidget(payload) {
  return {
    type: DELETE_WIDGET,
    payload
  };
}



export default {
  CREATE_WIDGET,
  UPDATE_WIDGET,
  DELETE_WIDGET,
  createWidget,
  updateWidget,
  deleteWidget
};







