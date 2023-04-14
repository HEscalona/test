interface CardsProps {
  image: string;
  name: string;
  species: string;
  id: string;
  onPress: () => void;
}

const Cards: React.FC<CardsProps> = ({ image, name, species, id, onPress }) => {
  return (
    <article key={id}>
      <img src={image} alt="Sample photo" />
      <div className="text">
        <h3>{name}</h3>
        <p>{species}</p>
        <button onClick={onPress}>Details</button>
      </div>
    </article>
  );
};

export default Cards;
