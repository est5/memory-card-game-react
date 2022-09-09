import './cardStyle.css';
function Card({ image }) {
  return (
    <div className="card">
      <img className="card__img" src={require(`${image.src}`)}></img>
    </div>
  );
}

export default Card;
