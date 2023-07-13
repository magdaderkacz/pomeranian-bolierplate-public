import './styles.css';

export const RoundImage = ({ src, size }) => {
  return (
    <div
      className="round-image"
      style={{
        backgroundImage: `url(${src})`,
        weight: size,
        height: size,
      }}
    ></div>
  );
};
