import { useState } from 'react';
import React from 'react';
import Header from './components/header/Header';

const Container = React.lazy(() => import('./components/container/Container'));

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <Header bestScore={bestScore} />
      <React.Suspense>
        <Container
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
        />
      </React.Suspense>
    </>
  );
}

export default App;
