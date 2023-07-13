import './styles.css';
import logoPomeranian from './pomeranian-icon.png';
import logoIkea from './Ikea_logo.svg';
import zdjecie from './zdjecie.jpeg';

export function Exercise() {
  return (
    <div>
      <img src={logoPomeranian} alt="Pomeranian logo" />
      <img src={logoIkea} alt="Ikea logo" />
      <img src={zdjecie} alt="Zdjęcie" />
    </div>
  );
}
