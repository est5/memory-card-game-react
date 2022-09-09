import Card from '../card/Card';
import './cardSectionStyle.css';

function CardSection() {
  const cards = () => {
    return (
      <>
        <Card />
      </>
    );
  };

  return (
    <section className="card-section">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}

export default CardSection;
