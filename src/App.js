import { useState } from 'react';
import Container from './components/container/Container';
import Header from './components/header/Header';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <Header bestScore={bestScore} />
      <Container
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </>
  );
}

export default App;
