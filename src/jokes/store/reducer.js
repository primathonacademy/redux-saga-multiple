import JokeAction from './action';

const defaultState = {
  joke: '',
  error: false,
  message: '',
};

const jokeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case JokeAction.FETCH_SUCCESS:
      return { ...state, joke: action.payload.joke, error: false, message: '' };

    case JokeAction.FETCH_FAILED:
      return {
        ...state,
        joke: '',
        error: true,
        message: action.payload.message,
      };

    default:
      return state;
  }
};

export default jokeReducer;
