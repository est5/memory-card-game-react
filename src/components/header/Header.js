import BestScore from '../bestScore/BestScore';
import Title from '../title/Title';
import './headerStyle.css';

function Header({ bestScore }) {
  return (
    <header className="header">
      <Title />
      <BestScore bestScore={bestScore} />
    </header>
  );
}

export default Header;
