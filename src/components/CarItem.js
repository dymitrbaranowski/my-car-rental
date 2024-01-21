import defaultImage from './default.jpg';

const CarItem = ({
  img = defaultImage,
  model = 'неизвестно',
  make,
  year,
  address,
  rentalCompany,
  type,
  mileage,
  accessories,
}) => {
  return (
    <div>
      <img src={img} alt={model} width="480" />
      <h2>{make}</h2>
      <span>{model}</span>
      <span>{year}</span>

      <ul>
        <li>{address.split(',')[1]}</li>
        <li>{address.split(',')[2]}</li>
        <li>{rentalCompany}</li>
        <li>{type}</li>
        <li>{model}</li>
        <li>{mileage}</li>
        <li>{accessories[0]}</li>
      </ul>
      <button type="button">Learn more</button>
    </div>
  );
};

export default CarItem;
