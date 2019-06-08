import _ from 'lodash';
import ACTIONS from './actions';

const initialState = {
  weight: 0,
  color: '#000000',
  paths: [],
};

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CHANGE_COLOR: {
      console.log(action);
      return { ...state, color: action.payload };
    }
    case ACTIONS.Types.DECREMENT_WEIGHT: {
      console.log(action);
      return { ...state, weight: state.weight > 1 ? state.weight - 1 : 1 };
    }
    case ACTIONS.Types.INCREMENT_WEIGHT: {
      console.log(action);
      return { ...state, weight: state.weight + 1 };
    }
    default:
      return state;
  }
};

export default editorReducer;
