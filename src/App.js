import './styles/App.css';
import freeCodeCampLogo from './imgs/logo/logo_fcc.jpg';
import Counter from './components/Counter';
import Button from './components/Button';
// import clickHandle from './functions/clickHandle';
// import restartCounter from './functions/restartCounter';
import { useState } from 'react';

function App() {

  const [numClicks , setNumClicks] = useState(0);

  const clickHandle = () => {
    setNumClicks(numClicks +1);
  };

  const restartCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='fCC-logo-container'>
        <img className='fCC-logo' src={ freeCodeCampLogo } alt='Logo FreeCodeCamp' />
      </div>
      <div className='counter-container'>
        <Counter numClicks={ numClicks } />
        <Button text='Click' isClickButton={ true } clickHandle={ clickHandle } />
        <Button text='Reiniciar' isClickButton={ false } clickHandle={ restartCounter } />
      </div>
    </div>
  );
}

export default App;