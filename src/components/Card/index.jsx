import "./styles.css";

const Card = ({ title, subtitle, type }) => (
  <div className="cardBox">
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <div className="typeboxContainer">
      <div className="typebox">
        <p>{type}</p>
      </div>
    </div>
  </div>
);

export default Card;
