import CardSection from '../cardSection/CardSection';
import Score from '../score/Score';
import './containerStyle.css';
function Container() {
  return (
    <main className="container">
      <Score />
      <CardSection />
    </main>
  );
}

export default Container;
