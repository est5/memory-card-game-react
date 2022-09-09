import CardSection from '../cardSection/CardSection';
import Score from '../score/Score';
import './containerStyle.css';
function Container({ setBestScore, bestScore, currentScore, setCurrentScore }) {
  return (
    <main className="container">
      <Score currentScore={currentScore} />
      <CardSection
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </main>
  );
}

export default Container;
