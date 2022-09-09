import './scoreStyle.css';

function Score({ currentScore }) {
  return (
    <p className="score">
      Current Score:{' '}
      <span style={{ fontFamily: 'poke-full' }}> {currentScore}</span>
    </p>
  );
}

export default Score;
