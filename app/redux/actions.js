const Types = {
  ADD_POINT: 'ADD_POINT',
  CHANGE_COLOR: 'CHANGE_COLOR',
  DECREASE_WEIGHT: 'DECREASE_WEIGHT',
  INCREASE_WEIGHT: 'INCREASE_WEIGHT',
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
});

const increaseWeight = () => ({
  type: Types.INCREASE_WEIGHT,
});

export default {
  addPoint,
  changeColor,
  decreaseWeight,
  increaseWeight,
  Types,
};
