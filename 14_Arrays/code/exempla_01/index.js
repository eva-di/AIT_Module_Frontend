const cars = [
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "BMW", price: 10000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Nissan", price: 21000, isDiesel: false },
    { brand: "AMW", price: 20000, isDiesel: true },
    { brand: "AMW", price: 9000, isDiesel: true },
  ];

  // reverse - мутирующий!!! возвращает ссылку на исходный массив

  const newCars = cars.reverse();

  console.log(newCars);
  console.log(cars);

  // sort

  const parts = ["air filter", "tyres", "accumulator", "spark plugs"];

  parts.sort();
  console.log(parts); // по умолчанию сортировка по алфавиту [ 'accumulator', 'air filter', 'spark plugs', 'tyres' ]

  const nums = [1, 4, 2, 10, 12];

  nums.sort();
  console.log(nums); // [ 1, 10, 12, 2, 4 ]

  // -1, 0, 1

  nums.sort((a, b) => a - b); 

  console.log(nums); // [ 1, 2, 4, 10, 12 ]

  nums.sort((a, b) => b - a); 

  console.log(nums); // [ 12, 10, 4, 2, 1 ]

parts.sort((a, b) => a.localeCompare(b));
console.log(parts); // [ 'accumulator', 'air filter', 'spark plugs', 'tyres' ]

parts.sort((a, b) => b.localeCompare(a));
console.log(parts); // [ 'tyres', 'spark plugs', 'air filter', 'accumulator' ]


cars.sort((a, b) => a.price - b.price);
console.log(cars);

// сравнение по нескольким параметрам
// сначала сравним по цене, а далее, если цена отличается, то мы их меняем на разные позиции, то
// сортируем по алфавиту

const compareCars = (a, b) => {
    const priceComparisonResult = a.price - b.price;
    if (priceComparisonResult === 0) {
        return a.brand.localeCompare(b.brand);
   }
   return priceComparisonResult;
};

cars.sort(compareCars);
console.log(cars);
