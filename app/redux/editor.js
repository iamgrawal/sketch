import _ from 'lodash';
import ACTIONS from './actions';

const initialState = {
  weight: 3,
  color: '#568929',
  paths: [],
  clicked: false,
};

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.Types.ADD_POINT: {
      console.log(action);
      const newPath = _.cloneDeep(state.paths);
      newPath.push(action.points);
      return { ...state, paths: newPath };
    }
    case ACTIONS.Types.CHANGE_COLOR: {
      return { ...state, color: action.payload };
    }
    case ACTIONS.Types.DECREASE_WEIGHT: {
      console.log(action);
      return { ...state, weight: state.weight > 1 ? state.weight - 1 : 1 };
    }
    case ACTIONS.Types.INCREASE_WEIGHT: {
      console.log(action);
      return { ...state, weight: state.weight + 1 };
    }
    case ACTIONS.Types.MOUSE_DOWN: {
      return { ...state, clicked: true };
    }
    case ACTIONS.Types.MOUSE_UP: {
      return { ...state, clicked: false };
    }
    default:
      return state;
  }
};

export default editorReducer;
