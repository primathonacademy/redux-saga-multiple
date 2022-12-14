import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import JokeAction from '../store/action';

import './style.css';

const Joke = () => {
  const entireStore = useSelector((state) => state);
  console.log('entireStore: ', entireStore);

  const joke = useSelector((state) => state.joke.joke);
  const dispatch = useDispatch();

  const math = useSelector((state) => state.math);

  const onGetAnotherFact = () => {
    dispatch({ type: JokeAction.FETCH_REQUEST, payload: { math } });
  };

  useEffect(() => {
    dispatch({ type: JokeAction.FETCH_REQUEST, payload: { math } });
  }, []);

  return (
    <div className='container'>
      <h3>Don't Laugh Challenge</h3>
      <div className='joke'>{joke}</div>
      <button className='btn' onClick={onGetAnotherFact}>
        Get Another Fact
      </button>
    </div>
  );
};

export default Joke;
