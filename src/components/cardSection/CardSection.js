import Card from '../card/Card';
import { v4 as uuid } from 'uuid';
import './cardSectionStyle.css';
import { useEffect, useState } from 'react';

function CardSection({
  currentScore,
  setCurrentScore,
  setBestScore,
  bestScore,
}) {
  const [images, setImages] = useState([
    {
      src: './images/580b57fcd9996e24bc43c31a.png',
      id: uuid(),
      clicked: false,
    },
    {
      src: './images/580b57fcd9996e24bc43c31c.png',
      id: uuid(),
      clicked: false,
    },
    {
      src: './images/580b57fcd9996e24bc43c31d.png',
      id: uuid(),
      clicked: false,
    },
    {
      src: './images/580b57fcd9996e24bc43c32a.png',
      id: uuid(),
      clicked: false,
    },
    {
      src: './images/580b57fcd9996e24bc43c319.png',
      id: uuid(),
      clicked: false,
    },
    {
      src: './images/585960bd4f6ae202fedf2856.png',
      id: uuid(),
      clicked: false,
    },
    {
      src: './images/585960dd4f6ae202fedf2857.png',
      id: uuid(),
      clicked: false,
    },
    {
      src: './images/580b57fcd9996e24bc43c32d.png',
      id: uuid(),
      clicked: false,
    },
    {
      src: './images/585965e14f6ae202fedf2872.png',
      id: uuid(),
      clicked: false,
    },
    {
      src: './images/5859662e4f6ae202fedf2878.png',
      id: uuid(),
      clicked: false,
    },
  ]);

  useEffect(() => {
    setImages(shuffleArray(images));
  }, [images, currentScore]);

  const setClicked = (id) => {
    setImages(
      images.filter((img) => {
        if (img.id === id) {
          img.clicked = true;
          return img;
        }
        return img;
      })
    );
  };

  const resetArray = () => {
    setImages(
      shuffleArray(images).map((e) => {
        e.clicked = false;
        return e;
      })
    );
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <section className="card-section">
      {images.map((i) => (
        <Card
          setCurrentScore={setCurrentScore}
          setBestScore={setBestScore}
          bestScore={bestScore}
          currentScore={currentScore}
          setClicked={setClicked}
          resetArray={resetArray}
          image={i}
          key={uuid()}
        />
      ))}
    </section>
  );
}

export default CardSection;
