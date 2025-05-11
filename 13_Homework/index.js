/*
Задание 1
Создайте на основе старого массива новый массив объектов по образу: 
[{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]
*/

const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const updatedCars = cars.map(({ brand, isDiesel }) => ({ brand, isDiesel }));

console.log(updatedCars);

/*
Задание 2
Создайте новый массив, где оставьте только машины с дизельным двигателем.

*/

const dieselCars = cars.filter((car) => car.isDiesel);

console.log(dieselCars);

/*
Задание 3
Создайте новый массив, где оставьте только машины не с дизельным двигателем.
*/
const notDieselCars = cars.filter((car) => !car.isDiesel);

console.log(notDieselCars);
/*

Задание 4
Посчитайте общую стоимость всех машин не с дизельным двигателем.
*/

const totalPriceNotDieselCars = notDieselCars.reduce(
  (acc, car) => acc + car.price,
  0
);

console.log(totalPriceNotDieselCars);

/*
Задание 5
Повысьте цену всех машин в массиве на 20%.
*/

// мутирующий
cars.forEach((car) => {
  car.price *= 1.2;
});

console.log(cars);
/*
Задание 6
Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }

*/
const updatedDieselCars = cars.map(car => {
    if (car.isDiesel) {
      return { brand: "Tesla", price: 25000, isDiesel: false };
    }
    return car;
  });
  
  console.log(updatedDieselCars);
