import CarItemList from './components/CartItemList';
import Section from './components/Section';
import cars from './adverts.json';

function App() {
  return (
    <div>
      {/* <CarItemList items={cars} />
      
      */}
      <Section title="Топ недели" />
      <Section />
    </div>
  );
}

export default App;
