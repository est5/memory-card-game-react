import Card from '../card/Card';
import { v4 as uuid } from 'uuid';
import './cardSectionStyle.css';

function CardSection() {
  return (
    <section className="card-section">
      {IMAGES.map((i) => (
        <Card image={i} key={uuid()} />
      ))}
    </section>
  );
}

const IMAGES = [
  { src: './images/580b57fcd9996e24bc43c31a.png', id: uuid(), clicked: false },
  { src: './images/580b57fcd9996e24bc43c31c.png', id: uuid(), clicked: false },
  { src: './images/580b57fcd9996e24bc43c31d.png', id: uuid(), clicked: false },
  { src: './images/580b57fcd9996e24bc43c32a.png', id: uuid(), clicked: false },
  { src: './images/580b57fcd9996e24bc43c319.png', id: uuid(), clicked: false },
  { src: './images/585960bd4f6ae202fedf2856.png', id: uuid(), clicked: false },
  { src: './images/585960dd4f6ae202fedf2857.png', id: uuid(), clicked: false },
  { src: './images/580b57fcd9996e24bc43c32d.png', id: uuid(), clicked: false },
  { src: './images/585965e14f6ae202fedf2872.png', id: uuid(), clicked: false },
  { src: './images/5859662e4f6ae202fedf2878.png', id: uuid(), clicked: false },
];

export default CardSection;
