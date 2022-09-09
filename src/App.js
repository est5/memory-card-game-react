import { useState } from 'react';
import Container from './components/container/Container';
import Header from './components/header/Header';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <Header />
      <Container />
    </>
  );
}

export default App;
