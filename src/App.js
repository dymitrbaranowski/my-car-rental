import CarItemList from './components/CartItemList';
import Section from './components/Section';
import cars from './adverts.json';

function App() {
  return (
    <div>
      <Section title="Топ недели">
        <CarItemList items={cars} />
      </Section>
      <Section title="Лучшее"></Section>
    </div>
  );
}

export default App;
