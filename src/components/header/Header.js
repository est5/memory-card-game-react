import BestScore from '../bestScore/BestScore';
import Title from '../title/Title';
import './headerStyle.css';

function Header() {
  return (
    <header className="header">
      <Title />
      <BestScore />
    </header>
  );
}

export default Header;
