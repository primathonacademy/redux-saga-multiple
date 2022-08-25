import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import MathFact from './maths/MathFact';
import Joke from './jokes/Joke';

import './App.css';

const Menu = () => {
  return (
    <div>
      <h1>Home</h1>
      <br />
      <nav>
        <Link to='/math'>Math</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to='/joke'>Joke</Link>
      </nav>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='math' element={<MathFact />} />
        <Route path='joke' element={<Joke />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
