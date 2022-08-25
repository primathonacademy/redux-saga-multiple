import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import MathAction from '../store/action';
import FactText from '../FactText';
import './style.css';

const MathFact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: MathAction.FETCH_FACT });
  }, []);

  const onGetAnotherFact = () => {
    dispatch({ type: MathAction.FETCH_FACT });
  };

  return (
    <div className='container'>
      <h3>Number Fact Challenge</h3>
      <FactText />
      <button className='btn' onClick={onGetAnotherFact}>
        Get Another Fact
      </button>
    </div>
  );
};

export default MathFact;
