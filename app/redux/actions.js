const Types = {
  ADD_POINT: 'ADD_POINT',
  CHANGE_COLOR: 'CHANGE_COLOR',
  DECREASE_WEIGHT: 'DECREASE_WEIGHT',
  INCREASE_WEIGHT: 'INCREASE_WEIGHT',
  MOUSE_DOWN: 'MOUSE_DOWN',
  MOUSE_UP: 'MOUSE_UP',
};

const addPoint = point => ({
  type: Types.ADD_POINT,
  payload: point,
});

const changeColor = color => ({
  type: Types.CHANGE_COLOR,
  payload: color,
});

const decreaseWeight = () => ({
  type: Types.DECREASE_WEIGHT,
  payload: null,
});

const increaseWeight = () => ({
  type: Types.INCREASE_WEIGHT,
  payload: null,
});

const mouseDown = () => ({
  type: Types.MOUSE_DOWN,
  payload: null,
});

const mouseUp = () => ({
  type: Types.MOUSE_UP,
  payload: null,
});

export default {
  addPoint,
  changeColor,
  decreaseWeight,
  increaseWeight,
  mouseDown,
  mouseUp,
  Types,
};
