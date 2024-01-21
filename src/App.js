import CarItemList from './components/CartItemList';
import cars from './adverts.json';

function App() {
  return (
    <div>
      <CarItemList items={cars} />
    </div>
  );
}

export default App;
