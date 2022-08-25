import { useSelector } from 'react-redux';

const FactText = () => {
  const entireStore = useSelector((state) => state);

  console.log('Math - ', entireStore);

  const joke = useSelector((state) => state.joke.joke);

  console.log('Math joke - ', joke);

  const fact = useSelector((state) => state.math.fact);
  return <div className='joke'>{fact}</div>;
};

export default FactText;
