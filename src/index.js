import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const car = cars[3];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// const data = {
//   id: 9582,
//   year: 2008,
//   make: 'Buick',
//   model: 'Enclave',
//   type: 'SUV',
//   img: 'https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg',
//   description:
//     'The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.',
//   fuelConsumption: '10.5',
//   engineSize: '3.6L V6',
//   accessories: ['Leather seats', 'Panoramic sunroof', 'Premium audio system'],
//   functionalities: ['Power liftgate', 'Remote start', 'Blind-spot monitoring'],
//   rentalPrice: '$40',
//   rentalCompany: 'Luxury Car Rentals',
//   address: '123 Example Street, Kiev, Ukraine',
//   rentalConditions:
//     "Minimum age: 25\nValid driver's license\nSecurity deposit required",
//   mileage: 5858,
// };
