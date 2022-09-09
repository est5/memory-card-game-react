import './bestScoreStyle.css';

function BestScore({ bestScore }) {
  return (
    <p className="best-score">
      Best:<span style={{ fontFamily: 'poke-full' }}> {bestScore}</span>
    </p>
  );
}

export default BestScore;
