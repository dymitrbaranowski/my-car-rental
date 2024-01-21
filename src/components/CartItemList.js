import CarItem from './CarItem';

function CarItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <CarItem
            img={item.img}
            model={item.model}
            make={item.make}
            year={item.year}
            address={item.address}
            rentalCompany={item.rentalCompany}
            type={item.type}
            mileage={item.mileage}
            accessories={item.accessories}
          />
        </li>
      ))}
    </ul>
  );
}

export default CarItemList;
