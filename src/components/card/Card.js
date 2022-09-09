import './cardStyle.css';
function Card() {
  return (
    <div className="card">
      <img
        className="card__img"
        src={require('./rossijskaya-imperiya-2.jpg')}
      ></img>
    </div>
  );
}

export default Card;
