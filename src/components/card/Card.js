import './cardStyle.css';
function Card({
  image,
  currentScore,
  setCurrentScore,
  setClicked,
  bestScore,
  setBestScore,
  resetArray,
}) {
  const updateBestScore = () => {
    setBestScore(currentScore > bestScore ? currentScore : bestScore);
    setCurrentScore(0);
    resetArray();
  };

  return (
    <div className="card">
      <img
        onClick={() => {
          if (image.clicked) {
            updateBestScore();
            return;
          }
          setClicked(image.id);
          setCurrentScore(currentScore + 1);
        }}
        className="card__img"
        alt=""
        src={require(`${image.src}`)}
      ></img>
    </div>
  );
}

export default Card;
